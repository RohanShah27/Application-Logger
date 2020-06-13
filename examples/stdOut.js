var logger = require("../index").Logger;
// Only generating logs on std out -Rohan
function generateLogs() {
  // Example of all types of levels of logs -Rohan
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
