'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Store Schema
 */
var StoreSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    gathering_id: String,
    filters: [],
    data: []
});

/**
 * Validations
 */
StoreSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
StoreSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('components.component').exec(cb);
};

mongoose.model('Store', StoreSchema);
