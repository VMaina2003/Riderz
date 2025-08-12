# 🚴‍♂️ MotoGo — Motorcycle Delivery Web App

**MotoGo** is a modern, responsive web application built with **React**, **TailwindCSS**, and **JavaScript**, designed to streamline motorcycle-based deliveries.  
It supports **three user roles** — **Customer**, **Rider**, and **Admin** — each with tailored dashboards, real-time tracking, and a smooth, intuitive interface.

---

## 🌟 Features

### **For Customers**
- 📦 **Place delivery orders** with pickup & drop-off details.
- 🗺 **Live package tracking** using rider GPS location.
- 📜 View **order history** and statuses.
- ✨ Clean, mobile-friendly interface.

### **For Riders**
- 📋 **View assigned deliveries** in real time.
- ✅ Accept, start, and complete orders.
- 🗺 Location sharing for live tracking.
- 📈 Delivery history & performance stats.

### **For Admins**
- 📊 **Manage all orders** and track statuses.
- 👤 Assign riders to deliveries.
- 🚴 Monitor active riders on a live map.
- 📂 Manage riders, customers, and data.

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript, TailwindCSS  
- **State Management:** React Context API, Custom Hooks  
- **Routing:** React Router  
- **Maps & Tracking:** (Google Maps API / Leaflet integration ready)  
- **Styling:** TailwindCSS + Custom Components  

---

## 📂 Project Structure

components/
layout/ # Navbar, Footer, Sidebar
orders/ # Order form, list, and details
riders/ # Rider list, rider map
ui/ # Reusable UI elements (Button, Input, Modal)
tracking/ # Live tracking component

pages/ # Home, Login, Register, Dashboards

context/ # Auth & Order state providers

hooks/ # useAuth, useOrders

services/ # API communication (orders, riders, auth)

styles/ # Global Tailwind styles

utils/ # Helper functions (format date, calculate distance)



---

## 🚀 How It Works

1. **Customer** creates an order using a simple form.
2. **Admin** assigns a rider to the order.
3. **Rider** accepts the order and starts the delivery.
4. **Customer** can **track the rider live** until delivery is complete.
5. **Admin** monitors all deliveries from the dashboard.

---

## 💡 Example Use Cases
- Local shops offering same-day delivery.
- Small restaurants doing in-house delivery.
- Personal courier services for small packages.
- Campus delivery services for books or food.

---

## 📌 Status
This is a **frontend-first implementation** — API service files are ready to connect with a backend (Node.js/Express, Firebase, or any REST API).

