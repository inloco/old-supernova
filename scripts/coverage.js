var chalk = require('chalk');
var fs = require('fs');
var spawn = require('child_process').spawn;

var DOT_ENV_FILE = './.env';
var dotEnvFileExists = fs.existsSync(DOT_ENV_FILE);
var results = []

if(dotEnvFileExists) {
  require('dotenv').config();
}

var BRANCH_NAME = process.argv[2]
var REPOSITORY_URL = process.env.REPOSITORY_URL
var CHECK_COVERAGE_FOLDER = './checkCoverage'
var COVERAGE_FILE = 'coverage/lcov-report/index.html'

var checkCoverageFolderExists = fs.existsSync(CHECK_COVERAGE_FOLDER)

if(!checkCoverageFolderExists) {
  gitClone().then(setupBranchAndUp);
} else {
  setupBranchAndUp();
}

function setupBranchAndUp() {
  process.chdir(CHECK_COVERAGE_FOLDER);

  gitUpdate()
    .then(gitResetMaster)
    .then(installDependencies)
    .then(pruneDependencies)
    .then(build)
    .then(jestCoverage)
    .then(getCoverageValues)
    .then(gitUpdate)
    .then(gitReset)
    .then(installDependencies)
    .then(pruneDependencies)
    .then(build)
    .then(jestCoverage)
    .then(getCoverageValues)
    .then(checkCoverageValues)
    .then(() => { process.exit(); });
}

function gitClone() {
  return runCommand(
    'git',
    ['clone', REPOSITORY_URL, CHECK_COVERAGE_FOLDER],
    'Cloning repository...'
  );
}

function gitResetMaster() {
  return runCommand(
    'git',
    ['reset', '--hard', 'origin/master'],
    'Reseting repository...'
  );
}

function gitReset() {
  return runCommand(
    'git',
    ['reset', '--hard', 'origin/' + BRANCH_NAME],
    'Reseting repository...'
  );
}

function gitUpdate() {
  return runCommand(
    'git',
    ['remote', 'update', '-p'],
    'Update repository...'
  );
}

function installDependencies() {
  return runCommand(
    'npm',
    ['install', '--save'],
    'Installing dependencies. This may take a few minutes...'
  );
}

function pruneDependencies() {
  return runCommand(
    'npm',
    ['prune'],
    'Pruning dependencies...'
  );
}

function build() {
  return runCommand(
    'npm',
    ['run', 'build'],
    'Building...'
  );
}

function jestCoverage() {
  return runCommand(
    'npm',
    ['test', '--', '--coverage'],
    'Running tests...'
  );
}

function getCoverageValues() {
  return new Promise((resolve, reject) => {
    console.log('Getting coverage values...')

    var arrayFile = fs.readFileSync(COVERAGE_FILE).toString().split('\n');
    var coverageValues = 0;

    if(arrayFile.length <= 0) {
      reject();
    }

    for(i in arrayFile) {
      if(arrayFile[i].includes('strong')) {
        var result = arrayFile[i].trim().replace('<span class="strong">', '').replace('% </span>', '')

        results.push(result)
        coverageValues++;

        if(coverageValues === 4) {
          i = arrayFile.length
        }
      }
    }

    return resolve();
  })
}

function checkCoverageValues() {
  return new Promise((resolve, reject) => {
    console.log('Checking coverage values...')

    var statements = shouldFails(0, 4)
    var branches = shouldFails(1, 5)
    var functions = shouldFails(2, 6)
    var lines = shouldFails(3, 7)

    if(statements || branches || functions || lines) {
      console.log('The current coverage is smaller than the master coverage');

      throw ':('

      return reject();
    }

    console.log();
    console.log('Everything is alright in your tests');

    return resolve();
  })
}

function shouldFails(master, currentBranch) {
  return (results[master] - results[currentBranch]) > 2
}

function runCommand(command, commandOptions, startMessage) {
  return new Promise((resolve, reject) => {
    console.log(startMessage);

    var proc = spawn(command, commandOptions, { stdio: 'inherit' });

    proc.on('close', function(code) {
      if (code !== 0) {
        console.error('Error - `' + command + ' ' + commandOptions.join(' ') + '` failed');
        return reject();
      }

      return resolve();
    })
  })
}
