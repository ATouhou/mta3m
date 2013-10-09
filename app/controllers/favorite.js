var collection = Alloy.Collections.item;
var isFavorite = false ;
collection.fetch({
	
	query: {
		statement: 'SELECT * FROM item WHERE isFavorite = ?',
		params: [isFavorite]
	}
	
});
