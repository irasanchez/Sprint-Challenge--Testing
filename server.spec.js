const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("games route", () => {
    //GET
    it("should return an OK status code from the get games route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/games");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return an array from the get games route", async () => {
      const response = await request(server).get("/games");

      expect(typeof response.body).toBe("array");
    });

    //TODO: come up with third test

    //POST
    it("should return a 'created' status code from the post games route", async () => {
      const expectedStatusCode = 201;

      const response = await request(server).post("/games");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return an error if it doesn't have the right data", async () => {
      const expectedJSONObject = { error: "title and genre required" };

      await expect(postNewGame()).rejects.toEqual(expectedJSONObject);
    });

    it("should return a status code of 422 if the info is incomplete", async () => {
      const expectedErrorStatusCode = 422;

      await expect(response.status).rejects.toEqual(422);
    });
  });
});
