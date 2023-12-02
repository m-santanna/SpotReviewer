import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { openImageDialog, readImage } from './functions'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
  }

  mainWindow.webContents.openDevTools({mode: 'detach'})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('navbar-message', async (event, message) => {
  const browserWindow = BrowserWindow.fromWebContents(event.sender)
  if (!browserWindow) return

  if (message === 'open-image') {
      const result = await openImageDialog(browserWindow)
      if (result.canceled) return
      const path = result.filePaths[0]
      readImage(browserWindow, path)
  }
  if (message === 'remove-image') {
      browserWindow.webContents.send('image-removed')
  }
  if (message === 'create-spot') {
      browserWindow.webContents.send('create-spot-triggered')
  }
})