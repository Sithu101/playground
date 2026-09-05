import express from 'express';
import movieRoute from './routes/movieRoute.js';
import ticketRoute from './routes/ticketRoute.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/movies', movieRoute);
app.use('/api/tickets', ticketRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Movies route: http://localhost:${PORT}/movies`);
    console.log(`Tickets route: http://localhost:${PORT}/api/tickets`);
});