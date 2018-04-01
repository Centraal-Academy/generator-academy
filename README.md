# generator-academy
Generator for applications and components

## Before to start
This generate is in alpha, with time i add better features and improve the code, performance and other things, i build this for use it in personal projects fast and easy with the minimum setup

### Pre-requisites
You need have installed node and yeoman

### Install

#### Using npm
```
npm install -g generator-academy
```
#### Using yarn
```
yarn global add generator-academy
```

## Use
This generator can generate project taking arguments directly from command line or prompting questions to user.

#### Generating an Application
For example to generate a react app you can use the next command in your CLI
```
yo academy <appname> <app-description> --type react
```
If you ignore anyone field the generator show your the prompt to request you the missing parameter

Run the next commands to startup the project
```
cd <appname>
yarn run dev
```

### Generating a component
If you wanna generate a react component, you can use the next command in your CLI
```
yo academy:component awesome-component --type react
```
This generate a react component with the follow root: src/components/AwesomeComponent/index.js

Two things you need to know:
1. If you use this command in the root folder of the project (generated with this generator), you don't need specify the type of component.

2. For default the components generated always use the **src** folder how base path and components how path. If you invoke this command inside a folder with src name, the generator will use actual folder how base path. If you need change this behavior you can use the flag --without-base-path to use actual folder how base path and you can specify path using the argument --path follow by the route

## RoadMap

1. Obviously generate a better documentation :3
2. Add support to polymer 3
3. Add support to Vue
4. Add support to Angular