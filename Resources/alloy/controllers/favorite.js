function Controller() {
    function __alloyId17() {
        var opts = __alloyId17.opts || {};
        var models = __alloyId16.models;
        var len = models.length;
        var __alloyId11 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = {};
            var __alloyId15 = {
                template: "mt3m",
                name: {
                    text: "undefined" != typeof __alloyId13.__transform["name"] ? __alloyId13.__transform["name"] : __alloyId13.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId13.__transform["image"] ? __alloyId13.__transform["image"] : __alloyId13.get("image")
                }
            };
            __alloyId11.push(__alloyId15);
        }
        opts.animation ? $.__views.section.setItems(__alloyId11, opts.animation) : $.__views.section.setItems(__alloyId11);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favorite";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("item");
    $.__views.favorite = Ti.UI.createWindow({
        backgroundColor: "white",
        modal: false,
        layout: "vertical",
        id: "favorite"
    });
    $.__views.favorite && $.addTopLevelView($.__views.favorite);
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
        width: Ti.UI.FILL,
        height: "10%",
        id: "header",
        __parentSymbol: $.__views.favorite
    });
    $.__views.header.setParent($.__views.favorite);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "80%",
        backgroundColor: "black",
        id: "mid"
    });
    $.__views.favorite.add($.__views.mid);
    var __alloyId2 = {};
    var __alloyId4 = [];
    var __alloyId6 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId7 = [];
            var __alloyId8 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    right: 0,
                    width: 40,
                    height: 40,
                    bindId: "image"
                }
            };
            __alloyId7.push(__alloyId8);
            var __alloyId9 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    color: "#000",
                    bindId: "name"
                }
            };
            __alloyId7.push(__alloyId9);
            return __alloyId7;
        }(),
        properties: {}
    };
    __alloyId4.push(__alloyId6);
    var __alloyId3 = {
        properties: {
            layout: "horizontal",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            right: 10,
            name: "mt3m"
        },
        childTemplates: __alloyId4
    };
    __alloyId2["mt3m"] = __alloyId3;
    var __alloyId10 = [];
    var __alloyId12 = [];
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId10.push($.__views.section);
    $.__views.section.items = __alloyId12;
    var __alloyId16 = Alloy.Collections["item"] || item;
    __alloyId16.on("fetch destroy change add remove reset", __alloyId17);
    $.__views.list = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "green",
        textAlign: "right",
        sections: __alloyId10,
        templates: __alloyId2,
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
    $.__views.favorite.add($.__views.Ads);
    exports.destroy = function() {
        __alloyId16.off("fetch destroy change add remove reset", __alloyId17);
    };
    _.extend($, $.__views);
    var collection = Alloy.Collections.item;
    var isFavorite = false;
    collection.fetch({
        query: {
            statement: "SELECT * FROM item WHERE isFavorite = ?",
            params: [ isFavorite ]
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;