const httpStatus = require('http-status');
const foobarService = require('../services/foobar.service');
import catchAsync from '../../helper/request/catchAsync'
const { abortIf } = require('../utils/request/ApiResponder');
const { successResponse } = require('../utils/request/ApiResponder');

const getAll = catchAsync(async (req, res, next) => {
    const list = await foobarService.getPaginated(req);
    abortIf(!list, httpStatus.NOT_FOUND, 'Foobar not found');
    return successResponse(res, list);
});

module.exports = {
    getAll,
};
