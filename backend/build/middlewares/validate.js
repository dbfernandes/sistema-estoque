"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error)
            res
                .status(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY)
                .json({ error: error.details });
        else
            next();
    };
};
exports.default = validate;
