// callback -> promises -> async/await
const fs = require("fs");

// CALLBACK
fs.readFile(__dirname + "/file-to-read-1.txt", (err, content) => {
  fs.readFile(__dirname + "/file-to-read-2.txt", (err2, content2) => {
    console.log(err, String(content));
    console.log(err2, String(content2));
  });
});

// PROMISE
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) reject(err);
      resolve(String(content));
    });
  });

readFile(__dirname + "/file-to-read-2.txt").then((result) =>
  console.log(result)
);

// ASYNC - AWAIT
async function read(file) {
  const content = fs.readFile("file");
  return String(content);
}

const texto1 = await read(__dirname + "/file-to-read-1.txt");
console.log(texto1);
