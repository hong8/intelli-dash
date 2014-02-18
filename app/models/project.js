'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Project Schema
 */
var ProjectSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        unique: true
    },
    category: Number,
    description: String,
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    groups: [{
        type: Schema.ObjectId,
        ref: 'Page'
    }],
    pages: [{
        type: Schema.ObjectId,
        ref: 'Page'
    }],
    use_yn: Boolean
});

/**
 * Validations
 */
ProjectSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
ProjectSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('owner', 'name username').exec(cb);
};

mongoose.model('Project', ProjectSchema);
