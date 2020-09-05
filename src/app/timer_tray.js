const electron = require('electron');
const { Tray, Menu, app } = electron;

class TimerTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);

        this.mainWindow = mainWindow;

        this.setToolTip('Timer App');
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));

    }

    onRightClick(event, bounds){
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit()
            }
        ]);
        this.popUpContextMenu(menuConfig);
    }

    onClick(event, bounds){
        const { x, y } = bounds;
        const { width, height } = this.mainWindow.getBounds();

        if(this.mainWindow.isVisible()){
            this.mainWindow.hide();
        } else {
            this.mainWindow.show();
            this.mainWindow.setBounds({
                x: x - width / 2,
                y,
                width,
                height,
            })
        }
    }
}

module.exports = TimerTray;
