// Copyright (c) 2020 Rohan Shah

var fs = require("fs");
let time = Date.now(); //Declare the current time everytime the function is called -Rohan
var PATH = null;
let Logger = {
  // logger.info is used to track all the info realted logs for development teams -Rohan
  info(log) {
    let obj = { type: "info", log: log, timestamp: time };
    PATH
      ? fs.appendFileSync(PATH, JSON.stringify(obj) + "\n", "utf-8")
      : console.log(obj);
  },
  //   Any warnings that might need to be changed for development related errors -Rohan
  warn(log) {
    let obj = { type: "warn", log: log, timestamp: time };
    PATH
      ? fs.appendFileSync(PATH, JSON.stringify(obj) + "\n", "utf-8")
      : console.log(obj);
  },
  error(log) {
    //   Errors like 400 or 401 codes can be logged using error logger -Rohan
    let obj = {
      type: "error",
      log: {
        status: log.status ? log.status : 400,
        message: log.message ? log.message : "No message provided",
        description: log.description
          ? log.description
          : "No description provided",
      },
      timestamp: time,
    };
    PATH
      ? fs.appendFileSync(PATH, JSON.stringify(obj) + "\n", "utf-8")
      : console.log(obj);
  },
  fatal(log) {
    //   Any kind of fatal error like 500 error or type errors that hamper the client request should be marked as fatal -Rohan

    let obj = {
      type: "fatal",
      log: {
        status: log.status ? log.status : 500,
        message: log.message ? log.message : "No message provided",
        description: log.description
          ? log.description
          : "No description provided",
      },
      timestamp: time,
    };
    PATH
      ? fs.appendFileSync(PATH, JSON.stringify(obj) + "\n", "utf-8")
      : console.log(obj);
  },
};
function createLogger(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, "", "utf-8");
  }
  PATH = filePath;
}

module.exports = { Logger, createLogger };

/* 
Rohan

Node JS event Logger 

Import the object and use the functions using the dot operator to log events in the server.
All the events are written to stdout so that they can be fetched and formatted as per requirement.
Addition of databasse calls is also possible by just adding a call to the database from one of the functions 
*/
