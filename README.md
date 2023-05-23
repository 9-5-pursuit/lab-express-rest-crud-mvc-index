# Express Fitness

A new fantastic fitness place called Express Fitness has just opened up.

Your job will be to be to begin building a custom app that keeps track of numerous essential resources for the business such as locations, people, special events, plans, and workout machines.

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

You can run the following command from the command line to run the tests. You will need to be in the root directory of your local directory.

```
npm test
```

## Instructions

To complete this lab, you must create a series of static data models and controllers. Each of those controllers will have a single route which returns all data from the model. Read the details below carefully to ensure that you name filenames and routes correctly.

### Create your file structure

Your goal is to organize your folders and files following the MVC architecture you've learned in class. Your final folder and file structure should look like this:

```
├── __tests__/
│  └── app.test.js
│  └── sample-data.js
├── controllers/
│  ├── locations.controller.js
│  ├── machines.controller.js
│  ├── persons.controller.js
│  ├── plans.controller.js
│  └── special-events.controller.js
├── models/
│  ├── location.model.js
│  ├── machine.model.js
│  ├── person.model.js
│  ├── plan.model.js
│  └── special-event.model.js
├── .env
├── node_modules/
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

> **Note:** With Express, you are free to name your files and folders whatever you want. For example, when it comes to controllers you may see `locations.controllers.js` or `locations.js` or `locationsController.js`. There is no one "right way" to name these files, however it is important to have a consistent and understandable naming scheme.

### Create a basic Express application

Install the necessary `npm` packages and then build a basic Express server.

#### Generic route

Create the following generic route that is not tied to any specific resource.

- `GET /`: Responds with `"Hello, world!"`.

### Create models

For each model, make a folder with the appropriate file name. For example, for the `locations` resource create a file inside of the `models/` directory with the name `locations.model.js`. At this time, your model will simply be an array of data. Don't forget to export your model.

> **Note:** Like with controllers, there is no one right way to name your model files. For example, when it comes to models you may see `location.model.js` or `location.js` or `LocationModel.js`. For this lab, follow the naming conventions that have been set out for you.

#### Locations data

```js
[
  {
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
  },
  {
    street: "23 Broadway",
    city: "New York",
    state: "NY",
    zip: "11011",
  },
];
```

#### Persons data

```js
[
  {
    name: "Najee",
    role: "member",
    plan: "gold",
    mainLocation: "11101",
  },
  {
    name: "Salina",
    role: "staff",
    plan: "staff",
    mainLocation: "11101",
  },
  {
    name: "Amandine",
    role: "member",
    plan: "silver",
    mainLocation: "10011",
  },
];
```

#### Plans data

```js
[
  {
    type: "bronze",
    price: 100,
    extras: [],
  },
  {
    type: "silver",
    price: 200,
    extras: ["Laundry service", "Free smoothie each visit"],
  },
  {
    type: "gold",
    price: 300,
    extras: ["Personal locker", "Monogrammed robe", "Sauna access"],
  },
];
```

#### Machines data

```js
[
  {
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 1986,
    location: 11101,
  },
  {
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 1996,
    location: 11101,
  },
  {
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 2006,
    location: 10011,
  },
];
```

#### Special events data

```js
[
  {
    name: "Cinco De Muscles",
    date: "May 5, 2022",
    description: "Attend up to 5 fitness classes in one day, no extra cost!",
  },
  {
    name: "Lost Sock Memorial Day",
    date: "May 9, 2022",
    description:
      "Come together as a community to honor all the lost socks that have helped us with our fitness quests. Donate a lost sock, and get a protein smoothie!",
  },
  {
    name: "Hallowhoa",
    date: "October 31, 2022",
    description:
      "Professional photographers will be taking photos all day. Get your photo taken and share your hard work on every social media platform you want!",
  },
];
```

### Create controllers for each model

Following the same file and folder structure as in class, create the correct files. For example, the `locations` resource should be in the `controllers/` directory with the name `locations.controller.js`.

Each controller should serve an index (an array of all of the objects of the resource) at the matching route.

Once you've built the route in each controller, you should be able to visit the URLs below and see data for the associated resource.

- http://localhost:3333/locations
- http://localhost:3333/people
- http://localhost:3333/plans
- http://localhost:3333/equipment
- http://localhost:3333/special-events

### Create a Catch-all/404 Route

Add a catch-all route so that when the visited URL does not match any of the routes, a 404 response is sent. You may also wish to respond with a message for the user, such as `"Sorry, no page found!"`.

## Bonuses

Create a `GET` route at `/locations/people` that organizes each person according to their location. The data outputted should look like the data below.

```js
[
  {
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
    people: [
      {
        name: "Najee",
        role: "member",
        plan: "gold",
        mainLocation: "11101",
      },
      {
        name: "Salina",
        role: "staff",
        plan: "staff",
        mainLocation: "11101",
      },
    ],
  },
  {
    street: "23 Broadway",
    city: "New York",
    state: "NY",
    zip: "11011",
    members: [
      {
        name: "Amandine",
        role: "member",
        plan: "silver",
        mainLocation: "10011",
      },
    ],
  },
];
```
