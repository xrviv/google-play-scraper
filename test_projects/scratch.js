const fs = require('fs');
var gplay = require('google-play-scraper');

gplay.search({
  term: "bitcoin lightning",
  num: 250
}).then((results) => {
  // Set the contents that you want to write to the file
  let content = `
  <html>
    <body>
      <h1>Search Results for "bitcoin lightning"</h1>
      
      <ul>
  `;

  // Add the search results to the content
  results.forEach((result) => {
    content += `
      <li>
        <a href="${result.url}">${result.title}</a>
       
        
      </li>
    `;
  });

  content += `
      </ul>
    </body>
  </html>
  `;

  // Write the contents to a file
  fs.writeFile('index.html', content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}, console.log);

// Having problems with this code
// Second try
