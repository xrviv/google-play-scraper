const fs = require('fs');

// Set the contents that you want to write to the file
let content = `
<html>
  <body>
    <h1>Hello World</h1>
    <button onclick="clearFile()">Clear File</button>
  </body>
  <script>
    function clearFile() {
      // Write an empty string to the file
      fs.writeFile('index.html', '', (err) => {
        if (err) throw err;
        console.log('The file has been cleared!');
      });
    }
  </script>
</html>
`;

// Write the contents to a file
fs.writeFile('index.html', content, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
