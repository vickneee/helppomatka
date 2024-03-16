<p align="center">
  <a href="" rel="noopener">
 <img src="./client/public/images/favicon.ico" alt="Project logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

</div>

---
## Table of Contents
- [The project demands](#the-project-demands)
- [Main Feature](#main-feature)
- [Technology Stack](#technology-stack)
- [Cloning the project from GitHub](#cloning-the-project-from-github)
  - [Server Setup](#server-setup)
- [Deployment](#deployment-on-render)

## The project demands

  <p> Creating a fictional travel agency website with a booking system using the <a href="https://www.mongodb.com/mern-stack"> MERN Stack</a> (MongoDB, Express.js, React.js, and Node.js).
      <br> 
</p>

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

## Instructions for GitHub Collaborations

- **GitHub Link**: [View GitHub](https://github.com/Bee4rt/helppomatka)

These instructions will get you a copy of the project running on your local machine for development and testing purposes.

### Pre Requirements:

Please download Git for your computer from the following link:
[Git Downloads.](https://git-scm.com/downloads)

Similarly, download Node.js for your computer from the following link:
[Node.js Downloads.](https://nodejs.org/en/download/)

### Cloning the Project from GitHub:

Follow these steps to clone the project from GitHub:

#### Create a New Folder:

Begin by creating a new empty folder for your project.

#### Navigate to the Folder:

Open your terminal and move to the folder you created:

    cd folder_you_created

#### Clone the Repository:

Clone your GitHub repository into the folder:

    git clone your_github_repository_link

#### Confirm Successful Cloning:

Verify that the cloning process was successful:

    git status

#### Access Cloned Repository:

Enter the directory containing the cloned repository:

    cd name_of_cloned_repository

By following these steps, you'll successfully clone the project from GitHub and set it up in your local environment.

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

    npm run dev

By following these instructions, both the frontend and backend servers will be up and running in development mode, allowing you to work on your application seamlessly.

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
