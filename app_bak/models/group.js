'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Group Schema
 */
var GroupSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        unique: true
    },
    description: String,
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    pages: [{
        type: Number,
        ref: 'Page'
    }],
    use_yn: Boolean
});

/**
 * Validations
 */
GroupSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
GroupSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('pages').exec(cb);
};

mongoose.model('Group', GroupSchema);
