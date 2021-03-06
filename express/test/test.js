const request = require("supertest");

const { apiPath } = require("../config.json");

describe("loading express", function() {
  let server;
  beforeEach(async function() {
    server = await require("../server")();
  });
  afterEach(function(done) {
    server.close(done);
  });

  it(`responds 401 to ${apiPath}/users`, function testUsers(done) {
    request(server)
      .get(`${apiPath}/users`)
      .expect(401, done);
  });

  it("html to everything else", function testPath(done) {
    request(server)
      .get("/foo/bar")
      .expect('Content-type', /html/)
      .expect(200, done);
  });
});
