## Sample Playwright Cucumber Framework

The tech stack used in this project are:
1. **TypeScript** as the programming language for writing test code
2. **Cucumber** as the framework
3. **NPM** as the build tool
4. **VSCode** as the preferred IDE for writing java code.

#### Getting Started
Setup your machine.
1. Node > 16 
2. Install VSCode & open the repo
3. On Terminal, navigate to repo and run ```npm run install```

#### Running tests
* Run tests in Sequence: ```browser=chrome npm run cucumber -- --tags="@test"```
* Run tests in Parallel: ```browser=chrome npm run cucumber -- --tags="@test" --parallel=5```
* Run tests and generate the report ```browser=chrome npm run cucumber -- --tags="@test" --parallel=5 && node cucumber.config.js```

#### Report
* Report will be found here: ```reports/index.html```
---

### Tests
1. **[TestCase-1](https://github.com/vinaykumarvvs/sample-playwright-cucumber-framework/blob/main/lib/feature/TestA.feature):** Heroku - FormAuthentication Cases
2. **[TestCase-2](https://github.com/vinaykumarvvs/sample-playwright-cucumber-framework/blob/main/lib/feature/TestB.feature):** Heroku - Drag And Drop Cases
