'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Interaction Schema
 */
var InteractionSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    source: String,
    behavior: {
        behavior_type: String,
        stored_id: String
    },
    references: [{
        ref_id: String,
        properties: []
    }],
    actions: [{
        target_id: String,
        properties: []
    }]
});

/**
 * Validations
 */
InteractionSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
InteractionSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('behavior', 'behavior_type').exec(cb);
};

mongoose.model('Interaction', InteractionSchema);
