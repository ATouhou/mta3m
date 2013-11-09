var collc = Alloy.Collections.item;

//Ti.App.fireEvent('app:update');
$.header.leftNavButton.addEventListener('click', function() {
	var fav = Alloy.createController('favorite');
	fav.getView().open();
});


collc.fetch();
Ti.App.addEventListener('app:update', function(argument) {
	collc.fetch();
});

function openItemInfo(e) {

	var index = e.itemIndex;
	//alert(index);
	var itemValues = collc.at(index);
	// alert(index);
	
	var ct = Alloy.createController('itemInfo', {
		model : itemValues,
		index : index ,
		collection : collc
	});
	// alert(itemValues.get('name'));
	ct.getView().open();
}
