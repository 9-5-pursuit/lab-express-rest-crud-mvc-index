const request = require("supertest");
const fs = require("fs");

const app = require("../app");
const data = require("./sample-data");

// BASIC EXPRESS APP
describe("Basic Express app", () => {
  it("has an app.js file", () => {
    expect(fs.existsSync("./app.js")).toEqual(true);
  });

  it("has a server.js file", () => {
    expect(fs.existsSync("./server.js")).toEqual(true);
  });

  it("has a package.json file", () => {
    expect(fs.existsSync("./package.json")).toEqual(true);
  });

  it("has a .gitignore file", () => {
    expect(fs.existsSync("./.gitignore")).toEqual(true);
  });

  it("sends a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello, world!");
  });

  if (process.env.CIRCLECI) {
    it("does not have a .env file", () => {
      expect(fs.existsSync("./.env")).toEqual(false);
    });
  } else {
    it("has a .env file", () => {
      expect(fs.existsSync("./.env")).toEqual(true);
    });
  }
});

// CONFIRM FILES AND FOLDERS

describe("Models are in correct folder and named correctly", () => {
  it("has a locations model", () => {
    expect(fs.existsSync("./models/location.model.js")).toEqual(true);
  });
  it("has a person model", () => {
    expect(fs.existsSync("./models/person.model.js")).toEqual(true);
  });
  it("has a plan model", () => {
    expect(fs.existsSync("./models/plan.model.js")).toEqual(true);
  });
  it("has a machine model", () => {
    expect(fs.existsSync("./models/machine.model.js")).toEqual(true);
  });
  it("has a special events model", () => {
    expect(fs.existsSync("./models/special-event.model.js")).toEqual(true);
  });
});

describe("Controllers are in correct folder and named correctly", () => {
  it("has a locations controller", () => {
    expect(fs.existsSync("./controllers/locations.controller.js")).toEqual(
      true
    );
  });

  it("has a persons controller", () => {
    expect(fs.existsSync("./controllers/persons.controller.js")).toEqual(true);
  });

  it("has a plans controller", () => {
    expect(fs.existsSync("./controllers/plans.controller.js")).toEqual(true);
  });

  it("has a machines controller", () => {
    expect(fs.existsSync("./controllers/machines.controller.js")).toEqual(true);
  });

  it("has a specialEvents controller", () => {
    expect(fs.existsSync("./controllers/special-events.controller.js")).toEqual(
      true
    );
  });
});

describe("Each model has an index route", () => {
  it("has an index route for locations", async () => {
    const response = await request(app).get("/locations");
    expect(response.body).toEqual(data.locations);
  });

  it("has an index route for people", async () => {
    const response = await request(app).get("/persons");
    expect(response.body).toEqual(data.persons);
  });

  it("has an index route for plans", async () => {
    const response = await request(app).get("/plans");
    expect(response.body).toEqual(data.plans);
  });

  it("has an index route for machines", async () => {
    const response = await request(app).get("/machines");
    expect(response.body).toEqual(data.machines);
  });

  it("has an index route for special events", async () => {
    const response = await request(app).get("/special-events");
    expect(response.body).toEqual(data.specialEvents);
  });

  it("has a 404 route for non-matching urls, with the correct status code", async () => {
    const response = await request(app).get("/non-matching-url");
    expect(response.status).toEqual(404);
  });
});
