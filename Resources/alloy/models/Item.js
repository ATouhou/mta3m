exports.definition = {
    config: {
        columns: {
            name: "text",
            image: "text",
            phoneNumbers: "text",
            longitude: "real",
            latitude: "real",
            isFavorite: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "item"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
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