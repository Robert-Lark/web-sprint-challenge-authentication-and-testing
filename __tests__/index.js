const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig");

afterAll(async () => {
	await db.destroy();
});

test("POST /register", async () => {
	const res = await supertest(server).post("/register").send({
		username: "rolando",
		password: "password18",
	});
	expect(res.statusCode).toBe(201);
});

test("POST /login", async () => {
	const res = await supertest(server).post("/login").send({
		username: "tony",
		password: "password12",
	});
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe("application/json");
	expect(res.body.message).toBe("Welcome tony");
});
