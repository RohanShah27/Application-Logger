# Application Logger

A simple JavaScript logger that covers logging API's and browsers console logs in a manner where you can define the level of logs.

## Levels

This library covers 4 different levels of logs that can either be on STDOUT or on a desired file.

```
'info','warning','error','fatal'
```

## Usage

```
const logger=require("../index").Logger; //Logs to STDOUT

<!-- To create a log file and then log inside it make use of createLogger function -->

const logger=require("../index").createLogger("test.log");
```

Error, Fatal level logs comprise of

```
{
    message:"Your desired message",
    description:"Description of the log",
    status:STATUS_CODE
}
<!-- If any data is not passed then these fields take up default data message -->
```

## Example

This is for STDOUT logs.

```
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
```

This is for File Logs.

```
var logger = require("../index").Logger;
var createFile = require("../index").createLogger("test.log");
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
```

## Keywords

Logger Application-logger logging node-log browser-logging

## Author

www.github.com/RohanShah27 - Rohan Shah
