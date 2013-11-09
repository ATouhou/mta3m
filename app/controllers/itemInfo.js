Ti.App.fireEvent('app:update');
var args = arguments[0] || {};
var values = args.model;
var indexItem = args.index;
var nums = values.get('phoneNumbers');
var ArrayNums = nums.split(",");

var isFavorite = values.get('isFavorite');
var itemName = values.get('name');
$.header.title.text = values.get('name');
$.mt3mTitle.text = values.get('name');
$.mt3mPic.setImage(values.get('image'));
$.number1.text = ArrayNums[0];
$.number2.text = ArrayNums[1];
$.number3.text = ArrayNums[2];

Ti.API.info('Item is Favorite = ' + isFavorite);

if (values.get('isFavorite') === true) {
	$.header.rightNavButton.backgroundImage = "/images/btn_fav_pressed.png";
	//$.header.rightNavButton.backgroundSelectedImage = "/images/btn_fav_normal.png";
}else{
	$.header.rightNavButton.backgroundImage = "/images/btn_fav_normal.png";
	//$.header.rightNavButton.backgroundSelectedImage = "/images/btn_fav_pressed.png";	
}


$.header.rightNavButton.addEventListener('click', function() {
	if(values.get('isFavorite') === true){
		values.set({
			isFavorite : false
			});
		values.save();
		$.header.rightNavButton.backgroundImage = "/images/btn_fav_pressed.png";
		//$.header.rightNavButton.backgroundSelectedImage = "/images/btn_fav_normal.png";
	Ti.App.fireEvent('app:update');
	}else{
		values.set({
			isFavorite : true
			});
		values.save();
		$.header.rightNavButton.backgroundImage = "/images/btn_fav_normal.png";
		//$.header.rightNavButton.backgroundSelectedImage = "/images/btn_fav_pressed.png";
	Ti.App.fireEvent('app:update');
	}
	
});

$.header.leftNavButton.addEventListener('click', function() {
	$.itemInfo.close();
});

