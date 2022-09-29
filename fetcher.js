const request = require("request");
const fs = require("fs");

const dom = process.argv[2];
const localPath = process.argv[3];

request(dom, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(localPath, body, err => {
    if(err) {
      console.log("error:", err);
      return;
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${localPath}`)
    }
  });
});


