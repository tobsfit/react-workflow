const core = require('@actions/core');
const github = require('@actions/github');

try {
  throw(new Error("Some Error Message"));
  const name = core.getInput('who-to-greet');
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, '\t'));
} catch(err) {
  core.setFailed(err.message) // Nur dann schlägt der Workflow fehl.
}
