var babel = require("@babel/core");
var path = require("path");
var result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", {
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime"],
});

//js 代码抽象成 ast
console.log(result, "res");
