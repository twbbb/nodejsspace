var glob = require("glob");
 
console.time('glob');

// options is optional
// glob("**/*.js", function (er, files) {
//   // files is an array of filenames.
//   // If the `nonull` option is set, and nothing
//   // was found, then files is ["**/*.js"]
//   // er is an error object or null.
//   console.log(files);
// });
let files = glob.sync("**/*.js");
console.log(files);
console.timeEnd('glob');
