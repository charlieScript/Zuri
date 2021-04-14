const https = require('https');
const fs = require('fs');




https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  let result = '';
  res.on('data', (data) => {
    result += data;
  });
  res.on('end', () => {
    fs.mkdir(
      './results',
      {
        recursive: true,
      },
      (err) => {
        console.log(err);
      },
    );
    fs.writeFile('./results/posts.json', result, (err) => console.log(err))
  });
  res.on('error', (error) => {
    console.log(error);
  });
});
