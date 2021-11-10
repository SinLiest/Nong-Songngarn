const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    serverId: { type: Number, require: true, unique: true},
    jobId: { type: Number, require: true},
    jobName: { type: String, require: true},
    jobDeadlineDay: { type: Number, require: true},
});

const model = mongoose.model("jobModel", schema);

module.exports = model;