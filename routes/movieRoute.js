import express from 'express';
import { movies } from '../data/movie.js';

const router = express.Router();

router.get('/', (req, res)=> {
    res.json(movies)
})

router.get('/:id', (req, res)=> {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    if (!movie) {
       return res.status(404).json({ message: 'Movie not found' });
    } else {
        res.json({data: movie});
    }
})

export default router;