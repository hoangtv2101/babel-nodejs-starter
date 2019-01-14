```
{
  "name": "babel-nodejs-starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-plugin-module-resolver": "^3.1.1",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^1.18.9",
    "parallelshell": "^3.0.2"
  },
  "scripts": {
    "watch-nodejs": "babel src -d dist -w",
    "dev": "nodemon dist/index.js --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```