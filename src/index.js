import express from 'express';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
// Middleware para habilitar CORS
app.use(cors({
  origin: 'https://landingcrm-production.up.railway.app',
  credentials: true,
}));
app.use(cookieParser())
// Rutas
app.use('/api', contactRoutes, authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});