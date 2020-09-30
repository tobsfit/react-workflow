// .github/actions/issue/index.js
const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');

    const octokit = new Octokit({ auth: token });
    const response = await octokit.issues.create({
      ...github.context.repo,
      title,
      body
    });
    core.setOutput('issue', JSON.stringify(response.data)) // Output muss immer ein String sein
  } catch (error) {
    core.setFailed(error.message)
  }
}
run();
