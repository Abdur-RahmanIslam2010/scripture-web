import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/home.ts';
import quranRoutes from './routes/quran.ts';
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/quran', quranRoutes);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`### BACKEND ### Server running at http://localhost:${PORT}`);
});
