'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Intelligence Schema
 */
var IntelligenceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    gathering_id: String,
    type: String,
    formula: String
});

/**
 * Validations
 */
IntelligenceSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
IntelligenceSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('typef').exec(cb);
};

mongoose.model('Intelligence', IntelligenceSchema);
