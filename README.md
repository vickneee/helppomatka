<p align="center">
  <a href="" rel="noopener">
 <img src="./client/public/images/favicon.ico" alt="Project logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

</div>

---

## The project demands

Vantaa Vocational College Varia school student project to create a basic travel agency booking webapp.

Creating a fictional travel agency website with a booking system using the [MERN Stack](https://www.mongodb.com/mern-stack) (MongoDB, Express.js, React.js, and Node.js).

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

### Server Setup:
To quickly set up and run both the frontend and backend servers, follow these steps:

#### For Frontend:
Navigate to the client directory:

    cd client

Install dependencies:

    npm install

Start the development server:

    npm run dev

#### For Backend:
Move to the api directory:

    cd api

Install dependencies:

    npm install

Start the backend server:

    npm start

By following these instructions, both the frontend and backend servers will be up and running in development mode, allowing you to work on your application seamlessly.

Additionally you need create .env file and database in MongoDB.

## Deployment on Render

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

- **Website Link**: [View Website](https://helppomatka-1.onrender.com/)

Deploying a full-stack project on Render involves several steps, both for the backend and frontend components. Render provides a seamless platform for hosting both parts of your application, offering automatic deploys, SSL certificates, and more. Here's a brief overview of how to deploy a full-stack project on Render:

### Backend Deployment on Render:

1. **Prepare Your Backend**:
    - Ensure your backend code is in a Git repository (GitHub).
    - Make sure your application listens on the port provided by the `PORT` environment variable.

2. **Create a New Web Service on Render**:
    - Log in to your Render account and click on "New +," then select "Web Service."
    - Choose the Git repository where your backend code is stored.
    - Configure your build settings:
        - For Node.js apps, Render automatically detects the build command and start command, but you can customize them.

3. **Set Environment Variables**:
    - If your application requires environment variables (like database URLs, secret keys), add them in the "Advanced" section during setup.

4. **Deploy**:
    - Once configured, click "Create Web Service." Render will build and deploy your backend, providing a `.onrender.com` URL for access.

### Frontend Deployment on Render:

1. **Prepare Your Frontend**:
    - Ensure your frontend code is also in a Git repository.
    - Build your project locally to make sure it compiles without errors (e.g., using `npm run build` for React apps).

2. **Create a New Static Site on Render**:
    - In your Render dashboard, click on "New +" and select "Static Site."
    - Select the Git repository of your frontend project.
    - Configure the build settings:
        - Set the build command (e.g., `npm run build` for React apps).
        - Set the publication directory (e.g., `build` for React apps).

3. **Environment Variables**:
    - If your frontend needs environment variables (like backend API URLs), you can add them during setup.

4. **Deploy**:
    - Click "Create Static Site." Render will build and deploy your frontend, providing a URL for access.

5. **Configure Backend API Access**:
    - If your frontend needs to access your backend, ensure you use the backend service URL provided by Render in your API requests. You might need to set this URL as an environment variable in your frontend.

6. **Domain Configuration (Optional)**:
    - Once both parts are deployed, you can configure custom domains via Render's dashboard for both your frontend and backend, providing a cohesive experience for your users.

### Final Steps:

- **Test Your Application**: Visit the URLs provided by Render to ensure both the frontend and backend are working as expected.
- **Continuous Deployment**: Render supports automatic deployment on git push, so you can set up continuous deployment for both parts of your application.

This overview provides a streamlined process for deploying full-stack applications on Render.
The specific steps might vary based on the technology stack you're using (e.g., Node.js, React), but the general process remains the same.
Ensure to consult Render's documentation for detailed guides and troubleshooting.

[🔝 Back to the Table of Contents](#table-of-contents)
