"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projeto_controller_1 = __importDefault(require("./projeto.controller"));
const isAdmin_1 = __importDefault(require("middlewares/isAdmin"));
const router = (0, express_1.Router)();
router.get('/', projeto_controller_1.default.list);
router.post('/', isAdmin_1.default, projeto_controller_1.default.create);
router.get('/:id', projeto_controller_1.default.getById);
router.delete('/:id', isAdmin_1.default, projeto_controller_1.default.remove);
exports.default = router;
