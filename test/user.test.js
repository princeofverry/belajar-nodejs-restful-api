import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia123",
      name: "Verry Kurniawan",
    });

    expect(result.status).toBe(200);
    console.log(result.body);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("Verry Kurniawan");
    expect(result.body.data.password).toBeUndefined();
  });
});
