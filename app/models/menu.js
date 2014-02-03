'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Menu Schema
 */
var MenuSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    leaf_yn: Boolean,
    view_name: String,
    upper_menu: String,
    use_yn: Boolean
});

/**
 * Validations
 */
MenuSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
MenuSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('view_name').exec(cb);
};

mongoose.model('Menu', MenuSchema);
