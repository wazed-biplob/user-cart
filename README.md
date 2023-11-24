# Mongoose Express CRUD API Demonstration 👋

by : [@wazed_biplob](https://github.com/wazed-biplob)

## Features

This project demonstrates basic CRUD operations using Moongoose Schema with Typescript in an Express Application. The main features of this project are :

- Strict Data Model Definition using Typescript
- Strict Structure of Data Model with Moongoose
- Validation of Data and their types using Zod
- Smooth API request and response error handler
- Showing Relevant Messages and Status Codes in response
- Password Hashing for Extra Security
- Hiding Password Field in API Responses
- Parsed By EsLint to find out errors before runtime

## Description

I've developed a Node.js Express application with TypeScript, integrating MongoDB with Mongoose for user data and order management. I have ensured data integrity through validation using Zod.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URL`

`SALT_ROUND`

## Installation

Download This Project, Go to the Project Folder with CLI, and Run the below-written command :

```bash
  npm install
```

After completion of Installation, Run :

```bash
  npm run start:dev
```

For an error check, Run :

```bash
  npm run lint
```

## Mongoose/Typescript Schema for User Model

####

```bash
  GET /api/users/
```

| field      | type       | Description  |
| :--------- | :--------- | :----------- |
| `user`     | `number`   | **Required** |
| `username` | `string`   | **Required** |
| `password` | `string`   | **Required** |
| `fullName` | `object`   | **Required** |
| `age`      | `number`   | **Required** |
| `email`    | `string`   | **Required** |
| `isActive` | `boolean`  | **Required** |
| `hobbies`  | `string[]` | **Required** |
| `address`  | `object`   | **Required** |
| `orders`   | `[object]` | **Optional** |

## Tech

- Express
- Mongoose
- Typescript

## Live Link

#### You may check the AIPs with this live link :

- [usercart.vercel.app](https://usercart.vercel.app/)

## Deployment

#### API Endpoints :

```bash
POST /api/users
```

```bash
GET /api/users
```

```bash
GET /api/users/:userId
```

```bash
PUT /api/users/:userId
```

```bash
DELETE /api/users/:userId
```

```bash
PUT /api/users/:userId/orders
```

```bash
GET /api/users/:userId/orders
```

```bash
GET /api/users/:userId/orders/total-price
```

## Support

Regarding this project, if any query arises, mail me at www.biplob@gmail.com
