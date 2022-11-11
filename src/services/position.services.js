const { Position } = require('../schemas');

module.exports = {
    getAllPosition(filter = {}) {
        return Position.find(filter)
    },

    getPositionById(id) {
        return Position.findById(id)
    },

    filterByLevel(filterObj) {
        return Position.find(filterObj);
    },

    createPosition(positionObject) {
        return Position.create(positionObject)
    },

    updatePositionById(positionId, japaneseRequired) {
        return Position.findOneAndUpdate({ _id: positionId }, {japaneseRequired}, { new: true });
    },

    deletePositionById(positionId) {
        return Position.deleteOne({ _id: positionId });
    }
}