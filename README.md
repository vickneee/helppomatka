<p align="center">
  <a href="" rel="noopener">
 <img src="./client/public/images/android-chrome-192x192.png" alt="Project logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

</div>

---

## The project demands

Vantaa Vocational College Varia school student project to create a fictional travel agency website with a booking system using the [MERN Stack](https://www.mongodb.com/mern-stack) (MongoDB, Express.js, React.js, and Node.js).

## Main Feature

The booking app enables users to effortlessly reserve accommodations in different cities and countries, offering a seamless way to find and book rooms tailored to their travel needs.

## Participants

Ahmed Benmouh, Jose Oldemar Chaves Urbina and Victoria Vavulina.
All participants were actively engaged in the development of both the front-end and back-end components.

## Technology Stack
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://react.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [CSS](https://www.w3schools.com/Css/) - Stylesheets for Styling
- [React Bootstrap](https://react-bootstrap.github.io/) - Styling Framework
- [Postman](https://www.postman.com/) - APIs Testing Tool
- [JSON Web Token](https://jwt.io/) - Securing APIs
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Hashing Passwords
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance Optimization

## Cloning the Repository

These instructions will get you a copy of the project running on your local machine for development and testing purposes.

### Pre Requirements:

Please download Git for your computer from the following link:
[Git Downloads.](https://git-scm.com/downloads)

Similarly, download Node.js for your computer from the following link:
[Node.js Downloads.](https://nodejs.org/en/download/)

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/vickneee/helppomatka.git
cd helppomatka
```

## Backend Configuration

Environment Files: Navigate to the backend folder and create a file: .env. Add the following contents to the file:

```env
MONGO_CONNECTION_STRING=
JWT_SECRET_KEY=
```

## MongoDB Setup

Sign up for an account at MongoDB Atlas.
Create a new cluster and follow the instructions to set up a new database.
Once set up, obtain your MongoDB connection string and add it to the MONGODB_CONNECTION_STRING= variable in your .env files.

## Jwt Secret Key

JWT_SECRET_KEY= Any long, random string will serve for this. Look up "secret key generator" on Google.

## Running the Application

To quickly set up and run both the frontend and backend servers, follow these steps:

### Backend:

Navigate to the backend directory `cd api`.

Install dependencies: `npm install`.

Start the server: `npm start`.

### Frontend:

Open a new terminal and navigate to the frontend directory `cd client`.

Install dependencies: `npm install`.

Start the frontend application: `npm run dev`.

## Deployment on Render

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

- **Website Link**: [View Website](https://helppomatka-1.onrender.com/)

[🔝 Back to the Project demands](#the-project-demands)
