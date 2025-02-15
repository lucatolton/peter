// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, dialog } = require('electron')
const path = require('node:path')

let closeCount = 49
let stage = 5

let closeNow = false

let boxCount = 0

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload.js')
        }
    })

    // load the html of the app.
    mainWindow.loadFile(`views/st${stage}.html`)

    if (stage === 5 && closeCount === 50) {
        dialog.showMessageBox({ title: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̩̠̈́', message: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r' })
        setTimeout(() => {
            closeNow = true
            mainWindow.close()
        }, 2000);

        setInterval(() => {
            boxCount++
            dialog.showMessageBox({ title: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̩̠̈́', message: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r' })
            /*if (boxCount > 10) {
                setInterval(() => {
                    dialog.showMessageBox({ title: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̩̠̈́', message: 'ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r̴̗̭̫̱̟͚̳̯͉̜̱̘͇̈́ṕ̶̼͓̆͘̚e̵̦̯̜̺̹̐͛̑̓̈́̈́͗͗̑̄͜t̵̮̟̬̮̬̘̼͈̩̫̲̭͓̎̃̈́͒͗̑̄́̽̕͜ę̷̨̦͔̹͖͈̟̻̣̠̹̉͗̎͑͛͗̑͊͝͝r' })
                }, 100)
            }*/
        }, 1000);
    }

    // remove menubar completely
    // instead, autoHideMenuBar: true
    // mainWindow.removeMenu()

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    closeCount++
    if (closeCount === 10) stage = 2
    if (closeCount === 20) stage = 3
    if (closeCount === 30) stage = 4
    if (closeCount === 40) stage = 5

    console.log(closeCount, stage)

    if (!closeNow) createWindow();
    //if (process.platform !== 'darwin') app.quit()
})




// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.