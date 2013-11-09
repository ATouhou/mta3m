function Controller() {
    function __alloyId33() {
        var opts = __alloyId33.opts || {};
        var models = __alloyId32.models;
        var len = models.length;
        var __alloyId27 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId29 = models[i];
            __alloyId29.__transform = {};
            var __alloyId31 = {
                template: "mt3m",
                name: {
                    text: "undefined" != typeof __alloyId29.__transform["name"] ? __alloyId29.__transform["name"] : __alloyId29.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId29.__transform["image"] ? __alloyId29.__transform["image"] : __alloyId29.get("image")
                }
            };
            __alloyId27.push(__alloyId31);
        }
        opts.animation ? $.__views.section.setItems(__alloyId27, opts.animation) : $.__views.section.setItems(__alloyId27);
    }
    function openItemInfo(e) {
        var index = e.itemIndex;
        var itemValues = collc.at(index);
        var ct = Alloy.createController("itemInfo", {
            model: itemValues,
            index: index,
            collection: collc
        });
        ct.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("item");
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#fff",
        modal: false,
        backgroundImage: "/images/background.png",
        layout: "vertical",
        exitOnClose: true,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
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
        },
        id: "header",
        __parentSymbol: $.__views.home
    });
    $.__views.header.setParent($.__views.home);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "80%",
        id: "mid"
    });
    $.__views.home.add($.__views.mid);
    $.__views.search = Ti.UI.createScrollView({
        left: 0,
        width: "5%",
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "search"
    });
    $.__views.mid.add($.__views.search);
    var __alloyId17 = {};
    var __alloyId19 = [];
    var __alloyId20 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId21 = [];
            var __alloyId22 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    backgroundImage: "/images/default_icon.png",
                    right: 0,
                    width: 50,
                    height: 50,
                    bindId: "image"
                }
            };
            __alloyId21.push(__alloyId22);
            var __alloyId23 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    color: "#000",
                    bindId: "name"
                }
            };
            __alloyId21.push(__alloyId23);
            var __alloyId25 = {
                type: "Ti.UI.ImageView",
                properties: {
                    backgroundImage: "/images/arrow.png",
                    left: "5%",
                    width: "6%",
                    height: "45%"
                }
            };
            __alloyId21.push(__alloyId25);
            return __alloyId21;
        }(),
        properties: {
            backgroundImage: "/images/list.png"
        },
        events: {
            click: openItemInfo
        }
    };
    __alloyId19.push(__alloyId20);
    var __alloyId18 = {
        properties: {
            layout: "horizontal",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            right: 10,
            name: "mt3m"
        },
        childTemplates: __alloyId19
    };
    __alloyId17["mt3m"] = __alloyId18;
    var __alloyId26 = [];
    var __alloyId28 = [];
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId26.push($.__views.section);
    $.__views.section.items = __alloyId28;
    var __alloyId32 = Alloy.Collections["item"] || item;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    $.__views.list = Ti.UI.createListView({
        width: "95%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/background.png",
        textAlign: "right",
        sections: __alloyId26,
        templates: __alloyId17,
        id: "list"
    });
    $.__views.mid.add($.__views.list);
    $.__views.Ads = Ti.UI.createView({
        bottom: 0,
        width: Ti.UI.FILL,
        height: "15%",
        backgroundColor: "blue",
        id: "Ads"
    });
    $.__views.home.add($.__views.Ads);
    exports.destroy = function() {
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    var collc = Alloy.Collections.item;
    $.header.leftNavButton.addEventListener("click", function() {
        var fav = Alloy.createController("favorite");
        fav.getView().open();
    });
    collc.fetch();
    Ti.App.addEventListener("app:update", function() {
        collc.fetch();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;