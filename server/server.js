const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Telr configuration
const TELR_CONFIG = {
  apiKey: process.env.TELR_API_KEY,
  storeId: process.env.TELR_STORE_ID,
  baseUrl:
    process.env.TELR_BASE_URL || "https://secure.telr.com/gateway/order.json",
  returnUrl:
    process.env.TELR_RETURN_URL || "http://localhost:5173/payment-success",
  cancelUrl:
    process.env.TELR_CANCEL_URL || "http://localhost:5173/payment-cancel",
};

// Pricing data (matching your frontend structure)
const pricingPlans = {
  small: [
    {
      id: "consultation_1h",
      title: "General / Specialized Consultation (1 Hour)",
      price: 1000,
      currency: "AED",
      description:
        "Receive expert advice tailored to your needs for personal or organizational growth.",
    },
    {
      id: "workshop_1h",
      title: "One-Hour Training Workshop",
      price: 3500,
      currency: "AED",
      description:
        "A focused, practical session delivering actionable skills and insights.",
    },
    {
      id: "workshop_1day",
      title: "One-Day Training Workshop",
      price: 5000,
      currency: "AED",
      description:
        "Comprehensive one-day workshop to build and refine essential professional skills.",
    },
    {
      id: "course_1day",
      title: "One-Day Training Course",
      price: 8000,
      currency: "AED",
      description:
        "A full-day intensive course designed for measurable development outcomes.",
    },
  ],
  medium: [
    {
      id: "program_1week",
      title: "Full Training Program (1 Week)",
      price: 20000,
      currency: "AED",
      description:
        "An in-depth, week-long training experience designed for organizational improvement.",
    },
  ],
  large: [
    {
      id: "program_1day_large",
      title: "Full Training Program (1 Day)",
      price: 40000,
      currency: "AED",
      description:
        "A premium corporate training session focused on leadership, strategy, and performance.",
    },
  ],
};

// Generate Telr signature for security
function generateTelrSignature(params, secret) {
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  return crypto.createHmac("sha256", secret).update(sortedParams).digest("hex");
}

// Get all pricing plans
app.get("/api/pricing", (req, res) => {
  res.json(pricingPlans);
});

// Create Telr payment order
app.post("/api/create-telr-order", async (req, res) => {
  try {
    const { serviceId, customerInfo } = req.body;

    // Find the service in pricing plans
    let service = null;
    for (const category in pricingPlans) {
      service = pricingPlans[category].find((s) => s.id === serviceId);
      if (service) break;
    }

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    // Generate unique order ID
    const orderId = `HELAL_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Prepare Telr order parameters
    const orderParams = {
      ivp_method: "create",
      ivp_store: TELR_CONFIG.storeId,
      ivp_authkey: TELR_CONFIG.apiKey,
      ivp_cart: orderId,
      ivp_test: process.env.NODE_ENV === "development" ? "1" : "0",
      ivp_amount: service.price,
      ivp_currency: service.currency,
      ivp_desc: service.title,
      return_auth: TELR_CONFIG.returnUrl,
      return_can: TELR_CONFIG.cancelUrl,
      return_decl: TELR_CONFIG.cancelUrl,
      bill_fname: customerInfo.name.split(" ")[0] || customerInfo.name,
      bill_lname: customerInfo.name.split(" ").slice(1).join(" ") || "",
      bill_email: customerInfo.email,
      bill_mobile: customerInfo.phone,
      bill_address: "Training Session",
      bill_city: "Dubai",
      bill_country: "AE",
      bill_zip: "00000",
      ivp_lang: "en",
      ivp_update_url: `${
        process.env.BACKEND_URL || "http://localhost:5000"
      }/api/telr-webhook`,
    };

    // Generate signature
    const signature = generateTelrSignature(orderParams, TELR_CONFIG.apiKey);
    orderParams.ivp_signature = signature;

    // Send order to Telr
    const response = await axios.post(TELR_CONFIG.baseUrl, orderParams, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data && response.data.order && response.data.order.ref) {
      res.json({
        success: true,
        orderRef: response.data.order.ref,
        orderUrl: response.data.order.url,
        service: service,
        orderId: orderId,
      });
    } else {
      throw new Error("Failed to create Telr order");
    }
  } catch (error) {
    console.error(
      "Error creating Telr order:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Failed to create payment order",
      details: error.response?.data || error.message,
    });
  }
});

// Handle Telr webhook/callback
app.post("/api/telr-webhook", (req, res) => {
  try {
    const webhookData = req.body;
    console.log("Telr webhook received:", webhookData);

    // Verify webhook signature if needed
    // Process the payment status update
    // Update your database, send emails, etc.

    res.json({ received: true });
  } catch (error) {
    console.error("Error processing Telr webhook:", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

// Handle payment success
app.post("/api/payment-success", async (req, res) => {
  try {
    const { orderRef, orderId, customerInfo } = req.body;

    console.log("Payment successful:", {
      orderRef,
      orderId,
      customer: customerInfo,
      timestamp: new Date().toISOString(),
    });

    // Here you can:
    // 1. Save the booking to your database
    // 2. Send confirmation email to customer
    // 3. Send notification to admin
    // 4. Update inventory/availability

    res.json({
      success: true,
      message: "Payment processed successfully",
      orderRef,
    });
  } catch (error) {
    console.error("Error processing payment success:", error);
    res.status(500).json({ error: "Failed to process payment success" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    paymentGateway: "Telr",
    country: "UAE",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Telr payment integration ready`);
  console.log(`Store ID: ${TELR_CONFIG.storeId}`);
});
