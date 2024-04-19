[@babel/cli](https://www.babeljs.cn/docs/babel-cli) 是一个能够从终端（命令行）使用的工具。下面是其安装命令和基本用法：


```bash
yarn add --dev @babel/core @babel/cli./node_modules/.bin/babel src --out-dir lib
```

这将解析 `src` 目录下的所有 JavaScript 文件，并应用我们所指定的代码转换功能，然后把每个文件输出到 `lib` 目录下。由于我们还没有指定任何代码转换功能，所以输出的代码将与输入的代码相同（不保留原代码格式）。我们可以将我们所需要的代码转换功能作为参数传递进去。

上面的示例中我们使用了 `--out-dir` 参数。你可以通过 `--help` 参数来查看命令行工具所能接受的所有参数列表。但是现在对我们来说最重要的是 `--plugins` 和 `--presets` 这两个参数。