const { positionService } = require("../services");
const { apiError } = require("../errors");
const { statusCode } = require("../constants");

module.exports = {
    isPositionExist: (from = 'params') => async (req, res, next) => {
        try {
            const { positionId } = req[from];

            const position = await positionService.getPositionById(positionId);

            if (!position) {
                return next(new apiError('User with this id is not exist', statusCode.NOT_FOUND));
            }

            req.position = position;

            next();
        } catch (e) {
            next(e);
        }
    },

    validPositionBodyForUpdate: async (req, res, next) => {
        try {
            const { japaneseRequired } = req.body

            if (japaneseRequired !== 'japaneseRequired') {
                return next(new apiError('Body is not valid', statusCode.BAD_REQUEST));
            }

            next();
        } catch (e) {
            next(e)
        }
    }
}