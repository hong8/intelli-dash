'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Layout Schema
 */
var LayoutSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    type: String,
    styles: String,
    meta: String
});

/**
 * Validations
 */
LayoutSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
LayoutSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('type').exec(cb);
};

mongoose.model('Layout', LayoutSchema);
