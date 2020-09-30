// .github/actions/issue/index.js
const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");


async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const octokit = new Octokit({auth: token}); // Statt octokit könnten wir auch fetch nutzen
    // const octokit = new github.GitHub(token); 
    const response = await octokit.issues.addAssignees({
      ...github.context.repo,
      title,
      body,
      // braucht ein Array
      assignees: assignees ? assignees.split('\n'): undefined
    });

    core.setOutput('issue', JSON.stringify(response.data)) // Output muss immer ein String sein
  } catch (error) {
    core.setFailed(error.message)
  }
}
run();
