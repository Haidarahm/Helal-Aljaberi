# Telr Payment Gateway Integration Setup Guide

This guide will help you set up Telr payments for the Helal Aljaberi website using the UAE-based payment gateway.

## 🚀 Quick Setup

### 1. Telr Merchant Account Setup

1. **Create a Telr Account** at [telr.com](https://telr.com/)
2. **Complete merchant registration** for UAE
3. **Get your credentials** from Telr Dashboard:
   - **API Key** (Authentication key)
   - **Store ID** (Your merchant store identifier)

### 2. Backend Setup

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create environment file:**

   ```bash
   cp env.example .env
   ```

4. **Update `.env` file with your Telr credentials:**

   ```env
   TELR_API_KEY=your_telr_api_key_here
   TELR_STORE_ID=your_telr_store_id_here
   TELR_BASE_URL=https://secure.telr.com/gateway/order.json
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   BACKEND_URL=http://localhost:5000
   TELR_RETURN_URL=http://localhost:5173/payment-success
   TELR_CANCEL_URL=http://localhost:5173/payment-cancel
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

### 3. Frontend Setup

1. **Create environment file in the root directory:**

   ```bash
   cp env.example .env
   ```

2. **Update `.env` file:**

   ```env
   VITE_API_URL=http://localhost:5000
   VITE_PAYMENT_GATEWAY=Telr
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Telr Payment Flow

1. **User clicks "Subscribe"** on any pricing plan
2. **Customer information** is collected in the modal
3. **Order is created** via Telr API
4. **User is redirected** to Telr's secure payment page
5. **Payment is processed** on Telr's platform
6. **User is redirected back** to your website
7. **Success/failure** is handled via return URLs

### Return URL Setup

Create these pages in your React app:

1. **Payment Success Page** (`/payment-success`)
2. **Payment Cancel Page** (`/payment-cancel`)

## 📁 File Structure

```
├── server/                 # Backend Express server
│   ├── package.json        # Backend dependencies
│   ├── server.js          # Main server file with Telr integration
│   └── env.example        # Environment variables template
├── src/
│   ├── components/
│   │   └── TelrPaymentModal.jsx  # Telr payment component
│   └── pages/
│       └── Pricing.jsx        # Updated with Telr integration
└── env.example            # Frontend environment variables
```

## 🎯 Features

- ✅ **Secure Payment Processing** with Telr Gateway
- ✅ **UAE Localized** payment methods
- ✅ **Multiple Payment Options** (15+ methods)
- ✅ **Real-time Payment Status** updates
- ✅ **Customer Information** collection
- ✅ **Multi-language Support** (Arabic/English)
- ✅ **Responsive Design** for all devices
- ✅ **Error Handling** and user feedback
- ✅ **Webhook Support** for payment confirmations

## 🔒 Security Notes

- **Never commit** your `.env` files to version control
- **Use test credentials** during development
- **Switch to live credentials** only in production
- **Enable webhook signature verification** in production
- **Telr handles PCI compliance** for you

## 🚀 Production Deployment

1. **Update environment variables** with live Telr credentials
2. **Deploy backend** to a service like Heroku, Railway, or Vercel
3. **Update frontend** API URL to point to your deployed backend
4. **Configure return URLs** in Telr Dashboard to point to your production URLs
5. **Set up webhooks** in Telr Dashboard for payment notifications

## 💡 Telr Advantages

- **UAE-based** payment gateway
- **Local expertise** in Middle East markets
- **15+ payment methods** including local options
- **99.99% availability** guarantee
- **120+ currencies** supported
- **30+ languages** supported
- **Licensed by Central Bank of UAE**

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Check the backend server logs
3. Verify your Telr credentials are correct
4. Ensure both frontend and backend servers are running
5. Contact Telr support at sales@telr.com

## 🔗 Useful Links

- [Telr Website](https://telr.com/)
- [Telr API Documentation](https://telr.com/resources/api-reference/)
- [Telr Integration Guide](https://telr.com/resources/get-started/)
- [Telr Payment Methods](https://telr.com/resources/payment-methods/)

## 💡 Next Steps

- Add email confirmations for successful payments
- Implement booking management system
- Add payment history for customers
- Set up automated invoice generation
- Configure webhook endpoints for real-time updates
