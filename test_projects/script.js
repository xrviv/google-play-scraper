var gplay = require('google-play-scraper');

gplay.search({
    term: "bitcoin lightning",
    num: 250
  }).then(console.log, console.log);


