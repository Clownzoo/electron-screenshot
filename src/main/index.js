const path = require('path');
const os = require('os');
const fs = require('fs');
const { BrowserView, app } = require('electron');
const ChildProcess = require('child_process');

class Main {
  constructor() {
    this.platform = os.platform();
    this.readConfig();
    this.init();
  }

  readConfig() {
    const { variable } = process.env;
    const data = fs.readFileSync(variable);
    process.env.config = data;

  }

  init() {
    app.whenReady().then(() => {
    }).then(() => {
      require('./modules/win-manager');
    });
  }
}
const main = new Main();
module.exports = main;
