import { BrowserWindow, dialog } from "electron"
import { readFile } from 'fs/promises'

export const openImageDialog = async (browserWindow: BrowserWindow) => {
    const result = await dialog.showOpenDialog(browserWindow, {
        properties: ['openFile'],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'jpeg'] }
        ]
    })
    return result
}

export const readImage = async (browserWindow: BrowserWindow, path: string) => {
    const image = await readFile(path, { encoding: 'base64' })
    browserWindow.webContents.send('image-opened', image)
}