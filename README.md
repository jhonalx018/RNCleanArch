# consumer-mobile-app-rn
Consumer Mobile React Native development - proof of concept

<p align="center">
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/42686771/181596619-3dfb306d-d554-454f-8865-09b7021bf811.gif)
</p>

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## :floppy_disk: Technical requirements

**Prerequisites**

1. [Nodejs](https://nodejs.dev/)
2. [npm](https://www.npmjs.com/) | [yarn](https://yarnpkg.com/)
3. [React Native](https://reactnative.dev/)

## :page_facing_up: Architecture details
**Frameword React-Native**

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

**Clean architecture**
In this setup you are will find the following main configurations that belong to the architecture:

![React-native POC](https://user-images.githubusercontent.com/89102527/136432579-ed1d8319-3e34-4c0a-b123-b87d6d3f363e.jpg)

**Why Clean Architecture over MVC, MVP, MVVM?**

Clean architecture provides us with a layered structure decoupled from each other.

**Adventages of clean architecture over MVC, MVP, MVVM:** 

    *   Using clean architecture, imagine that we need to implement in the presentation layer differents methodologies like HOC | HOF | HOOKS, we won't need to change any external layer in the app.
    
    *   Portability: if we need to move the business logic from the front-end to the back-end of one of our services we should be able to do it without  change external layers

    *   Prevent 'Change Propagation': If the REST API's response object changes or few keys change the name we should be able to handle the change in one of the layers and with this we won't need to change anything in the presentation layer or another layer.

In the case of MVVM or MVC is just part of the clean architecture in the presentation layer. It just a set of rules on how to display the data from UseCase. MVVM is just a technique to manage the View layer

The idea of using clean architecture is to try to follow a pattern when we are developing something and have an idea where we should make or place our changes.

The current CMA app doesn't have a pattern to follow and that is causing a mess regarding where we should place the code, in some cases, we have business rules inside components and also within some files we have functionalities that arent related

**Main folder structure using clean**

1. Aplication: Application directory contains the State Management and Common utilities functions and constant

    * ./store -> handle App State ([Redux](https://es.redux.js.org/))
    * ./useCases -> it will contain business methods

2. Domain: Usually we use domain to store plaing objects and definitions
   
   * ./abstract to store all shared classes that will work as structures with definitions to other classes
   * ./types to store all types, interfaces definitions that could be shared through all the project
  
3. Infrastructure: Infrastructure contains API (Services) Files, API Handlers, Common Components like Loader, Common TextField, Buttons, etc. **[We use Axios observable to handle any API request](https://www.npmjs.com/package/axios-observable)**
   
    * ./api to store the methods to set an communication between this app to any api
    * ./apiServices we use this folder to store all the api calls per functions with their own definitions

4. Presentation: in this layer works to store componentes, styles, assets, theme
## :rocket: How to use it (Build)?

To install and use the project you can run the following command: 

1. Install Modules
    ```
        yarn 
    ```
2. Run App
    ios (always install the pods before run the ios project)
    ```
        cd ios && pod install && cd .. && yarn ios
    ```
    android:
    ```
        yarn android
    ```
## Unit Test
    yarn test
    
## considerations:

**Module Resolver:**
we dont use relatives path to import modules, functions, constants etc we use babel module resolver

## Notes
This is a proof of concept of a new enviroment for the current consumer-mobile-app
