const { Router } = require('express');
const { positionController } = require('../controllers');
const {positionMiddleware} = require("../middlewares");

const positionRouter = Router();

positionRouter.get(
    '/',
    positionController.getAllPosition
);

positionRouter.get(
    '/:positionId',
    positionMiddleware.isPositionExist(),
    positionController.getPositionById
);

positionRouter.post(
    '/',
    positionController.createPosition
);

positionRouter.patch(
    '/:positionId',
    positionMiddleware.isPositionExist(),
    positionMiddleware.validPositionBodyForUpdate,
    positionController.updatePositionById,
)

module.exports = positionRouter;