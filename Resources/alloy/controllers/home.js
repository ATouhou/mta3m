function Controller() {
    function __alloyId36() {
        var opts = __alloyId36.opts || {};
        var models = __alloyId35.models;
        var len = models.length;
        var __alloyId30 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId32 = models[i];
            __alloyId32.__transform = {};
            var __alloyId34 = {
                template: "mt3m",
                name: {
                    text: "undefined" != typeof __alloyId32.__transform["name"] ? __alloyId32.__transform["name"] : __alloyId32.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId32.__transform["image"] ? __alloyId32.__transform["image"] : __alloyId32.get("image")
                }
            };
            __alloyId30.push(__alloyId34);
        }
        opts.animation ? $.__views.section.setItems(__alloyId30, opts.animation) : $.__views.section.setItems(__alloyId30);
    }
    function isFav() {}
    function openItemInfo(e) {
        var index = e.itemIndex;
        var itemValues = collc.at(index);
        var ct = Alloy.createController("itemInfo", {
            model: itemValues
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
        backgroundColor: "white",
        modal: false,
        layout: "vertical",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
        width: Ti.UI.FILL,
        height: "10%",
        id: "header",
        __parentSymbol: $.__views.home
    });
    $.__views.header.setParent($.__views.home);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "80%",
        backgroundColor: "black",
        id: "mid"
    });
    $.__views.home.add($.__views.mid);
    $.__views.search = Ti.UI.createScrollView({
        left: 0,
        width: "10%",
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "search"
    });
    $.__views.mid.add($.__views.search);
    var __alloyId20 = {};
    var __alloyId22 = [];
    var __alloyId24 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId25 = [];
            var __alloyId26 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    right: 0,
                    width: 50,
                    height: 50,
                    bindId: "image"
                }
            };
            __alloyId25.push(__alloyId26);
            var __alloyId27 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    color: "#000",
                    bindId: "name"
                }
            };
            __alloyId25.push(__alloyId27);
            var __alloyId28 = {
                type: "Ti.UI.Button",
                properties: {
                    left: 0,
                    height: Ti.UI.FILL,
                    width: 35,
                    title: "+"
                },
                events: {
                    click: isFav
                }
            };
            __alloyId25.push(__alloyId28);
            return __alloyId25;
        }(),
        properties: {},
        events: {
            click: openItemInfo
        }
    };
    __alloyId22.push(__alloyId24);
    var __alloyId21 = {
        properties: {
            layout: "horizontal",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            right: 10,
            name: "mt3m"
        },
        childTemplates: __alloyId22
    };
    __alloyId20["mt3m"] = __alloyId21;
    var __alloyId29 = [];
    var __alloyId31 = [];
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId29.push($.__views.section);
    $.__views.section.items = __alloyId31;
    var __alloyId35 = Alloy.Collections["item"] || item;
    __alloyId35.on("fetch destroy change add remove reset", __alloyId36);
    $.__views.list = Ti.UI.createListView({
        width: "90%",
        height: Ti.UI.FILL,
        backgroundColor: "green",
        textAlign: "right",
        sections: __alloyId29,
        templates: __alloyId20,
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
        __alloyId35.off("fetch destroy change add remove reset", __alloyId36);
    };
    _.extend($, $.__views);
    var collc = Alloy.Collections.item;
    collc.fetch();
    var model;
    for (var i = 0; 10 > i; i++) {
        model = Alloy.createModel("item", {
            name: "مطعم" + i,
            image: "/images/video_thumb.png",
            phoneNumbers: "010123456,011123456,012123456",
            isFavorite: false
        });
        model.save();
    }
    collc.fetch();
    alert(collc.length);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;