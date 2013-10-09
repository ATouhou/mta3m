exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "image": "text",
		    "phoneNumbers": "text",
		    "longitude": "real",
		    "latitude": "real",
		    "isFavorite": "boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "item"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};