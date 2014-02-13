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
        type: Number,
        ref: 'Group'
    }],
    use_yn: Boolean
});

/**
 * Validations
 */
ProjectSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

mongoose.model('Project', ProjectSchema);
