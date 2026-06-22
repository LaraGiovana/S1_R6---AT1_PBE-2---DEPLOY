import e from "express";
import 'dotenv/config';
import routes from './routes/routes.js';
import { initializeDatabase } from "./configs/database.js";

const app = e();

app.use(e.json());
app.use('/', routes);

app.use(
    "/uploads/images",
    e.static("uploads/images")
);

initializeDatabase().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
    });
}).catch((err) => {
    console.error("Erro ao inicializar o banco de dados:", err);
});
