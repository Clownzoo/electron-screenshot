const { BrowserWindow, app } = require('electron');
class WinManager {
  constructor() {
    this.init();
  }

  init() {
    const pages = JSON.parse(process.env.config).pages;
    for(const item of pages) {
      if (item.enter) {
        const win = new BrowserWindow({
          width: item.width,
          height: item.height,
        })
        win.loadURL(item.url);
        break;
      }
    }
  }
};
const winManager = new WinManager();
module.exports = winManager;