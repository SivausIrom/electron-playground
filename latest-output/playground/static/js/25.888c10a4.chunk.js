(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[25,113,114,115],{1317:function(n,e,o){n.exports=['# \u672c\u5730\u5f00\u53d1\n  \n## \u5feb\u901f\u65b0\u5efa\u4e00\u4e2aElectron App\n\n\u65b0\u5efa\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55\uff1a\n```shell\nmkdir my-app && cd my-app\n```\n\u521d\u59cb\u5316**package.json**\n```shell\nyarn init\n```\n\u5b89\u88c5\u4f9d\u8d56\n```shell\nyarn add electron -D\n```\n\u65b0\u5efaindex.html\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Hello World</title>\n  <style>\n    html, body {\n      background-color: antiquewhite;\n    }\n  </style>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>\n```\n\u65b0\u5efaindex.js\n```js\nconst { app, BrowserWindow } = require(\'electron\')\nconst path = require(\'path\')\n\napp.on(\'ready\', function(){\n  const window = new BrowserWindow()\n  window.loadFile(path.resolve(__dirname, \'src\', \'index.html\'))\n})\n```\n\u5728package.json\u4e2d\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4\n```json\n"scripts": {\n  "start": "electron ."\n},\n```\n\u6267\u884c\u542f\u52a8\u547d\u4ee4\n```shell\nyarn start\n```\n\n\u663e\u793a\u6548\u679c\u5982\u4e0b\n\n',"![quick start electron app]("+o(473)+")",'\n\n\u8fd9\u6837\uff0c\u4e00\u4e2a\u5341\u5206\u7b80\u5355\u7684Electron App\u5c31\u5b8c\u6210\u4e86\u3002\n\n## 1. \u6b63\u5f0f\u5f00\u59cb\n\n\u521a\u521a\u7684\u9879\u76ee\u867d\u7136\u5df2\u7ecf\u80fd\u591f\u542f\u52a8\u6765\uff0c\u4f46\u8fd8\u6709\u4e9b\u7b80\u5355\uff0c\u5bf9\u4e8e\u9700\u6c42\u548c\u4e1a\u52a1\u590d\u6742\u7684\u9879\u76ee\u6765\u8bf4\u8fd8\u6709\u5f88\u591a\u4e0d\u8db3\u3002\n\n\u6bd4\u5982\uff0c\u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\u6539\u5982\u4f55\u8c03\u8bd5\uff1f\u6211\u60f3\u7528\u6700\u65b0\u7684ES\u7279\u6027\u8be5\u600e\u4e48\u505a\uff1f\u60f3\u7528TypeScript\u8be5\u600e\u4e48\u914d\u7f6e\uff1f\u60f3\u7528React\uff0cVue\uff0cAngular\u6765\u5199UI\u5462\uff1f\n\n\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4e00\u4e00\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002\n\n### 1.1 \u4f7f\u7528Webpack\u6765\u7f16\u8bd1\u6211\u4eec\u7684\u4ee3\u7801\n\n\u9996\u5148\u8c03\u6574\u4e00\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a\n\n```\n.\n\u251c\u2500\u2500 app                                 \n\u2502   \u2514\u2500\u2500 index.js                        \u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\n\u251c\u2500\u2500 build                               \u6784\u5efa\u76f8\u5173\u7684\u811a\u672c\u548c\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 webpack.config.js\n\u251c\u2500\u2500 output                              \u7f16\u8bd1\u7ed3\u679c\u8f93\u51fa\u76ee\u5f55\n\u2514\u2500\u2500 src                                 \n    \u2514\u2500\u2500 index.html                      \u6e32\u67d3\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6 \n```\n\n\u6211\u4eec\u8fd9\u91cc\u9009\u62e9webpack\u4f5c\u4e3a\u6784\u5efa\u5de5\u5177\u3002\n\nElectron\u672c\u8eab\u7684TypeScript\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\u5f88\u9f50\u5168\uff0c\u5f00\u53d1\u4f53\u9a8c\u4e0d\u9519\uff0c\u56e0\u6b64\u8fd9\u91cc\u9009\u62e9TypeScript\u4f5c\u4e3a\u4e3b\u8981\u5f00\u53d1\u8bed\u8a00\u3002\n\n\u9996\u5148\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56\uff1a\n```shell\nyarn add -D webpack webpack-cli webpack-merge typescript awesome-typescript-loader\n```\n\n\u5728build\u76ee\u5f55\u6dfb\u52a0webpack.config.base.js\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a\n\n```js\nconst path = require(\'path\');\n\nmodule.exports = {\n  resolve: {\n    extensions: [\'.ts\', \'.tsx\', \'.js\', \'.jsx\'],\n    alias: {\n      \'app\': path.resolve(__dirname, \'../app\'),\n      \'src\': path.resolve(__dirname, \'../src\'),\n    },\n  },\n  module: {\n    rules: [{\n      test: /\\.tsx?$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: \'awesome-typescript-loader\',\n      }],\n    }],\n  },\n  output: {\n    path: path.join(__dirname, \'..\', \'output\', \'main\'),\n    filename: \'[name].js\',\n  },\n  // https://webpack.js.org/configuration/node/\n  // \u907f\u514dwebpack\u914d\u7f6e\u5bfc\u81f4\u7684__dirname\u548c__filename\u548c\u5b9e\u9645\u8f93\u51fa\u6587\u4ef6\u7684\u4e0d\u4e00\u81f4\n  node: {\n    __dirname: false,\n    __filename: false,\n  },\n  // \u542f\u7528source-map\n  devtool: \'source-map\',\n  plugins: [\n  ]\n};\n```\n\n\u8fd9\u91cc\u662f\u57fa\u7840\u7684webpack\u914d\u7f6e\uff0c\u5c06\u5e94\u7528\u4e8e\u4e3b\u8fdb\u7a0b\u548cpreload\u7684\u4ee3\u7801\u7f16\u8bd1\u3002\n\n\u63a5\u4e0b\u6765\u5728build\u76ee\u5f55\u6dfb\u52a0webpack.config.main.js\u4f5c\u4e3a\u4e3b\u8fdb\u7a0b\u7684webpack\u914d\u7f6e\uff1a\n\n```js\nconst webpack = require(\'webpack\')\nconst { merge } = require(\'webpack-merge\')\n\nconst baseConfig = require(\'./webpack.config.base\')\n\nmodule.exports = merge(baseConfig, {\n  mode: process.env.NODE_ENV,\n  // https://webpack.js.org/configuration/target/\n  // webpack\u53ef\u4ee5\u9488\u5bf9\u591a\u79cd\u73af\u5883\u6216\u76ee\u6807\u8fdb\u884c\u7f16\u8bd1\uff0c\u5305\u62ecelectron-main\u548celectron-preload\u3002\n  target: \'electron-main\',\n  entry: {\n    index: \'./app/index.ts\',\n  },\n  plugins: [\n    new webpack.NamedModulesPlugin(),\n    new webpack.EnvironmentPlugin({\n      NODE_ENV: \'development\',\n    }),\n  ],\n})\n```\n\n\u6dfb\u52a0`tsconfig.json`\n```json\n// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html\n{\n  "compilerOptions": {\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "importHelpers": true,\n    "target": "es2015",\n    "jsx": "react",\n    "esModuleInterop": true,\n    "sourceMap": true,\n    "noImplicitAny": true,\n    "strict": true,\n    "allowSyntheticDefaultImports": true,\n    "experimentalDecorators": true,\n    "baseUrl": ".",\n    "paths": {\n      "app/*": ["app/*"],\n      "src/*": ["src/*"],\n    },\n  },\n  "include": ["app/**/*"],\n  "exclude": ["node_modules", "packages", "public", "mock"]\n}\n\n```\n\n\u5220\u9664`app/index.js`\uff0c\u6dfb\u52a0`app/index.ts`\uff0c\u73b0\u5728\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528TypeScript\u6765\u7f16\u5199electron\u5e94\u7528\u4e86\u3002\n\n```ts\nimport { app, BrowserWindow } from \'electron\'\nimport path from \'path\'\n\napp.on(\'ready\', function(){\n  const window = new BrowserWindow()\n  window.loadFile(path.resolve(__dirname, \'..\', \'..\', \'src\', \'index.html\'))\n})\n```\n\u5728package.json\u4e2d\u6dfb\u52a0\u547d\u4ee4\n```json\n"dev:main": "NODE_ENV=development webpack --config ./build/webpack.config.main.js --watch"\n```\n\n\u5c06 `main` \u5b57\u6bb5\u6539\u4e3a\u8f93\u51fa\u6587\u4ef6\u7684\u8def\u5f84\uff1a\n```json\n"main": "output/main/index.js",\n```\n\n\u6267\u884c\n\n```shell\nyarn dev:main\n```\n\n\u53d1\u73b0output\u76ee\u5f55\u4e0b\u5f97\u5230\u4e86\u7f16\u8bd1\u540e\u7684`index.js`\u6587\u4ef6\u548csourcemap\u6587\u4ef6\uff0c\u63a5\u4e0b\u6765\u8fd0\u884c\n\n```shell\nyarn start\n```\n\n\u5373\u53ef\u542f\u52a8electron app\n\n### 1.2 \u8c03\u8bd5\u4e3b\u8fdb\u7a0b\n\n### 1.2.1 \u4f7f\u7528chrome\u8c03\u8bd5\n\n\u9996\u5148\u53ef\u4ee5\u901a\u8fc7electron\u672c\u8eab\u63d0\u4f9b\u7684inspect\u9879\u548cchrome\u8fdb\u884c\u8c03\u8bd5\n\n\u4fee\u6539package.json\u4e2d\u7684`start`\u547d\u4ee4\n\n```json\n"start": "electron . --inspect-brk=5858",\n```\n\n\u8fd0\u884c\u540e\u6253\u5f00chrome\uff0c\u8f93\u5165 `chrome://inspect`\u8fdb\u5165inspect\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\n\n\n',"![]("+o(472)+")",'\n\n\u70b9\u51fb `Configure` \u8f93\u5165 `localhost:5858`\uff0c\u70b9\u51fb`Done`\uff0c\u5373\u53ef\u5728\u4e0b\u9762\u7684Remote Target\u5217\u8868\u4e2d\u770b\u5230\u6211\u4eec\u7684Electron\u5e94\u7528\uff0c\u70b9\u51fbinspect\u4fbf\u53ef\u4ee5\u5f00\u59cb\u8c03\u8bd5\u3002\n\n[\u6587\u6863\u53c2\u8003](https://nodejs.org/en/docs/guides/debugging-getting-started/)\n\n### 1.2.2 \u4f7f\u7528vscode\u8c03\u8bd5\n\n\u5c3d\u7ba1chrome\u7684\u5f00\u53d1\u8005\u5de5\u5177\u7528\u6765\u8c03\u8bd5\u5df2\u7ecf\u76f8\u5f53\u597d\u7528\uff0c\u4f46\u8fd8\u662f\u62b5\u6321\u4e0d\u4e86\u5c06debugger\u96c6\u6210\u5230\u7f16\u8f91\u5668\u4e2d\u7684\u8bf1\u60d1\uff1a\u5728\u7f16\u8f91\u5668\u4e2d\u6e90\u4ee3\u7801\u76f4\u63a5\u6253\u65ad\u70b9\u8c03\u8bd5\u5b9e\u5728\u662f\u592a\u65b9\u4fbf\u4e86\u3002\n\nvscode\u4e2d\u914d\u7f6e\u5341\u5206\u7b80\u5355\uff0c\u6253\u5f00debug\u9762\u677f\uff0c\u70b9\u51fb\u6dfb\u52a0\u914d\u7f6e\uff0claunch.json\u914d\u7f6e\u5982\u4e0b:\n```json\n{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Launch Program",\n      "program": "${workspaceFolder}/app/index.ts",\n      "cwd": "${workspaceFolder}",\n      "skipFiles": [\n        "<node_internals>/**"\n      ],\n      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",\n      "windows": {\n        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"\n      },\n      "outFiles": [\n        "${workspaceRoot}/output/main/*.js"\n      ],\n      "args" : ["."]\n    }\n  ]\n}\n```\n\n\u6253\u5f00`app/index.ts`\uff0c\u5728\u60f3\u8981\u8c03\u8bd5\u7684\u4ee3\u7801\u5de6\u8fb9\u70b9\u51fb\u6253\u4e0a\u65ad\u70b9\uff0c\u5728debug\u9762\u677f\u70b9\u51fb`start debugging`\uff0c\u5c31\u4f1a\u53d1\u73b0\u4ee3\u7801\u6267\u884c\u5230\u65ad\u70b9\u5904\u505c\u4f4f\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u81ea\u7531\u5728vscode\u4e2d\u8c03\u8bd5\u4e86\u3002\n\n[\u6587\u6863\u53c2\u8003](https://www.electronjs.org/docs/tutorial/debugging-main-process-vscode)\n\n### 1.2.3 \u4f7f\u7528webstorm\u8c03\u8bd5\n\n\u548cvscode\u7c7b\u4f3c\uff0c\u5728webstorm\u4e2d\u4e5f\u662f\u901a\u8fc7\u6dfb\u52a0\u914d\u7f6e\u6765\u8fdb\u884c\u8c03\u8bd5\uff0c\u70b9\u51fb\u6dfb\u52a0\u914d\u7f6e\uff0c\u9009\u62e9Node.js\uff0c\u586b\u5199\u5982\u4e0b\uff1a\n\n',"![]("+o(471)+")","\n\n[\u6587\u6863\u53c2\u8003](https://blog.jetbrains.com/webstorm/2016/05/getting-started-with-electron-in-webstorm/)\n\n### 1.3 \u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b\n\n#### 1.3.1 \u6253\u5f00\u63a7\u5236\u53f0\n\n\u4fee\u6539`app/index.ts`\u4e2d\u7684\u4ee3\u7801:\n```ts\napp.on('ready', function(){\n  const window = new BrowserWindow()\n  window.loadFile(path.resolve(__dirname, '..', '..', 'src', 'index.html'))\n  if(process.env.NODE_ENV === 'development'){\n    window.webContents.openDevTools()\n  }\n})\n```\n\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u5c31\u4f1a\u81ea\u52a8\u6253\u5f00chrome\u8c03\u8bd5\u5de5\u5177\u4e86\n\n#### 1.3.2 \u6dfb\u52a0preload\n\n\u5728`app`\u6587\u4ef6\u5939\u4e0b\u6dfb\u52a0`preload.ts`\n```ts\nimport { ipcRenderer } from 'electron';\n\nasync function getAppInfo() {\n  return await ipcRenderer.invoke('app/get_basic_info') \n}\n\nconst JSBridge = {\n  getAppInfo,\n};\n\nwindow.JSBridge = JSBridge;\n\nexport type JSBridgeType = typeof JSBridge;\n\n```\n\n\u5e76\u5728app\u4e2d\u6dfb\u52a0\u5bf9ipc\u7684\u5904\u7406\uff1a\n```ts\napp.on('will-finish-launching', function(){\n  ipcMain.handle('app/get_basic_info', function handleAppGetBasicInfo(){\n    return {\n      version: app.getVersion(),\n      name: app.name,\n    }\n  })\n})\n```\n\n\u7531\u4e8ewindow\u4e0a\u6ca1\u6709JSBridge\u5c5e\u6027\uff0cts\u4f1a\u62a5\u9519\uff0c\u6b64\u65f6\u6211\u4eec\u5728\u6839\u76ee\u5f55\u6dfb\u52a0\u4e00\u4e2aglobal.d.ts:\n\n```ts\nimport { JSBridgeType } from \"app/preload\";\n\ndeclare global{\n  interface Window{\n    JSBridge: JSBridgeType\n  }\n}\n```\n\n\u63a5\u4e0b\u6765\u5728build\u4e0b\u6dfb\u52a0`webpack.config.preload.js`\uff0c\u5c06preload\u4e5f\u8f93\u51fa\u5230output\u76ee\u5f55\u4e0b:\n\n```js\nconst webpack = require(\"webpack\");\nconst { merge } = require(\"webpack-merge\");\n\nconst baseConfig = require(\"./webpack.config.base\");\n\nmodule.exports = merge(baseConfig, {\n  mode: process.env.NODE_ENV,\n  target: \"electron-preload\",\n  entry: {\n    preload: \"./app/preload.ts\",\n  },\n  plugins: [\n    new webpack.NamedModulesPlugin(),\n    new webpack.EnvironmentPlugin({\n      NODE_ENV: \"development\",\n    }),\n  ],\n});\n```\n\n\u5728package.json\u4e2d\u6dfb\u52a0\u4e00\u6761preload\u7684\u5f00\u53d1\u547d\u4ee4:\n```json\n\"dev:preload\": \"NODE_ENV=development webpack --config ./build/webpack.config.preload.js --watch\"\n```\n\n\u542f\u52a8\u540e\u5c31\u4f1a\u53d1\u73b0output/main\u76ee\u5f55\u4e0b\u591a\u51fa\u4e00\u4e2apreload.js\u53casourcemap\n\n\u4fee\u6539`app/index.ts`\uff0c\u521b\u5efaBrowserWindow\u65f6\u6ce8\u5165preload.js\n```ts\nconst PRELOAD = path.resolve(__dirname, 'preload.js')\n\napp.on('ready', function(){\n  const window = new BrowserWindow({webPreferences: {preload: PRELOAD}})\n  window.loadFile(path.resolve(__dirname, '..', '..', 'src', 'index.html'))\n  if(process.env.NODE_ENV === 'development'){\n    window.webContents.openDevTools()\n  }\n})\n```\n\n\u5728`app/index.html`\u4e2d\u6dfb\u52a0\u6309\u94ae\u83b7\u53d6app\u4fe1\u606f:\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Hello World</title>\n    <style>\n      html,\n      body {\n        background-color: antiquewhite;\n      }\n    </style>\n    <script>\n      async function handleGetAppInfo() {\n        const { version, name } = await window.JSBridge.getAppInfo();\n        console.log(version,name)\n        document.querySelector('#version').innerText = version\n        document.querySelector('#name').innerText = name\n      }\n    <\/script>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n    <dl>\n      <dt>version</dt> <dd id=\"version\"></dd>\n      <dt>name</dt> <dd id=\"name\"></dd>\n    </dl>\n    <button onclick=\"handleGetAppInfo()\">get app info</button>\n  </body>\n</html>\n```\n\n\u542f\u52a8app\uff0c\u70b9\u51fb\u6309\u94ae\uff0c\u53d1\u73b0\u80fd\u591f\u6b63\u5e38\u83b7\u53d6\u5230app\u4fe1\u606f\n\n\u81f3\u6b64\u6211\u4eec\u57fa\u672c\u7684\u5f00\u53d1\u6d41\u7a0b\u5c31\u90fd\u5b9e\u73b0\u4e86\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\n- \u4e3b\u8fdb\u7a0b\uff0c\u6e32\u67d3\u8fdb\u7a0b\uff0cpreload\u7684\u7f16\u8bd1\n- \u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\u7684\u8c03\u8bd5\n\n\u770b\u8d77\u6765\u662f\u5b8c\u5907\u4e86\uff0c\u4f46\u5f00\u53d1\u65f6\u5c31\u4f1a\u53d1\u73b0\u8fd8\u4e0d\u591f\u7528\u5462\u3002\u63a5\u4e0b\u6765\u5bf9\u8fd9\u4e2a\u6d41\u7a0b\u505a\u4e00\u4e9b\u8865\u5145\n\n### 2 \u6d41\u7a0b\u5b8c\u5584\n\n#### 2.1 \u542f\u52a8\u547d\u4ee4\u5b8c\u5584\n\n\u9996\u5148\u5b89\u88c5cross-env\u548cconcurrently\n```shell\nyarn add -D cross-env concurrently\n```\n\u4fee\u6539`dev:main`\u548c`dev:preload`\u547d\u4ee4\u5e76\u6dfb\u52a0`dev`\u547d\u4ee4\uff1a\n```json\n\"dev:main\": \"webpack --config ./build/webpack.config.main.js --watch\",\n\"dev:preload\": \"webpack --config ./build/webpack.config.preload.js --watch\",\n\"dev\": \"cross-env NODE_ENV=development concurrently \\\"npm run dev:main\\\" \\\"npm run dev:preload\\\"\"\n```\n\ncross-env\u7528\u4e8e\u517c\u5bb9\u5404\u5e73\u53f0\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\uff0cconcurrently\u7528\u4e8e\u540c\u65f6\u8fd0\u884c\u591a\u4e2awebpack\u7f16\u8bd1\u7684watch\u6a21\u5f0f\u3002\u4e4b\u540eapp\u7684\u7f16\u8bd1\u53ea\u9700\u8fd0\u884c`yarn dev`\u5373\u53ef\n\n#### 2.2 \u4f7f\u7528React\u505a\u6e32\u67d3\u8fdb\u7a0b\u5f00\u53d1\n\n\u9996\u5148\u7528`create-react-app`\u521b\u5efa\u4e00\u4e2aReact\u5e94\u7528\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c\n\n```shell\nyarn create react-app renderer\n```\n\n\u8fdb\u5165renderer\u76ee\u5f55\u8fd0\u884c`yarn start`\uff0c\u5e94\u7528\u9ed8\u8ba4\u57282333\u7aef\u53e3\u542f\u52a8\uff0c\u5982\u679c\u62a5\u9519`The react-scripts package provided by Create React App requires a dependency: webpack`\uff0c\u53ef\u4ee5\u5728renderer\u76ee\u5f55\u4e0b\u6dfb\u52a0.env\u6587\u4ef6\uff1a\n```\nSKIP_PREFLIGHT_CHECK=true\n```\n\n\u8fd9\u65f6\u5019\u6211\u4eec\u5c06`app/index.ts`\u4e2d\u7684`window.loadFile ...`\u6539\u4e3a\n\n```ts\nwindow.loadURL('http://localhost:2333')\n```\n\n\u91cd\u542fElectron\u5e94\u7528\u5373\u53ef\u770b\u5230\u6e32\u67d3\u7684\u7a97\u53e3\u52a0\u8f7d\u4e86\u672c\u5730\u7684React\u5e94\u7528\n\n\u4f46\u662f\u8fd9\u91cc\u4f1a\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u6253\u5305\u65f6\u6211\u4eec\u4f1a\u5c06\u6e32\u67d3\u8fdb\u7a0b\u7684\u4ee3\u7801\u6253\u5305\u8fdb\u53bb\uff0c\u7a97\u53e3\u52a0\u8f7d\u5b9e\u9645\u4e0a\u662f\u901a\u8fc7loadFile\u7684\u65b9\u5f0f\u8fdb\u884c\u7684\uff0c\u5982\u679c\u672c\u5730\u5f00\u53d1\u7684\u65f6\u5019\u4f7f\u7528\u672c\u5730http\u5730\u5740\u5f00\u53d1\uff0c\u5b9e\u9645\u6548\u679c\u548c\u6253\u5305\u51fa\u6765\u7684\u6548\u679c\u662f\u4f1a\u6709\u51fa\u5165\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u518d\u505a\u4e00\u4e9b\u4fee\u6539\uff0c\u5c06\u5f00\u53d1\u65f6\u751f\u6210\u7684\u6587\u4ef6\u8f93\u51fa\u5230`output/renderer`\u76ee\u5f55\u4e0b\uff0c\u7136\u540e\u901a\u8fc7loadFile\u7684\u65b9\u5f0f\u52a0\u8f7d\u5b83\u3002\n\n\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u4fee\u6539cra\u9879\u76ee\u7684webpack\u4e2d\u5bf9\u5e94\u7684output\u914d\u7f6e\u548cpath\u4e2d\u7684appBuild\u914d\u7f6e\u6765\u6539\u53d8\u8f93\u51fa\u76ee\u5f55\uff0c\u7136\u540e\u4fee\u6539devServer\u7684\u914d\u7f6e\u8ba9\u5f00\u53d1\u65f6\u4e5f\u8f93\u51fa\u6587\u4ef6\uff0c\u5e76\u4e14\u4fee\u6539socket\u914d\u7f6e\u4fdd\u8bc1\u70ed\u66f4\u65b0\u80fd\u6b63\u5e38\u4f7f\u7528\u3002\n\n\u56e0\u4e3acra\u9879\u76ee\u672c\u8eab\u6ca1\u6709\u5c06\u914d\u7f6e\u66b4\u9732\u51fa\u6765\uff0c\u8fd9\u91cc\u6211\u4eec\u505a\u7684\u6539\u52a8\u4e0d\u591a\uff0c\u56e0\u6b64\u9009\u62e9\u4f7f\u7528`react-app-rewired`\u800c\u975eeject\u5f39\u51fa\u914d\u7f6e\u3002\n\n\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\n\n```shell\nyarn add -D react-app-rewired react-dev-utils\n```\n\n\u7136\u540e\u5728renderer\u76ee\u5f55\u4e0b\u65b0\u5efa`config-overrides.js`\n\n```js\nconst path = require('path')\nconst OUTPUT_PATH = path.resolve(__dirname, '..', 'output', 'renderer')\n\nmodule.exports = {\n    webpack: function(config, env) {\n        // \u4fee\u6539\u8f93\u51fa\u76ee\u5f55\n        config.output.path = OUTPUT_PATH\n        // \u4fee\u6539publicPath\uff0c\u5426\u5219\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u4f1a\u5f15\u7528\u5931\u8d25\n        config.output.publicPath = './'\n\n        return config;\n    },\n    devServer: function(configFunction) {\n        return function(proxy, allowedHost) {\n            const config = configFunction(proxy, allowedHost);\n\n            // \u5c06\u6587\u4ef6\u8f93\u51fa\u5230\u786c\u76d8\n            config.writeToDisk = true\n            // \u4fee\u6539sock\u76f8\u5173\u914d\u7f6e\u4fdd\u8bc1\u70ed\u66f4\u65b0\u529f\u80fd\u6b63\u5e38\n            config.host = process.env.HOST || '0.0.0.0';\n            config.sockHost = process.env.WDS_SOCKET_HOST;\n            config.sockPath = process.env.WDS_SOCKET_PATH; // default: '/sockjs-node'\n            config.sockPort = process.env.WDS_SOCKET_PORT;\n\n            return config;\n        };\n    },\n    paths: function(paths, env) {\n        // \u4fee\u6539build\u4e0b\u7684\u8f93\u51fa\u76ee\u5f55\n        paths.appBuild = OUTPUT_PATH\n        return paths;\n    },\n}\n```\n\n\u91cd\u65b0\u542f\u52a8react\u9879\u76ee\uff0c\u53d1\u73b0`output/renderer`\u76ee\u5f55\u4e0b\u8f93\u51fa\u4e86\u5bf9\u5e94\u7684\u9759\u6001\u6587\u4ef6\n\n\u7136\u540e\u6211\u4eec\u5c06`app/index.ts`\u4e2d\u7684`window.loadURL ...`\u6ce8\u91ca\uff0c\u6dfb\u52a0\u4e00\u884c\n```ts\n// window.loadURL('http://localhost:2333')\nwindow.loadFile(path.resolve(__dirname, '..', '..', 'output', 'renderer', 'index.html'))\n```\n\n\u91cd\u65b0\u542f\u52a8\u5e94\u7528\uff0c\u53d1\u73b0\u52a0\u8f7d\u6210\u529f\u3002\n\n\n### 2.3 \u7ed9devtools\u6dfb\u52a0plugins\n\n\u6e32\u67d3\u8fdb\u7a0b\u4f7f\u7528\u4e86react\u8fdb\u884c\u5f00\u53d1\uff0c\u4e3a\u4e86\u66f4\u65b9\u4fbf\u7684\u8c03\u8bd5\uff0c\u6211\u4eec\u6765\u7ed9devtools\u5b89\u88c5\u6d4f\u89c8\u5668\u63d2\u4ef6\u3002\n\n\u9996\u5148\u627e\u5230chrome\u63d2\u4ef6\u7684\u4f4d\u7f6e\n- windows\n```\n%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default\\Extensions\n```\n- MacOS\n```\n~/Library/Application Support/Google/Chrome/Default/Extensions\n```\n\n- Linux\uff0c\u6709\u51e0\u4e2a\u53ef\u80fd\u7684\u8def\u5f84\n```\n~/.config/google-chrome/Default/Extensions/\n~/.config/google-chrome-beta/Default/Extensions/\n~/.config/google-chrome-canary/Default/Extensions/\n~/.config/chromium/Default/Extensions/\n```\n\n\u6253\u5f00\u76ee\u5f55\u4f1a\u53d1\u73b0\u4e0b\u9762\u90fd\u662f\u6839\u636e\u4ee5\u6269\u5c55id\u547d\u540d\u7684\u6587\u4ef6\u5939\uff0c\u60f3\u8981\u627e\u5230\u6269\u5c55\u5bf9\u5e94\u7684id\uff0c\u53ef\u4ee5\u5728chrome\u4e2d\u6253\u5f00`chrome://extensions/`\uff0c\u70b9\u51fb\u5bf9\u5e94\u6269\u5c55\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5373\u53ef\u4eceurl\u53c2\u6570\u4e0a\u627e\u5230id\u3002\n\n\u4ee5`React Developer Tools`\u5728MacOS\u4e0a\u7684\u4e3a\u4f8b\uff0c\u5728`app/index.ts`\u4e2d\u6dfb\u52a0\uff1a\n```ts\nconst EXTENSION_PATH_REACT_DEV_TOOLS = path.join('/Users/wangshuwen/Library/Application Support/Google/Chrome/Default/Extensions/', 'fmkadmapgofadopljbjfkapdkoienihi', '4.8.2_0')\n\n...\n\napp.on('ready', async function () {\n  const e = await session.defaultSession.loadExtension(EXTENSION_PATH_REACT_DEV_TOOLS)\n\n  const window = new BrowserWindow({webPreferences: {preload: PRELOAD}})\n  window.loadURL('http://localhost:2333')\n  \n  ...\n})\n```\n\n\u7531\u4e8eElectron\u672c\u8eab\u539f\u56e0\uff0c\u901a\u8fc7`session.loadExtension`\u6dfb\u52a0\u7684\u63d2\u4ef6\u76ee\u524dReact Dev Tools\u5728file\u534f\u8bae\u4e0b\u65e0\u6cd5\u8bbf\u95ee\u6587\u4ef6\uff0c\u9700\u8981\u5728http\u534f\u8bae\u4e0b\u8fdb\u884c\u8c03\u8bd5\u3002\n\n\u5907\u9009\u65b9\u6848\uff1a\u6539\u4e3a\u4f7f\u7528`BrowserWindow.addDevToolsExtension`\u65b9\u6cd5\u6dfb\u52a0\u63d2\u4ef6\uff0c\u5728Electron 9.0.0\u7248\u672c\u4ee5\u4e0b\u751f\u6548\n```ts\napp.on('ready', async function () {\n  BrowserWindow.addDevToolsExtension(EXTENSION_PATH_REACT_DEV_TOOLS)\n  // const e = await session.defaultSession.loadExtension(EXTENSION_PATH_REACT_DEV_TOOLS)\n\n  ...\n})\n```\n\n\u4f46\u662f\u6ce8\u610f\u8fd9\u4e2a\u65b9\u6cd5\u5373\u5c06\u88abElectron\u5e9f\u5f03\uff0c\u5f85Electron\u4fee\u590d`session.loadExtension`\u7684\u95ee\u9898\u540e\u53ef\u4ee5\u66f4\u6362\u6389\u6b64\u65b9\u6cd5\u3002\n\n\u5982\u679c\u89c9\u5f97\u624b\u52a8\u627e\u63d2\u4ef6\u6dfb\u52a0\u7684\u65b9\u5f0f\u8fc7\u4e8e\u9ebb\u70e6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528[electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)\u8fd9\u4e2a\u5e93\u6765\u8fdb\u884c\u6269\u5c55\u7ba1\u7406\u3002\n \n## 3. \u76f8\u5173\u6587\u6863\n- [devtools-extension](https://www.electronjs.org/docs/tutorial/devtools-extension)\n- [session#load-extension](https://www.electronjs.org/docs/api/session#sesloadextensionpath)\n- [Extensions don't work with file:// protocol since 9.0.0](https://github.com/electron/electron/issues/24011)\n"].join("")},471:function(n,e,o){n.exports=o.p+"static/media/debug_main_process_in_webstorm.c7c88d35.png"},472:function(n,e,o){n.exports=o.p+"static/media/inspect_main_process_in_chrome.13772d93.png"},473:function(n,e,o){n.exports=o.p+"static/media/quick_start_electron_app.eefc2687.png"}}]);