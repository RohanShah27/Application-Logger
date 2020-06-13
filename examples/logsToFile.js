var logger = require("../index").Logger;
var createFile = require("../index").createLogger("test.log"); //assigning a file -Rohan
function generateLogs() {
  logger.info("information level log");
  logger.warn("Warning level log");
  logger.error({
    status: 401,
    message: "Error level log",
    description: "Description of error ",
  });
  logger.fatal({
    status: 500,
    message: "Fatal level log",
    description: "Description of Fatal error ",
  });
}
generateLogs();
