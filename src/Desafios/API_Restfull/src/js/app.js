// para usar o import, incluir o type module no package.json
import express from 'express';
import routes from '../js/index.js';
//atribuindo a função express a variavel app
const app = express();
//inicializa o json no express
app.use(express.json());
routes(app);
export default app;