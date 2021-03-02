const { app, BrowserWindow } = require('electron');
const installExtension = require('electron-devtools-installer');
const fs = require('fs');
const path = require('path');

app.whenReady().then(() => {
  installExtension(VUEJS_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}).then(()=>{
  require('./src/main/index.js');
})