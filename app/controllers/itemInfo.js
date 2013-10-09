function favorites (argument) {
 var ctrl = Alloy.createController('favorite');
 ctrl.getView().open(); 
}
var args = arguments[0] || {};
var values = args.model;
//alert ("alertvvv");
//var text = valuse.get('name');
$.header.title.text = values.get('name');

var nums = values.get('phoneNumbers');
var ArrayNums = nums.split(",");
$.number1.text = ArrayNums[0];
$.number2.text = ArrayNums[1];
$.number3.text = ArrayNums[2];

