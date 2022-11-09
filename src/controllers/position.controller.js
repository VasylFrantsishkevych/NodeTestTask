const { positionService } = require('../services');
const { statusCode } = require('../constants');

module.exports = {
    getAllPosition: async (req, res, next) => {
        try {
            const positions = await positionService.getAllPosition();

            res.json(positions);
        } catch (e) {
            next(e)
        }
    },

    createPosition: async (req, res, next) => {
        try {
            const setNewPosition = await positionService.createPosition(req.body);

            res.status(statusCode.CREATE).json(setNewPosition);
        } catch (e) {
            next(e)
        }
    }
}