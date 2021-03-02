const { app, Menu, Tray } = require('electron');
const path = require('path');
class TrayManager {
  constructor() {
    this.tray = null;
    this.init();
  }

  init() {
    const config = JSON.parse(process.env.config);
    this.tray = new Tray(path.resolve(__dirname, '../static/icon/icon.ico'));
    this.tray.setToolTip(`SCREENSHOT ${config.version}`);
    this.buildMenu(config.debug);
  }

  buildMenu(isDebug) {
    const contextMenu = [
      { label: '退出', click: () => { app.quit(); } },
    ];
    if (isDebug) {
      contextMenu.unshift({
        label: '开发',
        submenu: [
          { label: 'HOME_DEVTOOLS' },
          { label: 'CURRENT_PAGE_DEVTOOLS' },
        ],
      })
    }
    this.tray.setContextMenu(Menu.buildFromTemplate(contextMenu));
  }
};
const trayManager = new TrayManager();
module.exports = trayManager;