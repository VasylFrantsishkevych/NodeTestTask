const { Router } = require('express');
const { positionController } = require('../controllers');

const positionRouter = Router();

positionRouter.get(
    '/',
    positionController.getAllPosition
);

positionRouter.post(
    '/',
    positionController.createPosition
);

module.exports = positionRouter;