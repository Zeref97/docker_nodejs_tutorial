'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    deviceName: String,
    deviceId: String,
    type: String,
    zone: String,
    state: [{
        deviceState: String,
        timerState: String
    }],
    permission: [String],
    action: String,
    createdBy: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});

DeviceSchema.pre('save', function (next) {
    var now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('Device', DeviceSchema);
