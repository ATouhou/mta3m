function openInfo(argument) {
	var ctrl = Alloy.createController('itemInfo');
	ctrl.getView().open();
}

var collc = Alloy.Collections.item;
collc.fetch();
var model;

for (var i = 0; i < 10; i++) {
	model = Alloy.createModel('item', {

		name : "مطعم" + i,
		image : "/images/video_thumb.png",
		phoneNumbers : "010123456,011123456,012123456",
		isFavorite : false
	});
	model.save();
};
	collc.fetch();
alert(collc.length);
function isFav (argument) {
  //make is favorite = true
}

function openItemInfo(e) {
	
  var index = e.itemIndex;
  var itemValues = collc.at(index);
  // alert(index);
  var ct = Alloy.createController('itemInfo' , {
  	model : itemValues
  });
 // alert(itemValues.get('name'));
  ct.getView().open();
}
