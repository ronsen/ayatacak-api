import express from 'express';
import cors from 'cors';
import { randomVerse } from './lib/random-verse.js';
import { translateVerse } from './lib/translate-verse.js';
import { alkitab } from './lib/alkitab.js';

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.get('/', async (req, res) => {
    let translatedVerse = await translateVerse(await randomVerse());
    let verse = await alkitab('tb', translatedVerse);

    res.send(verse);
});

app.get('/v1/tb', async (req, res) => {
    let translatedVerse = await translateVerse(await randomVerse());
    let verse = await alkitab('tb', translatedVerse);

    res.send(verse);
});

app.get('/v1/toba', async (req, res) => {
    let translatedVerse = await translateVerse(await randomVerse());
    let verse = await alkitab('toba', translatedVerse);

    res.send(verse);
});

app.listen(port, () => {
    console.info(`🚀 Server runs at port ${port}`);
});