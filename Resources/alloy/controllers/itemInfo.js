function Controller() {
    function favorites() {
        var ctrl = Alloy.createController("favorite");
        ctrl.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.itemInfo = Ti.UI.createWindow({
        backgroundColor: "white",
        modal: false,
        layout: "vertical",
        id: "itemInfo"
    });
    $.__views.itemInfo && $.addTopLevelView($.__views.itemInfo);
    $.__views.header = Alloy.createWidget("com.hashapps.widgets.titlebar", "widget", {
        width: Ti.UI.FILL,
        height: "10%",
        id: "header",
        __parentSymbol: $.__views.itemInfo
    });
    $.__views.header.setParent($.__views.itemInfo);
    $.__views.mid = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "mid"
    });
    $.__views.itemInfo.add($.__views.mid);
    $.__views.nums = Ti.UI.createView({
        left: 0,
        width: "50%",
        height: Ti.UI.FILL,
        backgroundColor: "black",
        layout: "vertical",
        id: "nums"
    });
    $.__views.mid.add($.__views.nums);
    $.__views.number1 = Ti.UI.createLabel({
        color: "white",
        top: 10,
        id: "number1"
    });
    $.__views.nums.add($.__views.number1);
    $.__views.number2 = Ti.UI.createLabel({
        color: "white",
        id: "number2"
    });
    $.__views.nums.add($.__views.number2);
    $.__views.number3 = Ti.UI.createLabel({
        color: "white",
        id: "number3"
    });
    $.__views.nums.add($.__views.number3);
    $.__views.desc = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        backgroundColor: "yellow",
        id: "desc"
    });
    $.__views.mid.add($.__views.desc);
    $.__views.phone = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        text: "ارقام الاتصال",
        id: "phone"
    });
    $.__views.desc.add($.__views.phone);
    $.__views.wsalny = Ti.UI.createButton({
        width: "80%",
        bottom: 10,
        title: "وصلنى",
        id: "wsalny"
    });
    $.__views.desc.add($.__views.wsalny);
    favorites ? $.__views.wsalny.addEventListener("click", favorites) : __defers["$.__views.wsalny!click!favorites"] = true;
    var __alloyId38 = [];
    $.__views.mapView = Ti.Map.createView({
        bottom: 5,
        height: "50%",
        width: Ti.UI.FILL,
        annotations: __alloyId38,
        id: "mapView",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.itemInfo.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var values = args.model;
    $.header.title.text = values.get("name");
    var nums = values.get("phoneNumbers");
    var ArrayNums = nums.split(",");
    $.number1.text = ArrayNums[0];
    $.number2.text = ArrayNums[1];
    $.number3.text = ArrayNums[2];
    __defers["$.__views.wsalny!click!favorites"] && $.__views.wsalny.addEventListener("click", favorites);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;