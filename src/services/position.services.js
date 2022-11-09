const { Position } = require('../schemas');

module.exports = {
    getAllPosition(filter = {}) {
        return Position.find(filter)
    },

    createPosition(positionObject) {
        return Position.create(positionObject)
    }
}