function Controller() {
    function __alloyId16() {
        var opts = __alloyId16.opts || {};
        var models = __alloyId15.models;
        var len = models.length;
        var __alloyId10 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = {};
            var __alloyId14 = {
                template: "mt3m",
                name: {
                    text: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId12.__transform["image"] ? __alloyId12.__transform["image"] : __alloyId12.get("image")
                }
            };
            __alloyId10.push(__alloyId14);
        }
        opts.animation ? $.__views.section.setItems(__alloyId10, opts.animation) : $.__views.section.setItems(__alloyId10);
    }
    function deleteItem(e) {
        var index = e.itemIndex;
        var thisModel = collectn.at(index);
        thisModel.set({
            isFavorite: false
        });
        thisModel.save();
        collectn.remove(thisModel);
        e.cancelBubble = true;
        Ti.App.fireEvent("app:update");
    }
    function onClose() {
        Ti.App.fireEvent("app:update");
    }
    function openItemInfo(e) {
        var index = e.itemIndex;
        var itemValues = collectn.at(index);
        var ct = Alloy.createController("itemInfo", {
            model: itemValues,
            index: index,
            collection: collectn
        });
        ct.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favorite";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.items = Alloy.createCollection("item");
    $.__views.favorite = Ti.UI.createWindow({
        backgroundColor: "#fff",
        modal: false,
        layout: "vertical",
        backgroundImage: "/images/background.png",
        id: "favorite"
    });
    $.__views.favorite && $.addTopLevelView($.__views.favorite);
    onClose ? $.__views.favorite.addEventListener("close", onClose) : __defers["$.__views.favorite!close!onClose"] = true;
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
        width: Ti.UI.FILL,
        leftNavButton: {
            height: "60%",
            width: "17%",
            top: "7%",
            title: "",
            visible: true,
            backgroundImage: "/images/btn_back_normal.png",
            backgroundSelectedImage: "/images/btn_back_pressed.png"
        },
        id: "header",
        __parentSymbol: $.__views.favorite
    });
    $.__views.header.setParent($.__views.favorite);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "80%",
        id: "mid"
    });
    $.__views.favorite.add($.__views.mid);
    var __alloyId0 = {};
    var __alloyId2 = [];
    var __alloyId3 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId4 = [];
            var __alloyId5 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    right: 0,
                    width: 40,
                    height: 40,
                    bindId: "image"
                }
            };
            __alloyId4.push(__alloyId5);
            var __alloyId6 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    color: "#000",
                    bindId: "name"
                }
            };
            __alloyId4.push(__alloyId6);
            var __alloyId8 = {
                type: "Ti.UI.ImageView",
                properties: {
                    backgroundImage: "/images/btn_delete_normal.png",
                    backgroundSelectedImage: "/images/btn_delete_pressed.png",
                    left: "5%",
                    width: "6%",
                    height: "45%"
                },
                events: {
                    click: deleteItem
                }
            };
            __alloyId4.push(__alloyId8);
            return __alloyId4;
        }(),
        properties: {
            backgroundImage: "/images/list.png"
        },
        events: {
            click: openItemInfo
        }
    };
    __alloyId2.push(__alloyId3);
    var __alloyId1 = {
        properties: {
            layout: "horizontal",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            right: 10,
            name: "mt3m"
        },
        childTemplates: __alloyId2
    };
    __alloyId0["mt3m"] = __alloyId1;
    var __alloyId9 = [];
    var __alloyId11 = [];
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId9.push($.__views.section);
    $.__views.section.items = __alloyId11;
    var __alloyId15 = Alloy.Collections["$.items"] || $.items;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    $.__views.list = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        textAlign: "right",
        sections: __alloyId9,
        templates: __alloyId0,
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
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var collectn = $.items;
    var isFavorite = true;
    $.header.title.text = "المفضلة";
    collectn.fetch({
        query: {
            statement: "SELECT * FROM item WHERE isFavorite = ?",
            params: [ isFavorite ]
        }
    });
    $.header.leftNavButton.addEventListener("click", function() {
        $.favorite.close();
    });
    __defers["$.__views.favorite!close!onClose"] && $.__views.favorite.addEventListener("close", onClose);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;