const { writeFileSync } = require("fs");

module.exports = function (testPaths) {
  const filtered = testPaths;
  writeFileSync(__dirname + "/testPaths.txt", testPaths.toString());
  return {
    filtered,
  };
};
