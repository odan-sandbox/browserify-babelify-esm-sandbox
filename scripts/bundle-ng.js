var fs = require("fs");
var browserify = require("browserify");
browserify("./src/ng.js")
  .transform("babelify", {
    presets: [
      [
        "@babel/preset-env",
        {
          debug: true,
        },
      ],
    ],
    sourceType: "module",
  })
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"));
