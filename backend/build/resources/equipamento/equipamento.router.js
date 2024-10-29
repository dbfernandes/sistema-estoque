"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipamento_controller_1 = __importDefault(require("./equipamento.controller"));
const router = (0, express_1.Router)();
const equipamento_schema_1 = __importDefault(require("./equipamento.schema"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const isAdmin_1 = __importDefault(require("../../middlewares/isAdmin"));
router.get('/', equipamento_controller_1.default.index);
router.post('/', isAdmin_1.default, (0, validate_1.default)(equipamento_schema_1.default), equipamento_controller_1.default.create);
router.get('/:id', equipamento_controller_1.default.read);
router.put('/:id', isAdmin_1.default, (0, validate_1.default)(equipamento_schema_1.default), equipamento_controller_1.default.update);
router.delete('/:id', isAdmin_1.default, equipamento_controller_1.default.remove);
exports.default = router;
