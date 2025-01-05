import { nanoid } from 'nanoid';
import Url from '../models/models.js';

async function shortenUrl(req, res) {
    try {
        console.log("ShortenUrl function called");

        const body = req.body;
        if (!body.url) {
            return res.status(400).send('URL is required');
        }

        const existingUrl = await Url.findOne({ redirectUrl: body.url });

        if (existingUrl) {
            return res.render('index', { shortId: existingUrl.shortId });
        } else {
            const shortId = nanoid(8);
            await Url.create({ shortId, redirectUrl: body.url });
            return res.render('index', { shortId });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
export default {
    shortenUrl
}
 
