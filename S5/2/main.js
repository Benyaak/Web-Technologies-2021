const fs = require("fs");

const dir = "./temp";
if (!fs.existsSync(dir)) {
  fs.mkdir(dir, { recursive: true }, function (error) {
    if (error) {
      return error;
    }
    console.log('Created the folder')
    fs.writeFile(dir  + '/myFile.txt', "Bla", () => {
      console.log("Created the file");
    });
    fs.rmdir(dir, { recursive: true, force: true }, (error) => {
        if (error) {
            return error;
        }
        console.log('Deleted the folder');
    });
  });
}
