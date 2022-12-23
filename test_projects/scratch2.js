const fs = require('fs');
const os = require('os'); // added this line
var gplay = require('google-play-scraper');

// Create a new directory to store the results
const resultsDir = 'results';
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

// Iterate over the results
results.forEach((result) => {
  // Generate a filename for the result based on some identifier
  const filename = result.identifier + '.md';
  const filepath = os.join(resultsDir, filename);

  // Set the contents that you want to write to the file
  const content = `
# ${result.title}

${result.description}

[Download from Google Play](${result.url})
  `;

  // Write the contents to a file
  fs.writeFile(filepath, content, (err) => {
    if (err) throw err;
    console.log(`Result saved to ${filepath}`);
  });
});
