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
    description: String,
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    upper_page: {
        type: Schema.ObjectId,
        ref: 'Page'
    },
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
    }).populate('owner', 'name username').exec(cb);
};

mongoose.model('Page', PageSchema);
