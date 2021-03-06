import Router from '@api/utils/Router';
import { Book } from '@api/models';

const router = new Router();

router.get('/', (req, res) => {
    res.json({ isWorking: false });
});

router.get('/books', async (req, res) => {
    const books = await Book.findAll();

    return res.json(books.map((book) => book.toJSON()));
});

export default router;
