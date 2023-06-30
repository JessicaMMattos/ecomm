import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import YAML from 'yaml';
import fs from 'fs';

const file  = fs.readFileSync('./swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
routes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
