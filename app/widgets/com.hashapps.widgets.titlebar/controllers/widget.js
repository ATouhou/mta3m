var args = arguments[0]||{};
_.extend($.background, args);

_.extend($.lblTitle, args.title || {} );
_.extend($.rightNavButton, args.rightNavButton || {} );
_.extend($.leftNavButton, args.leftNavButton || {} );
_.extend($.imgLogo, args.imgLogo || {} );

function doClick(e) {  
    Alloy.Globals.back && Alloy.Globals.back();
}


exports.leftNavButton = $.leftNavButton;
exports.rightNavButton = $.rightNavButton;
exports.title = $.lblTitle;

exports.init = function(win){
	$.lblTitle.text = win.title;
	
	setTimeout(function(){
		$.lblTitle.text = win.title;
	}, 100);
}

$.background.setHeight(0.07*Titanium.Platform.displayCaps.platformHeight);
$.background.setWidth(1*Titanium.Platform.displayCaps.platformWidth);



