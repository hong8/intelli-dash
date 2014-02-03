'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Gathering Schema
 */
var GatheringSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    type: String,
    meta: String,
    keys: [],
    filters: [],
    components: [{
        type: Schema.ObjectId,
        ref: 'Components'
    }],
    store_yn: Boolean,
    intelligence_yn: Boolean
});

/**
 * Validations
 */
GatheringSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
GatheringSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('components.component').exec(cb);
};

mongoose.model('Gathering', GatheringSchema);
