### Log parser app

Develop the command line node.js application, which parses the input log file (see Input Example).
The application should find all the log messages with the level error and print them into the output file (see Output Format).

### Requirements

- TypeScript OOP project.
- Node.js v18+.
- Designed in accordance with OOD principles (DRY, SLAP, SOLID, etc).
- Unit-testing ready (or partially covered by tests).
- Flexibility of the architecture. Application should be easy to extend and modify.

### AC

- Code should compile and run without errors.
- App should follow the input/output contract described below.

#### Important

If any of the AC is not met, the task will be rejected automatically.

### Contracts

#### Expected Usage

```bash
node parser.js --input ./app.log --output ./errors.json
```

#### Input Format

```text
<ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optional, error description>", ...<additional log information>}
```

#### Input Example

```text
2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}
2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request the user information","userId": 10}
2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request user orders list","userId": 10}
2021-08-09T02:12:51.255Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is started"}
2021-08-09T02:12:51.257Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request the user information","userId": 16}
2021-08-09T02:12:51.257Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"User information is gathered","user":{"id":10,"name":"Alice"}}
2021-08-09T02:12:51.258Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request user orders list","userId":16}
2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}
2021-08-09T02:12:51.259Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"User information is retrieved","user": {"id": 16, "name": "Michael"}}
2021-08-09T02:12:51.262Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"User information is retrieved","user":{"id":16,"orders":[{"id":472,"items":{"id":7,"price":7.12}}]}}
2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}
2021-08-09T02:12:51.265Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is successfully finished"}
```

#### Output Format

```text
[{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" }]
```

#### Output Example

```text
[{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]
```

---

#### MOHAMMAD MOUSSA Solution

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
      - node parser.js --input ./app.log --output ./errors.json --log-level error --splitter ^(.+) - (\\w+) - (.+)$ --batch-number 1000

    # Options

- -i, --input (required) : to specify input file path
- -o, --output (optional) : to specify output file path
- -t, --log-level (optional) : to specify which type of log level needed (default : error)
- -s, --splitter (optional): to specify the regex that should be used to split log records/lines, default regex provided
- -b, --batch-number (optional): to specify the batch size/lines for every reading loop, default is 1000

# Components

- Log parser app is consist of 6 Main components
  - Validator : this component is responsible for checking for the presance of the app.log file, it make sure errors.json also not found in the output folder and it make sure the output folder is writable.
  - Reader : this component is responsible for reading batches of the app.log files, batch number can be given in the running command or its set to 1000 lines/batch by default.
  - Splitter: this component is responsible for looping on batche records line by line and split it based on the given configuration(regex), and for extendability, this configuration(regex) can also be provided in the running command in case we need to split/parse different logs structure.
  - Log level filter : this component is responsible for looping on the already splitted records array and it filter records based on the given log level filter and also for extendability it can be extended to accept different log levels ex. warn.
  - Formatter : this component is responsible for formatting every filtered line so we implement changes(ex. date format) and retrieve specific elements from the filtered line (ex. transactionId, err )
  - Writter : this component is responsible for writing results to the given output file, now it exports json format results but for extendability it can be extened to export results format (ex. csv)

![Components Diagram](/diagram/components.png)

# Application Flow Chart

![Components Diagram](/diagram/app_flowchart.png)
