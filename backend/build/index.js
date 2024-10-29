"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const uuid_1 = require("uuid");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const swagger_output_json_1 = __importDefault(require("./swagger-output.json"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
//import setLangCookie from './middlewares/setLangCookie';
const accessLoggerMiddleware_1 = __importDefault(require("./middlewares/accessLoggerMiddleware"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3344;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: 'http://localhost:4466' }));
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//app.use(setLangCookie);
app.use((0, express_session_1.default)({
    genid: (req) => (0, uuid_1.v4)(),
    secret: 'Hi9Cf#mK9Dm#@SmA76#4MP2sm@18',
    resave: true,
    saveUninitialized: true,
}));
app.use((0, accessLoggerMiddleware_1.default)({ format: 'simples' }));
app.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
app.use(router_1.default);
app.use('/img', express_1.default.static(`${__dirname}/../public/img`));
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
