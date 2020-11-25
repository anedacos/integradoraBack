const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("backend [kickoff]", () => {
  it("Should just pass", () => {
    assert.ok("Its OK");
  });
});
