const { app, BrowserWindow } = require("electron");
const server = require("./server/app.js");

let mainWindow;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createWindow() {
  await sleep(1000);
  mainWindow = new BrowserWindow({
    width: 920,
    height: 640,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:8888");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
