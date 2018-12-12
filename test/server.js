const http = require('http');
const childProcess = require('child_process');

const casesNames = require('./cases-names');

let cases = casesNames.map(name => ({
    name,
    success: null
}));

// util
const red = str => console.log(`\x1b[31m${str}\x1b[0m`);
const green = str => console.log(`\x1b[32m${str}\x1b[0m`);

const onCaseResult = (data) => {
    
    // update
    let index = cases.findIndex(elt => elt.name==data.name);
    if (index==-1) {
        red(`[SERVER] ERROR: unknown case ${data.name}`);
        process.exit();
    }
    cases[index].success = data.success;
    data.success
        ? green(`[TEST] ${data.name}`)
        : red(`[TEST] ${data.name}: ${data.reason}`);

    // if all cases have been tried out: end process accordingly
    if (cases.filter(testCase => testCase.success==null).length==0) {
        let nbFailedCases = cases.filter(testCase => !testCase.success).length;
        nbFailedCases==0
            ? green('[TEST] SUCCESS')
            : red(`[TEST] FAIL: ${nbFailedCases}/${cases.length} test cases failed, see above for detail`);
        process.exit();
    }

}

const port = 3081;
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let data = '';
    req.on('data', chunk => data+=chunk);
    req.on('end', () => {
        data = JSON.parse(data);
        onCaseResult(data);
        res.end();
    });
});

server.listen(port, () => {
    console.log(`\n\n[SERVER] listening on port ${port}, test output below\n---`);
    childProcess.exec(`start chrome file:///${__dirname}/dist/index.html --new-window`);
});