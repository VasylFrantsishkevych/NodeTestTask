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

    getPositionById: async (req, res, next) => {
        try {
            const { position } = req;

            res.status(statusCode.OK).json(position)
        } catch (e) {
            next(e);
        }
    },

    createPosition: async (req, res, next) => {
        try {
            const setNewPosition = await positionService.createPosition(req.body);

            res.status(statusCode.CREATE).json(setNewPosition);
        } catch (e) {
            next(e)
        }
    },

    updatePositionById: async (req, res, next) => {
        try {
            const { positionId } = req.params;
            const { japaneseRequired } = req.body;

            const position = await positionService.updatePositionById(positionId, japaneseRequired);

            res.status(statusCode.OK).json(position);
        } catch (e) {
            next(e);
        }
    },
}