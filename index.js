import express from 'express';
const app = express();
import router from './routes/router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename);       // Get the directory path

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', router);

app.listen(3000, () => {
    console.log('Server started on port 3000')
})