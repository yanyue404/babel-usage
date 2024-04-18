var babel = require("babel-core");
var transform = babel.transform;
var path = require("path");
var result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", {
  presets: ["env"],
  plugins: ["transform-runtime"],
});

//js 代码抽象成 ast
console.log(result, "res");
