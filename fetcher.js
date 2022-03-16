//1256 characters
const request = require("request");
const fs = require("fs");
const argv = process.argv.slice(2);

request(argv[0], (error, response, body) => {
  let totalCount = 0;
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  fs.writeFile(argv[1], body, (err) => {
    if (err){
      console.error(err);
    }
    for (const elements of body) {
      totalCount++;
    }
    console.log(`Downloaded and saved ${totalCount} bytes to ${argv[1]}`);
  });
});
