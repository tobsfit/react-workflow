// .github/actions/issue/index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const response = await fetch(`/repos/${github.context.repo.owner}/${github.context.repo.repo}/issues`, {
      title,
      body,
      assignees: assignees ? assignees.split('\n'): undefined // braucht ein Array
    }).then(res => res.json());

    // const response = await octokit.issues.create({
    //   ...github.context.repo,
    //   title,
    //   body,
    //   assignees: assignees ? assignees.split('\n'): undefined // braucht ein Array
    // });
    
    core.setOutput('issue', JSON.stringify(response.data)) // Output muss immer ein String sein
  } catch (error) {
    core.setFailed(error.message)
  }
}
run();
