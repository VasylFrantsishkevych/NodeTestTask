const { Position } = require('../schemas');

module.exports = {
    getAllPosition(filter = {}) {
        return Position.find(filter)
    },

    getPositionById(id) {
        return Position.findById(id)
    },

    createPosition(positionObject) {
        return Position.create(positionObject)
    },

    updatePositionById(positionId, japaneseRequired) {
        return Position.findOneAndUpdate({ _id: positionId }, {japaneseRequired}, { new: true });
    },
}