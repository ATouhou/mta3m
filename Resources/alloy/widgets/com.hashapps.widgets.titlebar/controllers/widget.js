function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.hashapps.widgets.titlebar/" + s : s.substring(0, index) + "/com.hashapps.widgets.titlebar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function doClick() {
        Alloy.Globals.back && Alloy.Globals.back();
    }
    new (require("alloy/widget"))("com.hashapps.widgets.titlebar");
    this.__widgetId = "com.hashapps.widgets.titlebar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.background = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundImage: "/images/header.png",
        height: "14%",
        textAlign: "center",
        top: 0,
        backgroundColor: "white",
        title: {
            top: "25%"
        },
        id: "background"
    });
    $.__views.background && $.addTopLevelView($.__views.background);
    $.__views.lblTitle = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "white",
            font: Alloy.Globals.customFont,
            width: "60%",
            textAlign: "center",
            top: "25%"
        });
        Alloy.isTablet && _.extend(o, {
            color: "black",
            width: "60%",
            textAlign: "center"
        });
        _.extend(o, {
            text: "View Title",
            id: "lblTitle"
        });
        return o;
    }());
    $.__views.background.add($.__views.lblTitle);
    $.__views.imgLogo = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "imgLogo"
    });
    $.__views.background.add($.__views.imgLogo);
    $.__views.rightNavButton = Ti.UI.createButton({
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
        },
        id: "rightNavButton"
    });
    $.__views.background.add($.__views.rightNavButton);
    $.__views.leftNavButton = Ti.UI.createButton({
        left: "2%",
        height: "60%",
        width: "17%",
        top: "7%",
        title: "ﺭﺟﻮﻉ",
        visible: false,
        font: {
            fontSize: 12,
            fontFamily: Alloy.Globals.customFont
        },
        id: "leftNavButton"
    });
    $.__views.background.add($.__views.leftNavButton);
    doClick ? $.__views.leftNavButton.addEventListener("click", doClick) : __defers["$.__views.leftNavButton!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    _.extend($.background, args);
    _.extend($.lblTitle, args.title || {});
    _.extend($.rightNavButton, args.rightNavButton || {});
    _.extend($.leftNavButton, args.leftNavButton || {});
    _.extend($.imgLogo, args.imgLogo || {});
    exports.leftNavButton = $.leftNavButton;
    exports.rightNavButton = $.rightNavButton;
    exports.title = $.lblTitle;
    exports.init = function(win) {
        $.lblTitle.text = win.title;
        setTimeout(function() {
            $.lblTitle.text = win.title;
        }, 100);
    };
    $.background.setWidth(1 * Titanium.Platform.displayCaps.platformWidth);
    __defers["$.__views.leftNavButton!click!doClick"] && $.__views.leftNavButton.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;