const { app, BrowserWindow, ipcMain, WindowManager, dialog } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

ipcMain.on("sync-msg", (event, data) =>
{
  dialog.showMessageBox("electron main");
  // event.sender.send("asynchronous-reply", "electron main数据")
  win.webContents.send("asynchronous-reply", "electron main数据")
  // IpcMain.send(win, "asynchronous-reply", "C#数据");
});

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


