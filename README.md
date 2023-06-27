# Introduction

- Log parser app is a nodejs application, which parses the input log file, find all the log messages with the level error and print them into the output file.

### Requirements

- TypeScript OOP project.
- Node.js v18+.
- Designed in accordance with OOD principles (DRY, SLAP, SOLID, etc).
- Unit-testing ready (or partially covered by tests).
- Flexibility of the architecture. Application should be easy to extend and modify.

### Runnning command

    - Minimum options required for running command  to run applicaiton is:
      - node parser.js --input ./app.log --output ./errors.json
    - More options can be used
      - node parser.js --input ./app.log --output ./errors.json --log-level error --log-format '^(.+) - (\w+) - (.+)$' --batch-number 1000

    # Options

- -i, --input (required) : to specify input file path
- -o, --output (optional) : to specify output file path
- -t, --log-level (optional) : to specify which type of log level needed (default : error)
- -l, --log-format (optional): to specify the regex that should be used to split log records/lines, default regex provided
- -b, --batch-number (optional): to specify the batch size/lines for every reading loop, default is 1000

# Components

- Log parser app is consist of 6 Main components
  - Validator : this component is responsible for checking for the presance of the app.log file, it make sure errors.json also not found in the output folder and it make sure the output folder is writable.
  - Reader : this component is responsible for reading batches of the app.log files, batch number can be given in the running command or its set to 1000 lines/batch by default.
  - Splitter: this component is responsible for looping on batche records line by line and split it based on the given configuration(regex), and for extendability, this configuration(regex) can also be provided in the running command in case we need to split/parse different logs structure.
  - Log level filter : this component is responsible for looping on the already splitted records array and it filter records based on the given log level filter and also for extendability it can be extended to accept different log levels ex. warn.
  - formater : this component is responsible for formatting every filtered line so we implement changes(ex. date format) and retrieve specific elements from the filtered line (ex. transactionId, err )
  - Writter : this component is responsible for writing results to the given output file, now it exports json format results but for extendability it can be extened to export results format (ex. csv)

![Components Diagram](/diagram/components.png)

# Application Flow Chart

![Components Diagram](/diagram/app_flowchart.png)

### Running project in Docker

- In case you need to run project in docker, kindly run the below commands

  - docker build . -t parser
  - docker run parser

- Then navigate to container files and you will find errors.json has been created
