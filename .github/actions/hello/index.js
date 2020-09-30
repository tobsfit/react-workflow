const core = require('@actions/core');
const github = require('@actions/github');

try {
  // throw(new Error("Some Error Message"));
  
  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');

  const name = core.getInput('who-to-greet');
  core.setSecret(name) // wird zu ***

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  // Expandable
  core.startGroup('Logging github object');
  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable("HELLO", "hello") // setzt eine env variable die wir in der yml datei nutzen können
} catch(err) {
  core.setFailed(err.message) // Nur dann schlägt der Workflow fehl.
}
