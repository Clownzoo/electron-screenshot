const path = require('path');
const { BrowserWindow, ipcMain } = require('electron');
const window = {
  frame: false,
  backgroundColor: '#000',
  icon: path.resolve(__dirname, '../static/icon/icon.ico'),
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true,
  },
};
class WinManager {
  constructor() {
    this.winIdMap = {};
    this.init();
    this.ipcRendererOn();
  }

  init() {
    const pages = JSON.parse(process.env.config).pages;
    // 多页面
    for(const item of pages) {
      if (item.enter) {
        const win = new BrowserWindow({
          ...window,
          title: item.title,
          width: item.width,
          height: item.height,
        })
        this.winIdMap[item.id] = win.id;
        win.loadURL(item.url);
        break;
      }
    }
  }

  ipcRendererOn() {
    ipcMain.on('window-minimize', this.minimize.bind(this));
  }

  minimize(event, id) {
    const win = BrowserWindow.fromId(id);
    win.minimize();
  }
};
const winManager = new WinManager();
module.exports = winManager;