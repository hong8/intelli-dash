'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Container Schema
 */
var ContainerSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    upper_container: String,
    type: String,
    styles: String
});

/**
 * Validations
 */
ContainerSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
ContainerSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('type').exec(cb);
};

mongoose.model('Container', ContainerSchema);
