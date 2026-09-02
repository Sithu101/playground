import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" }
]

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
})

app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }

    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author
    }
    books.push(newBook);
    res.status(201).json({ message: "Book created successfully", book: newBook });
})
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    books.splice(bookIndex, 1);
    res.status(200).json({ message: "Book deleted successfully" });
})

app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running on http://localhost:${PORT}`);
});