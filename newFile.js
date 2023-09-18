const fs = require("fs");
const { data } = require(".");

fs.writeFilesSync("./input.txt", `${data} \n\t\t by Muhammadaziz`);
