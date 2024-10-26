const supertest = require("supertest");
const app = require("../src/app");
const api = supertest(app);

it("should echo input from client", async () => {
  const msg = "message from Yair";
  const response = await api
    .post("/echo")
    .set("Content-Type", "text/plain")
    .send(msg);

  expect(response.text).toEqual(msg);
});

