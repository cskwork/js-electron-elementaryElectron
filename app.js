var electron = require('electron')

electron.app.on('ready', function(){
	var mainWindow = new electron.BrowserWindow({
					     width: 600, 
					     height: 800,
					 	 webPreferences: {
					            nodeIntegration: true,
					            enableRemoteModule: true,
					            //worldSafeExecuteJavaScript: true,
					            
					        }
					 	});
	mainWindow.loadURL('file://'+__dirname+'/index.html')
	mainWindow.webContents.openDevTools()

})