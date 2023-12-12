# mtogo-frontend
by Jonas, Peter & Mie

## Introduction
This project works as the frontend for the MTOGO-application project created by the group [Pejomi](). It is created to demonstrate frontend testing for the application. The related tests are located in the [mtogo-frontend-test](https://github.com/Pejomi/mtogo-frontend-test.git) project.

![Alt text](<src/assets/images/front-page.png>)

For more information about the project see the [mtogo-microservices](https://github.com/Pejomi/mtogo-microservices.git) project.

## Description
The project is a simple React application that is used to create a simple order from restaurants. A person can login or register to the application and then browse the restaurants and their menus. The person can then add items to the shopping cart and place the order. 

All the data is fetched from the [mtogo-microservices](https://github.com/Pejomi/mtogo-microservices.git) project.

### Features
The app is based on completing the following features:

```gherkin
Feature: Order Creation
  As a consumer
  I want to create an order
  So that I can get food from a restaurant
```

```gherkin
Feature: Restaurant Menu Browsing
  As a consumer,
  I want to browse restaurant menus on MTOGO,
  So that I can choose the food items I want to order.
```

```gherkin
Feature: Shopping Cart
  As a customer,
  I want to add and remove items from my shopping cart,
  So that I can review and purchase my selected items.
```
For more information about the features and scenarios, see the [mtogo-frontend-test](https://github.com/Pejomi/mtogo-frontend-test.git) project.

### Technologies
The project uses the following libraries:
- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [ant-design](https://ant.design/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-dom](https://reactjs.org/docs/react-dom.html)
- [anxios](https://www.npmjs.com/package/axios)



## Getting started
The project is created using [create-react-app](https://create-react-app.dev/). To run the project locally, run the following commands:

```bash
git clone https://github.com/Pejomi/mtogo-frontend.git
cd mtogo-frontend
npm install
npm start
```
