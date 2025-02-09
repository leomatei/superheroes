# Humble Superhero API

## Overview

Welcome to the **Humble Superhero API**! This simple API allows you to create superheroes, assign them superpowers, and rate their **humility score**. You can also view a list of superheroes sorted by their humility score.

### Features

- **POST /superheroes**: Add a new superhero (name, superpower, humility score required).
- **GET /superheroes**: Fetch a list of superheroes sorted by humility score (highest to lowest).
- **Validation**: Humility score must be between 1 and 10.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (or **yarn**)

### Instalation

Clone the repo, run `npm i` and `npm run dev`, you can run the unit tests using `npm run test`

The backend should be running on `http://localhost:3000`.

## Get Started

While server is runing you can go to http://localhost:3000/api

I did not create a React UI, but I used Swagger to create a UI and in my opinion meets your expectation.

## If I Had More Time

If I had more time to work on this project, here’s what I would add:

1. **Implement All CRUD Operations**:

   - **Create**: Done ✅
   - **Read**: Done ✅
   - **Update**: Allow updating a superhero’s details, such as their superpower or humility score.
   - **Delete**: Implement a delete endpoint to remove a superhero by name.

2. **Switch to a Real Database**:

   - Instead of using an in-memory array to store superheroes, I would connect the app to a real database, such as **MongoDB** or **PostgreSQL**.
   - This would help with data persistence across app restarts and provide better scalability.

3. **Personalized Error Handling**:

   - Implement specific error messages for edge cases, such as when the **humility score** is outside the range of 1-10, or when trying to add a superhero with a duplicate name.

4. **Use Name as Unique Identifier**:

   - Ensure that the **name** field is a unique key, meaning superheroes cannot share the same name. This would require additional validation during creation.

5. **Paginated Query**:

   - Implement **pagination** for the `GET /superheroes` endpoint. This would be useful if the list of superheroes grows too large and improves API performance.

6. **Add Unit Tests**:

   - Write tests for each endpoint (using **Jest** and **Supertest**).
   - Ensure that tests cover all edge cases, such as missing or invalid parameters.

7. **Create a Frontend Interface**:

   - Develop a simple **React** application to allow users to interact with the API.
   - Users would be able to add superheroes and view the list sorted by humility score.

8. **Deploy the Application**:

   - Deploy the backend API to a cloud service such as **Heroku** or **AWS**.
   - If the frontend were implemented, deploy it on **Netlify** or **Vercel**.

9. **Security Considerations**:
   - Implement basic security features such as rate limiting, data validation, and logging for better security.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
