const db = require("../database/dbConfig");
const request = require("supertest");
const Users = require("./auth-model");
const server = require("../api/server");

describe("GET /", () => {
  it('has process.env.DB_ENV as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("returns 200", async () => {
    const expectedStatusCode = 200;
    const response = await request(server).get("/api");

    expect(response.status).toBe(expectedStatusCode);
  });
});

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert function", () => {
    it("inserts users into the db", async () => {
      let usersNumber;
      usersNumber = await db("users");
      expect(usersNumber).toHaveLength(0);
      await Users.insert({ username: "bobby", password: "123" });
      usersNumber = await db("users");
      expect(usersNumber).toHaveLength(1);
    });

    // it('inserts the provided user into the db', async () => {
    //     let user = await Users.insert({username: 'bobby', password: '123'})
    //      expect(user.username).toBe('bobby')

    // })
  });
});
