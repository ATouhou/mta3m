exports.definition = {
    config: {
        columns: {
            name: "text",
            image: "text",
            phoneNumbers: "text",
            isFavorite: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "item",
            idAttribute: "id",
            db_file: "/db.sql"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            defaults: {
                isFavorite: false
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("item", exports.definition, []);

collection = Alloy.C("item", exports.definition, model);

exports.Model = model;

exports.Collection = collection;