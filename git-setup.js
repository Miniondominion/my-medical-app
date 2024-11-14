const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runCommand(command) {
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    console.log(output);
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
  }
}

console.log("Initializing Git repository...");
runCommand('git init');

console.log("Creating .gitignore file...");
runCommand('echo node_modules > .gitignore');
runCommand('echo .next >> .gitignore');
runCommand('echo .env >> .gitignore');

console.log("Adding files to staging...");
runCommand('git add .');

console.log("Committing files...");
runCommand('git commit -m "Initial commit"');

rl.question('Enter your GitHub username: ', (username) => {
  rl.question('Enter your repository name: ', (repoName) => {
    console.log(`Creating repository ${repoName} on GitHub...`);
    console.log("Please create a new repository on GitHub manually.");
    console.log(`https://github.com/new?name=${repoName}`);
    
    rl.question('Press enter when you have created the repository...', () => {
      console.log("Adding remote repository...");
      runCommand(`git remote add origin https://github.com/${username}/${repoName}.git`);

      console.log("Pushing to GitHub...");
      runCommand('git push -u origin main');

      console.log("Your project has been pushed to GitHub!");
      rl.close();
    });
  });
});