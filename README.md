<p align="center">
  <a href="" rel="noopener">
 <img width=192 height=192 src="./client/public/images/android-chrome-192x192.png" alt="Project logo"></a>
</p>

<h3 align="center">Helppomatka</h3>

<div align="center">

[![Status](https://img.shields.io/badge/render_status-unpublished-darkgreen.svg)]()

</div>

---
## Table of Contents
- [The project demands](#the-project-demands)
- [Participants](#participants)
    - [Instructions](#instructions)
    - [Pre Requirements](#pre-requirements)
        - [Pulling the project from GitHub](#pulling-the-project-from-gitHub)
        - [Dependency Installation](#dependency-installation)
        - [Uploading Changes to the GitHub Project](#uploading-changes-to-the-github-project)
        - [Check Status and Branches](#check-status-and-branches)
        - [Commit Changes](#commit-changes)
        - [Push Changes to Your Branch](#push-changes-to-your-branch)
        - [Setting Up Remote Repository](#setting-up-remote-repository)
        - [Pulling Changes from Main Branch](#pulling-changes-from-main-branch)
        - [Merging Your Branch to Main](#merging-your-branch-to-main)
        - [Deleting Unnecessary Branches](#deleting-unnecessary-branches)
        - [Creating a New Branch](#creating-a-new-branch)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)


## The project demands:

  <p> Creating a fictional travel agency website with a booking system using the <a href="https://www.mongodb.com/mern-stack"> MERN Stack</a> (MongoDB, Express.js, React.js, and Node.js).
      <br> 
</p>

## Participants:
| Main Role                        | Name                       |
|----------------------------------|----------------------------|
| Scrum Master                     | Ahmed Benmouh              |
| GitHub Assistant                 | Jose Oldemar Chaves Urbina |
| Trello Assistant & Documentation | Victoria Vavulina          |

All participants were actively engaged in the development of both the front-end and back-end components.

<!-- - React Bootstrap
- Tailwind CSS -->

## Instructions:

These instructions will get you a copy of the project running on your local machine for development and testing purposes.

## Pre Requirements:

Please download Git for your computer from the following link:
[Git Downloads.](https://git-scm.com/downloads)

Similarly, download Node.js for your computer from the following link:
[Node.js Downloads.](https://nodejs.org/en/download/)

## Pulling the Project from GitHub:

Follow these steps to pull the project from GitHub:

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

By following these steps, you'll successfully pull the project from GitHub and set it up in your local environment.

## Dependency Installation:

To streamline the installation process, follow these steps:

#### For Frontend:

Navigate to the client directory:

    cd client

Install dependencies:

    npm i

#### For Backend:

Move to the api directory:

    cd api

Install dependencies:

    npm i

By following these instructions, you will ensure that all necessary dependencies are installed correctly for both the frontend and backend components of the application.

## Uploading Changes to the GitHub Project:

#### Follow these steps every time you update the project:

**Note:** Always create a local backup in a new folder before pushing or pulling changes from GitHub. Work on your branch to prevent conflicts in the repository.

#### Check Main Branch Status:

Before adding your own code, ensure the main branch is up-to-date:

    git checkout main
    
    git pull

#### Switch to Your Branch:

Return to your own branch or create a new one:

    git checkout yourBranchName

or

    git checkout -b yourBranchName

## Check Status and Branches:

Verify the status of your branch and check available branches:

    git status
    
    git branch

#### Edit Code:

Make necessary changes in your branch.

## Commit Changes:

Commit all changes once:

    git add .
    
    git commit -a -m "Description of your changes"

## Push Changes to Your Branch:

Push your changes to your branch:

    git push

## Setting Up Remote Repository:

If git push gives an error, set up the remote repository:

    git push --set-upstream origin yourBranchName

or

    git push -u origin yourBranchName

## Pulling Changes from Main Branch:

If you need to sync your branch with the main branch:

    git checkout yourBranchName

    git pull origin main

Resolve any conflicts, if present.

## Merging Your Branch to Main:

Merge your branch changes into the main branch:

    git checkout main
    
    git pull
    
    git merge yourBranchName
    
    git push

## Deleting Unnecessary Branches:

List and delete unnecessary branches:

    git branch

    git branch -d yourBranchName

Verify the deletion:

    git branch

## Creating a New Branch:

If needed, create a new branch:

    git checkout -b yourBranchName

By following these steps, you can effectively manage changes and collaboration on the GitHub project.

## Technology Stack:
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://react.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## Deployment:

[![Status](https://img.shields.io/badge/render_status-unpublished-darkgreen.svg)]()

[🔝 Back to the Table of Contents](#table-of-contents)
