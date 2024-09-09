# Project Description

# The Wild Oasis - Hotel Management Application

Welcome to The Wild Oasis Hotel Management Application, a user-friendly and feature-rich system developed to streamline hotel operations. This documentation provides an overview of the application's functionalities, key features, technology stack, and how to set it up.

## Key Features 📝
### Authentication and Authorization
- Hotel employees can log in to perform various tasks.
- New users can only be signed up within the application to ensure only authorized hotel employees have accounts.
- Users can upload avatars, change their names, and update passwords.

### Cabins
- Table view with cabin details, including photo, name, capacity, price, and current discount.
- Users can update, delete, or create new cabins, including photo uploads.

### Bookings
- Table view with booking details such as arrival and departure dates, status, paid amount, cabin, and guest data.
- Filterable by booking status: "unconfirmed," "checked in," or "checked out."
- Additional booking data includes the number of guests, nights, guest observations, and breakfast details.

### Check In/Out
- Users can delete, check-in, or check out a booking as the guest arrives.
- On check-in, users need to accept payment outside the app and confirm payment receipt inside the app.
- Guests can add breakfast for the entire stay during check-in.

### Guests
- Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

### Dashboard
- Initial app screen displays important information for the last 7, 30, or 90 days.
- List of guests checking in and out on the current day.
- Statistics on recent bookings, sales, check-ins, and occupancy rate.
- Charts showing daily hotel sales, including "total" and "extras" sales (breakfast).
- Statistics on stay durations.

### Settings
- Users can define application-wide settings, including breakfast price, min and max nights per booking, and max guests per booking.
- Dark mode feature.


## Technology Used
- **React:** JavaScript library for UI development.
- **Supabase:** Cloud database service for real-time and secure data storage.
- **@tanstack/react-query:** Data-fetching and state management library for React.
- **date-fns:** JavaScript date utility library.
- **react-router-dom:** Library for routing and navigation in React apps.
- **recharts:** Composable charting library for React.
- **styled-components:** CSS-in-JS library for styling React components.
- **react-hot-toast:** Customizable toast notification library.
- **react-icons:** Collection of customizable icons.
- **react-hook-form:** Library for form state management and validation.

## Build With 🏗️
- **JavaScript, Typescript**
- **ReactJs, Redux, react-query (Front-end)**
- **Styled Component (Styling)**
- **NodeJs, ExpressJs (Back-end)**
- **Supabase (Database)**

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the database on Supabase.
4. Configure environment variables.
5. Run the application using `npm start`.


# Deployed App:
https://reactjs-the-wild-oasis.netlify.app/login

id: abk@example.com

pass: pass1234

<img src="project screenshots/1.png" alt="drawing"/>
<img src="project screenshots/2.png" alt="drawing"/>
<img src="project screenshots/3.png" alt="drawing"/>
<img src="project screenshots/4.png" alt="drawing"/>
<img src="project screenshots/5.png" alt="drawing"/>
<img src="project screenshots/6.png" alt="drawing"/>
<img src="project screenshots/7.png" alt="drawing"/>
<img src="project screenshots/8.png" alt="drawing"/>
<img src="project screenshots/9.png" alt="drawing"/>
<img src="project screenshots/10.png" alt="drawing"/>
<img src="project screenshots/11.png" alt="drawing"/>
<img src="project screenshots/12.png" alt="drawing"/>
<img src="project screenshots/13.png" alt="drawing"/>
<img src="project screenshots/14.png" alt="drawing"/>
<img src="project screenshots/15.png" alt="drawing"/>
<img src="project screenshots/16.png" alt="drawing"/>
<img src="project screenshots/17.png" alt="drawing"/>
<img src="project screenshots/18.png" alt="drawing"/>
<img src="project screenshots/19.png" alt="drawing"/>
<img src="project screenshots/20.png" alt="drawing"/>
<img src="project screenshots/21.png" alt="drawing"/>
<img src="project screenshots/22.png" alt="drawing"/>
<img src="project screenshots/23.png" alt="drawing"/>
<img src="project screenshots/24.png" alt="drawing"/>
<img src="project screenshots/25.png" alt="drawing"/>
<img src="project screenshots/26.png" alt="drawing"/>
<img src="project screenshots/27.png" alt="drawing"/>
<img src="project screenshots/28.png" alt="drawing"/>
<img src="project screenshots/29.png" alt="drawing"/>
<img src="project screenshots/30.png" alt="drawing"/>
<img src="project screenshots/31.png" alt="drawing"/>
<img src="project screenshots/32.png" alt="drawing"/>
<img src="project screenshots/33.png" alt="drawing"/>
<img src="project screenshots/34.png" alt="drawing"/>

# Running Locally
Create a .env.local file in your root directory. There you can insert your supabase key and name it VITE_SUPABASE_KEY.

command: npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
