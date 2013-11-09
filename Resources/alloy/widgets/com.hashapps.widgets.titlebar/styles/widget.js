function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.hashapps.widgets.titlebar/" + s : s.substring(0, index) + "/com.hashapps.widgets.titlebar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

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
    isId: true,
    priority: 100000.0027,
    key: "lblTitle",
    style: {
        font: Alloy.Globals.customFont,
        color: "white",
        width: "60%",
        textAlign: "center",
        top: "25%"
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "background",
    style: {
        width: Ti.UI.FILL,
        backgroundImage: "/images/header.png",
        height: "14%",
        textAlign: "center",
        top: 0,
        backgroundColor: "white",
        title: {
            top: "25%"
        }
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "imgLogo",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0031,
    key: "rightNavButton",
    style: {
        right: "2%",
        top: "7%",
        title: "next",
        height: "60%",
        width: "12%",
        backgroundImage: "/images/btn_menu_icon_normal.png",
        backgroundSelectedImage: "/images/btn_menu_icon_pressed.png",
        visible: false,
        font: {
            fontSize: 12,
            fontFamily: Alloy.Globals.customFont
        }
    }
}, {
    isId: true,
    priority: 100000.0032,
    key: "leftNavButton",
    style: {
        left: "2%",
        height: "60%",
        width: "17%",
        top: "7%",
        title: "ﺭﺟﻮﻉ",
        visible: true,
        font: {
            fontSize: 12,
            fontFamily: Alloy.Globals.customFont
        }
    }
}, {
    isId: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 100011.0029,
    key: "lblTitle",
    style: {
        color: "black",
        width: "60%",
        textAlign: "center"
    }
}, {
    isId: true,
    priority: 100101.0033,
    key: "leftNavButton",
    style: {
        visible: false
    }
} ];