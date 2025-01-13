# Friendlyy: A MERN Stack Web App for Social Connections

**Friendlyy** is a social connection platform built with the MERN stack (MongoDB, Express, React, Node.js). The app allows users to create profiles, browse through other registered users' profiles in the form of "cards", and either **like** or **pass** them. A **connection** is established if the request sent is accepted by the other person.

Whether you're seeking new friendships, professional networking, or simply expanding your social circle, **Friendlyy** offers a fun and engaging way to discover like-minded people!

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

---

## Features

- **User Registration & Authentication**: Secure sign-up, login, and JWT-based authentication.
- **Profile Cards**: Users see cards of other users, containing a profile picture and basic information.
- **Like/Pass Interaction**: Users can either **like** or **pass** on each profile card.
- **Mutual Connections**: If two users mutually like each other's profile, a **connection** is made.
- **Real-Time Updates**: The app uses **Socket.io** for live updates when users interact with cards.
- **Responsive Design**: The UI adapts to different screen sizes, making it mobile-friendly.

---

## Tech Stack

The **Friendlyy** platform uses the following technologies:

- **Frontend**:

  - **React**: A JavaScript library for building user interfaces.
  - **Redux**: For state management across the app.
  - **React Router**: For handling navigation and routing.
  - **CSS/SCSS**: For styling the user interface, ensuring a smooth and responsive design.

- **Backend**:

  - **Node.js**: JavaScript runtime for building server-side logic.
  - **Express.js**: A web application framework for Node.js.
  - **MongoDB**: A NoSQL database used to store user data and connections.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB to interact with the database more effectively.

- **Authentication**:
  - **JWT (JSON Web Tokens)**: For secure authentication and user session management.

---

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (version 22.0.0 or later) – [Download Node.js](https://nodejs.org/en/)
- **MongoDB** (local or cloud instance) – [Set up MongoDB](https://www.mongodb.com/try/download/community)
