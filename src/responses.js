const fs = require('fs');  // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const respondHTML = (request, response, html) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(html);
  response.end();
};

const getIndex = (request, response) => {
  respondHTML(request, response, index);
};

module.exports = {
  getCats,
  getIndex,
};
