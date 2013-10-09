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
        backgroundColor: "white",
        top: 0,
        id: "background"
    });
    $.__views.background && $.addTopLevelView($.__views.background);
    $.__views.lblTitle = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "black",
            font: Alloy.Globals.h1,
            width: "60%",
            textAlign: "center"
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
        width: 36,
        height: 36,
        right: "2.5%",
        id: "imgLogo"
    });
    $.__views.background.add($.__views.imgLogo);
    $.__views.rightNavButton = Ti.UI.createButton({
        right: "2%",
        title: "next",
        height: "51.3%",
        width: "9%",
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
        width: "10%",
        title: "ﺭﺟﻮﻉ",
        height: "65%",
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
    $.background.setHeight(.07 * Titanium.Platform.displayCaps.platformHeight);
    $.background.setWidth(1 * Titanium.Platform.displayCaps.platformWidth);
    __defers["$.__views.leftNavButton!click!doClick"] && $.__views.leftNavButton.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;