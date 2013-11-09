
var args = arguments[0] || {};
var collectn = $.items;
var isFavorite = true;
$.header.title.text = 'المفضلة';
collectn.fetch({
	// query: 'SELECT * FROM model WHERE columns
	query : {
		statement : 'SELECT * FROM item WHERE isFavorite = ?',
		params : [isFavorite]
	}
});
function deleteItem(e) {
	var index = e.itemIndex;
	var thisModel = collectn.at(index);
	//thisModel.set('isFavorite', false);
	thisModel.set({
			isFavorite : false
			});
	thisModel.save();
	collectn.remove(thisModel);
	e.cancelBubble = true;
	Ti.App.fireEvent('app:update');
};

function onClose () {
	Ti.App.fireEvent('app:update');
}

function openItemInfo(e) {

	var index = e.itemIndex;
	//alert(index);
	var itemValues = collectn.at(index);
	// alert(index);
	var ct = Alloy.createController('itemInfo', {
		model : itemValues,
		index : index ,
		collection : collectn
	});
	// alert(itemValues.get('name'));
	ct.getView().open();
}

$.header.leftNavButton.addEventListener('click', function() {
	$.favorite.close();
});