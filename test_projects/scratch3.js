const fs = require('fs');
const os = require('os');
const path = require('path');
var gplay = require('google-play-scraper');

// Create a new directory to store the results
const resultsDir = 'results';
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

gplay.search({
  term: "bitcoin lightning",
  num: 250
}).then((results) => {
  // Iterate over the results
  results.forEach((result) => {
    // Generate a filename for the result based on the appID
    const filename = result.appId + '.md';
    const filepath = path.join(resultsDir, filename);

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
}, console.log);
