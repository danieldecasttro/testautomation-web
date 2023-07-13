# **Assignment Solution**

---

The written part of the Technical Assignment is available [HERE](https://docs.google.com/document/d/1jlund0-0aOQ-w86Y-CBkl60mPCtHOZAAULZJ_JsgKKw).

The coding part is described below.

## Technical Stack

- **Project**: _NodeJS_
- **Programming Language**: _JavaScript_
- **IDE**: _IntelliJ Community_
- **Test Automation Framework**: _Testcafe_
- **Web Server**: _http-server_ library
- **Other libraries**: _Prettier_

---

## Environment Setup

In order to be able to run this project you have to install:

### Pre-requirements
- **Git**
- **NodeJS**

### Cloning the project
- Open the Terminal
- Run the following commands:
  - `git clone https://github.com/danieldecasttro/testautomation-web.git`

### Installing dependencies
- Run the following commands:
  - `cd testautomation-web`
  - `npm install`

### Starting the HTTP Server
- Run the command `npm run http-server`

---

## Running Tests

After the environment setup described above, run the test scenarios following this procedure:

- Run the following commands:
  - `npm run test`
    (It'll run on headless Chrome)
- Verify the test run report: 
  - on your Terminal output
  - navigating to the folder `reports` and opening the file `report.html` in the browser

---

## GitHub Actions Workflow
[![Test Automation Workflow](https://github.com/danieldecasttro/testautomation-web/actions/workflows/testcafe.yml/badge.svg)](https://github.com/danieldecasttro/testautomation-web/actions/workflows/testcafe.yml)

---

Author: Daniel Castro<br>
E-mail: [daniel@kodeout.tk](mailto:daniel@kodeout.tk)<br>
Phone: (+31) 0619722574
