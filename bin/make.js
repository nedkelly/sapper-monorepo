const args = require('yargs').argv;
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const pkg = require('../package.json');

const namespace = args.ns || pkg.defaultNamespace || `@mynamespace`;

// available tasks
const tasks = {
  component: {
    cmd: 'npx degit sveltejs/template',
    name: path.resolve(`${process.cwd()}/packages/component-`),
  },
  sapper: {
    cmd: 'npx degit sveltejs/sapper-template#rollup',
    name: path.resolve(`${process.cwd()}/packages/app-`),
  },
};

// Task runner
function runTask(type, n) {
  const name = `${tasks[type].name}${n}`;
  return new Promise((resolve, reject) => {
    if (args[type] && args[type] !== true) {
      const result = {
        message: `New \`${type}\` created in: ${name}.`,
        path: `${name}`,
      };
      // resolve(result);
      spawn(tasks[type].cmd, [name], {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', _ => resolve(result))
        .on('exit', _ => resolve(result));
    } else {
      reject('Not enough arguments, you need to supply a name!');
    }
  });
}

// tasks to run from args
const runTasks = [
  ...Object.keys(tasks)
    .filter(t => args[t])
    .map(t => {
      if (typeof args[t] === 'string') {
        return () => runTask(t, args[t]);
      } else {
        return args[t].map(n => () => runTask(t, n));
      }
    }),
].flat();

// Rename packages to avoid conflicts
function renamePackage(p) {
  const pkgName = path.basename(p);
  const pkgPath = path.resolve(`${p}/package.json`);
  return new Promise((resolve, reject) => {
    let data = fs.readFileSync(pkgPath).toString();
    if (data) {
      data = JSON.parse(data);
      data.name = `${namespace}/${pkgName}`;
      fs.writeFile(pkgPath, JSON.stringify(data, null, 2), err => {
        if (err) return console.log(err);
        resolve(`Renamed package: ${data.name}`);
      });
    } else {
      reject(`No package.json found in: ${p}`);
    }
  });
}

// Run each task
function runEach(tasks) {
  let result = Promise.resolve();
  tasks.forEach(task => {
    result = result.then(task).then(res => {
      console.log(`SUCCESS: ${res.message}`);
      return renamePackage(res.path)
        .then(res => console.log(res))
        .catch(err => console.error(err));
    });
  });
  return result;
}

// Go
runEach(runTasks)
  .then(_ => console.log(`SUCCESS: All packages created!`))
  .catch(err => console.error(`ERROR: ${err}`));
