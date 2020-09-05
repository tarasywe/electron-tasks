const electron = require('electron');

const { app, BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            width: 300,
            height: 600,
            resizable: false,
            frame: false,
            show: false,
            webPreferences: {
                nodeIntegration: true,
                backgroundThrottling: false,
            },
        });

        this.loadURL(url);

        this.on('blur', this.onBlur.bind(this));
    }

    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;
