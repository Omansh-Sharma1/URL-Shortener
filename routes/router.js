import express from 'express';
import urlController from '../controllers/url.js'; // import the default export
import connectToDatabase from '../routes/dbconnect.js';
const router = express.Router();
import Url from '../models/models.js';

connectToDatabase();

// Route to render the home page
router.get('/', (req, res) => {
    res.render('../public/index.ejs', { title: 'Home Page' });
});

// Route to handle URL shortening
router.post('/shorten', urlController.shortenUrl);

// Route to handle redirection from shortened URL
router.get('/:shortId', async (req, res) => {
    try {
        const { shortId } = req.params;

        // Find the URL by shortId
        const url = await Url.findOne({ shortId });

        if (url) {
            // Redirect to the original URL
            res.redirect(url.redirectUrl);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
