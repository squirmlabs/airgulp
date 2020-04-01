const Mp32Wav = require("mp3-to-wav");
const path = require("path");
// const FILE = path.basename("./DR-100_0284.mp3", ".html");
const FILE = "/DR1000284"
// console.log("[LOG]: path.dirname(FILE)", path.dirname(FILE))
console.log(path.isAbsolute(FILE)); //true
new Mp32Wav(FILE).exec();
// will produce wav file on provided dir
