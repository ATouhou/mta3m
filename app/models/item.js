exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "image": "text",
		    "phoneNumbers": "text",
		    "isFavorite": "boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "item",
			idAttribute: 'id',
			db_file: "/db.sql"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			defaults: {
			    "isFavorite":  false
			  }
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