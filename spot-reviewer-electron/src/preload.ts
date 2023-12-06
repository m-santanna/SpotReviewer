// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron"

const api = {

    onMapperOpened: (callback: (image: string) => void) => {
        ipcRenderer.on('mapper-opened', (_, image) => {
            callback(image)
        })
    },

    onMapperClosed: (callback: () => void) => {
        ipcRenderer.on('mapper-closed', () => {
            callback()
        })
    },
    onCreateSpotTriggered: (callback: () => void) => {
        ipcRenderer.on('create-spot-triggered', () => {
            callback()
        })
    },
    
    navbarMessage: (message: string) => {
        ipcRenderer.send('navbar-message', message)
    },
    
    removeAllListeners: () => {
        ipcRenderer.removeAllListeners('image-opened')
        ipcRenderer.removeAllListeners('image-removed')
        ipcRenderer.removeAllListeners('create-spot-triggered')
    },

} as const

contextBridge.exposeInMainWorld('api', api)

export type Api = typeof api