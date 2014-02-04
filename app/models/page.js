'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Page Schema
 */
var PageSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    view_name: String,
    upper_page: String,
    use_yn: Boolean
});

/**
 * Validations
 */
PageSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
PageSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('view_name').exec(cb);
};

mongoose.model('Page', PageSchema);
