function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("item");
    $.__views.itemInfo = Ti.UI.createWindow({
        backgroundColor: "#fff",
        modal: false,
        layout: "vertical",
        backgroundImage: "/images/background.png",
        id: "itemInfo"
    });
    $.__views.itemInfo && $.addTopLevelView($.__views.itemInfo);
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
        width: Ti.UI.FILL,
        height: "14%",
        title: {
            top: "25%"
        },
        rightNavButton: {
            height: "60%",
            width: "12%",
            top: "7%",
            title: "",
            visible: true
        },
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
        __parentSymbol: $.__views.itemInfo
    });
    $.__views.header.setParent($.__views.itemInfo);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "mid"
    });
    $.__views.itemInfo.add($.__views.mid);
    $.__views.info = Ti.UI.createView({
        width: "60%",
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "info"
    });
    $.__views.mid.add($.__views.info);
    $.__views.imgAndTit = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "40%",
        id: "imgAndTit"
    });
    $.__views.info.add($.__views.imgAndTit);
    $.__views.mt3mTitle = Ti.UI.createLabel({
        color: "#000",
        id: "mt3mTitle"
    });
    $.__views.imgAndTit.add($.__views.mt3mTitle);
    $.__views.mt3mPic = Ti.UI.createImageView({
        right: "5%",
        width: "25%",
        height: "75%",
        backgroundImage: "/images/default_icon.png",
        id: "mt3mPic"
    });
    $.__views.imgAndTit.add($.__views.mt3mPic);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        top: 3,
        backgroundImage: "/images/phone_box.png",
        width: "90%",
        height: "17%",
        id: "__alloyId37"
    });
    $.__views.info.add($.__views.__alloyId37);
    $.__views.number1 = Ti.UI.createLabel({
        color: "black",
        top: 10,
        text: "012345679",
        id: "number1"
    });
    $.__views.__alloyId37.add($.__views.number1);
    $.__views.__alloyId38 = Ti.UI.createImageView({
        top: 3,
        backgroundImage: "/images/phone_box.png",
        width: "90%",
        height: "17%",
        id: "__alloyId38"
    });
    $.__views.info.add($.__views.__alloyId38);
    $.__views.number2 = Ti.UI.createLabel({
        color: "black",
        text: "012345679",
        id: "number2"
    });
    $.__views.__alloyId38.add($.__views.number2);
    $.__views.__alloyId39 = Ti.UI.createImageView({
        top: 3,
        backgroundImage: "/images/phone_box.png",
        width: "90%",
        height: "17%",
        id: "__alloyId39"
    });
    $.__views.info.add($.__views.__alloyId39);
    $.__views.number3 = Ti.UI.createLabel({
        color: "black",
        text: "012345679",
        id: "number3"
    });
    $.__views.__alloyId39.add($.__views.number3);
    $.__views.wsalny = Ti.UI.createButton({
        width: "40%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/btn_waslny_normal.png",
        backgroundSelectedImage: "/images/btn_waslny_pressed.png",
        id: "wsalny"
    });
    $.__views.mid.add($.__views.wsalny);
    var __alloyId40 = [];
    $.__views.mapView = Ti.Map.createView({
        bottom: 0,
        height: "60%",
        width: Ti.UI.FILL,
        annotations: __alloyId40,
        id: "mapView",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.itemInfo.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.fireEvent("app:update");
    var args = arguments[0] || {};
    var values = args.model;
    args.index;
    var nums = values.get("phoneNumbers");
    var ArrayNums = nums.split(",");
    var isFavorite = values.get("isFavorite");
    values.get("name");
    $.header.title.text = values.get("name");
    $.mt3mTitle.text = values.get("name");
    $.mt3mPic.setImage(values.get("image"));
    $.number1.text = ArrayNums[0];
    $.number2.text = ArrayNums[1];
    $.number3.text = ArrayNums[2];
    Ti.API.info("Item is Favorite = " + isFavorite);
    $.header.rightNavButton.backgroundImage = true === values.get("isFavorite") ? "/images/btn_fav_pressed.png" : "/images/btn_fav_normal.png";
    $.header.rightNavButton.addEventListener("click", function() {
        if (true === values.get("isFavorite")) {
            values.set({
                isFavorite: false
            });
            values.save();
            $.header.rightNavButton.backgroundImage = "/images/btn_fav_pressed.png";
            Ti.App.fireEvent("app:update");
        } else {
            values.set({
                isFavorite: true
            });
            values.save();
            $.header.rightNavButton.backgroundImage = "/images/btn_fav_normal.png";
            Ti.App.fireEvent("app:update");
        }
    });
    $.header.leftNavButton.addEventListener("click", function() {
        $.itemInfo.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;