const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('./dist/index.html')

    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

if (typeof document !== 'undefined') {
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
}   
