<div align="center">
  <br />
      <img src="https://res.cloudinary.com/dkl9cqqui/image/upload/v1728806505/Booking-glass_kgko4l.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
    <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" alt="socket" />
    <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="stripe" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongo-db" />
  </div>

  <h3 align="center">Roomify - A Hotel Booking Web Application</h3>

   <div align="center">
     I built this full-stack hotel booking application to challenge myself with new concepts, improve my development skills, and gain hands-on experience in building complex web applications. This project is not only a learning journey but also a fun way to explore practical use cases in a real-world scenario.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 📘 [Intro](#introduction)
2. 🛠️ [Tech Stack](#tech-stack)
3. ✨ [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 📄 [License](#license)

## <a name="introduction">📘 Intro</a>

Roomify is a full-stack web application for booking hotels. This repository contains the client part of the application, while the backend part can be found in the [booking-server repository](https://github.com/Deynao1996/booking-server).

Iy is a booking platform with dark and light themes, registration, authentication, and additional features such as Google and GitHub authentication, as well as a "forgot password" functionality. It allows users to find hotels, locations, sort prices, and make online payments for their bookings using the Stripe payment system.

Check out the live demo of Roomify: [Roomify Live Demo](https://dbvision-booking.netlify.app)


Please note that some functionality in this demo has been limited for security reasons. Additionally, hotel images and information were sourced from [Booking.com](https://www.booking.com/) for a realistic demo experience without any commercial goals.

It's important to know that the demo is hosted on a free hosting service, and the server may automatically go to sleep if there are no requests from the client side. In such cases, it may take 30-60 seconds for the server to wake up when you access the demo.

## <a name="tech-stack">🛠️ Tech Stack</a>

- React
- Socket IO
- Material UI
- Stripe
- Express JS
- Mongo DB

## <a name="features">✨ Features</a>

⭐ **Light and Dark Themes**: Users can switch between light and dark modes for a personalized visual experience.

⭐ **User Registration and Authentication**: The platform offers secure registration and login options, ensuring user data is protected.

⭐ **Google and GitHub Authentication**: Users can log in quickly using their Google or GitHub accounts for a seamless registration experience.

⭐ **Forgot Password Functionality**: Forgot password flow allows users to easily recover access to their accounts.

⭐ **Hotel Search and Location Filters**: Users can find hotels and filter by location to match their preferences.

⭐ **Price Sorting**: The platform allows sorting by price, helping users find hotels that fit their budget.

⭐ **Online Booking and Payments**: Users can book hotels and complete payments securely using the Stripe payment system.

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Deynao1996/booking.git
cd booking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_STRIPE=
REACT_APP_WITH_SOCKETIO=
REACT_APP_STATUS=
REACT_APP_API=
```

Replace the placeholder values with your actual React Public credentials.

**Running the Project**

```bash
npm start
```

This will launch the application in development mode.

## <a name="license">📄 License</a>

This project is licensed under the [MIT License](https://github.com/Deynao1996/booking/blob/main/LICENSE.txt).

