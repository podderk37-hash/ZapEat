# ZapEats

## Project Description:
ZapEats is a food delivery platform where users can browse restaurants, place orders, and track deliveries in real-time. Restaurant owners can manage shops and menu items, and delivery personnel can accept and deliver orders efficiently.

## important

Zapeat is a live location-based food ordering platform. Only shops and food items available in your current location will be visible. If your location doesn’t match, please enter your city manually to explore local restaurants.



## Features

- User signup/signin with email/password or Google
- Password reset with OTP verification
- Browse shops and menu items by city
- Add items to cart and place orders
- Online payment integration with Razorpay
- Real-time order tracking via Socket.io
- Shop owners can manage items and orders
- Delivery boys can accept orders and update delivery status

## Tech Stack

- Frontend: React, Tailwind CSS, Redux, Vite
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT, bcrypt
- Payments: Razorpay
- Realtime Updates: Socket.io
- Cloud Storage: Cloudinary (for images)

## Project Structure

backend/
├─ controllers/
├─ models/
├─ routes/
├─ middleware/
└─ utils/

frontend/
├─ components/
├─ pages/
├─ hooks/
└─ store/

## Setup & Installation

### Backend
cd backend
npm install
npm run dev

## frontend
cd frontend
npm install
npm run dev

## custom hooks

| Hook                | Purpose                                                   |
| ------------------- | --------------------------------------------------------- |
| `useGetCity`        | Get current city, state, and address based on geolocation |
| `useGetCurrentUser` | Fetch the currently logged-in user                        |
| `useGetItemsByCity` | Fetch items available in the current city                 |
| `useGetShopByCity`  | Fetch shops available in the current city                 |
| `useGetMyOrders`    | Fetch orders for the logged-in user (customer or owner)   |
| `useGetMyShop`      | Fetch the shop owned by the current user (owner)          |
| `useUpdateLocation` | Continuously update the user's geolocation in the backend |

## API Endpoints

## Auth & User

POST /auth/signup - Register new user

POST /auth/signin - Login

GET /user/current - Get current user

POST /user/update-location - Update user's location

## Shops

POST /shop/create-edit - Create/Edit shop

GET /shop/get-my - Get my shop details

GET /shop/get-by-city/:city - Get shops in a city

## Items

POST /item/add - Add item to shop

GET /item/get-by-city/:city - Get items in a city

## Orders

POST /order/place - Place an order

POST /order/verify-payment - Verify Razorpay payment

GET /order/my-orders - Get my orders

PATCH /order/update-status/:orderId/:shopId - Update order status

POST /order/send-delivery-otp - Send OTP to customer

POST /order/verify-delivery-otp - Verify OTP for delivery


## Live Demo

[ZapEats](https://zapeat.onrender.com)


