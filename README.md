# Mind-Link

## Table of contents
* [What is it?](#what-is-it)
* [Status](#status)
* [Why](#why)
* [Tech Stack](#tech-stack)
* [APIs](#apis)
* [Dependencies](#dependencies)
* [Setup](#setup)
* [Available Build Commands](#available-build-commands)
* [To Deploy](#to-deploy)

## What is it?

Mind-Link is a web app where artists can come together to collaborate on their next project. Wether you are searching for a vocalist to hop on your next track, or you are a drummer trying to find a new project, our site helps you find what you are looking for.

## Status

Mind-Link 1.0

## Why

Artist are always working on new projects, but sometimes they do not have all the pieces in order to complete them. We decided to make an app that will help artists find the missing piece they need for their next projects. On Mind-Link you can post your own projects in search of that missing piece, or you could be that missing piece that joins an exisiting project. Our goal is simple, create a place where artists can come together and collaborate.

## Tech Stack

<b>MERN:</b>
- MongoDB
- Express
- React
- Node.js

## APIs

- [Cloudinary](https://cloudinary.com/) : For handling users images.
- [SendGrid](https://sendgrid.com/) : For our email functionality.

## Dependencies

| Dependencies-Client | Command                |
| --------------- | -------------------------- |
| axios           | `yarn add axios`           |
| react           | `yarn add react`           |
| react-dom       | `yarn add react-dom`       |
| react-router-dom| `yarn add react-router-dom`|
| react-scripts   | `yarn add react-scripts`   |
| sweetalert      | `yarn add sweetalert`      |

| Dependencies-Root | Command                  |
| --------------- | -------------------------- |
| @sendgrid/mail  | `yarn add @sendgrid/mail`  |
| axios           | `yarn add axios`           |
| bcryptjs        | `yarn add bcryptjs`        |
| cloudinary      | `yarn add cloudinary`      |
| concurrently    | `yarn add concurrently`    |
| cookie-parser   | `yarn add cookie-parser`   |
| express         | `yarn add express`         |
| express-fileupload | `yarn add express-fileupload` |
| jsonwebtoken    | `yarn add jsonwebtoken`    |
| mongoDB         | `yarn add mongodb`         |
| mongoose        | `yarn add mongoose`        |
| passport        | `yarn add passport`        |
| passport-jwt    | `yarn add passport-jwt`    |
| validator       | `yarn add validator`       |


## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install` in the root directory
- `cd client`
- `yarn install` in the client directory

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

- [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://farah-mindlink-api.herokuapp.com/)



