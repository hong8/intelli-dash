'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Component Schema
 */
var ComponentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    upper_container: String,
    type: String,
    styles: String,
    interact_yn: Boolean,
    gather_yn: Boolean
});

/**
 * Validations
 */
ComponentSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
ComponentSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('type').exec(cb);
};

mongoose.model('Component', ComponentSchema);
