module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextField",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isApi: true,
    priority: 1000.0008,
    key: "fill",
    style: {
        width: "100%",
        height: "100%"
    }
}, {
    isApi: true,
    priority: 1101.0001,
    key: "Label",
    style: {
        color: "#000"
    }
}, {
    isApi: true,
    priority: 1101.0003000000002,
    key: "Window",
    style: {
        modal: false
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "horizontal",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "vertical",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "halfWidth",
    style: {
        width: "50%"
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "halfHeight",
    style: {
        height: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "size",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "sizeHeight",
    style: {
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "sizeWidth",
    style: {
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "h1",
    style: {
        font: {
            fontSize: 20,
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "h2",
    style: {
        font: {
            fontSize: 18,
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "pdLeft10",
    style: {
        left: 10
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "pdLeft0",
    style: {
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "pdRight10",
    style: {
        right: 10
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "pdRight0",
    style: {
        right: 0
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "pdTop0",
    style: {
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "pdTop5",
    style: {
        top: 5
    }
}, {
    isClass: true,
    priority: 10000.0022,
    key: "pdTop10",
    style: {
        top: 10
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "alignRight",
    style: {
        textAlign: "right"
    }
}, {
    isClass: true,
    priority: 10000.0024,
    key: "border",
    style: {
        borderWidth: 1
    }
}, {
    isClass: true,
    priority: 10000.0046,
    key: "container",
    style: {
        backgroundImage: "/images/background.png",
        layout: "vertical",
        exitOnClose: true
    }
}, {
    isClass: true,
    priority: 10000.0049,
    key: "dfltImg",
    style: {
        backgroundImage: "/images/default_icon.png"
    }
}, {
    isClass: true,
    priority: 10000.0052,
    key: "arrow",
    style: {
        backgroundImage: "/images/arrow.png",
        left: "5%",
        width: "6%",
        height: "45%"
    }
}, {
    isId: true,
    priority: 100000.0047,
    key: "header",
    style: {
        width: Ti.UI.FILL,
        title: {
            text: "مطاعم مصر",
            color: "white"
        },
        font: {
            fontSize: 12,
            fontFamily: Alloy.Globals.customFont,
            color: "white"
        },
        leftNavButton: {
            height: "60%",
            width: "12%",
            top: "7%",
            title: "",
            visible: true,
            backgroundImage: "/images/btn_fav_normal.png",
            backgroundSelectedImage: "/images/btn_fav_pressed.png"
        }
    }
}, {
    isId: true,
    priority: 100000.0048,
    key: "mid",
    style: {
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "80%"
    }
}, {
    isId: true,
    priority: 100000.005,
    key: "row",
    style: {
        backgroundImage: "/images/list.png"
    }
}, {
    isId: true,
    priority: 100000.0051,
    key: "search",
    style: {
        left: 0,
        width: "5%",
        height: Ti.UI.FILL,
        backgroundColor: "red"
    }
}, {
    isId: true,
    priority: 100000.0053,
    key: "list",
    style: {
        width: "95%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/background.png",
        textAlign: "right"
    }
}, {
    isId: true,
    priority: 100000.0054,
    key: "Ads",
    style: {
        bottom: 0,
        width: Ti.UI.FILL,
        height: "15%",
        backgroundColor: "blue"
    }
}, {
    isId: true,
    priority: 100000.0055,
    key: "item",
    style: {
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10
    }
}, {
    isId: true,
    priority: 100000.0056,
    key: "image",
    style: {
        right: 0,
        width: 50,
        height: 50
    }
}, {
    isId: true,
    priority: 100000.0057,
    key: "itemTilte",
    style: {
        color: "black",
        right: 5,
        textAlign: "right"
    }
} ];