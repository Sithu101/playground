import express from "express";
import { tickets } from "../data/ticket.js";
import { movies } from "../data/movie.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ data: tickets, success: true, total: tickets.length })
})

router.post('/buy', (req, res) => {
    const { customerName, movieId, quantity } = req.body;

    if (!customerName || !movieId || !quantity) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const movieExists = movies.find(m => m.id === movieId);
    if (!movieExists) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    const totalPrice = movieExists.price * quantity;

    const newTicket = {
        ticketId: tickets.length ? tickets[tickets.length - 1].ticketId + 1 : 1,

        customerName,
        movieTitle: movieExists.name,
        showTime: movieExists.time,
        quantity,
        totalPrice
    }
    tickets.push(newTicket);
    res.status(201).json({ data: newTicket, success: true });
})



export default router;