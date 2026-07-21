import express from 'express';

const router = express.Router();
const url = 'https://api.alquran.cloud/v1';

router.get(
    '/verse/:verseReference',
    async (req: express.Request, res: express.Response) => {
        const verseReference = req.params.verseReference;

        if (!verseReference || typeof verseReference !== 'string') {
            return res.status(404).json({ error: "Verse reference not found." });
        }

        const [chapter, verse] = verseReference.split(":");
        if (!verse || !chapter) {
            return res.status(404).json({ error: "Verse or chapter not found." });
        }
        const verseNumber = parseInt(verse);

        const response = await fetch(`${url}/surah/${chapter}?offset=${verseNumber - 1}&limit=1`);
        const data = await response.json();
        console.log(data);
        res.status(200).send(data);
    }
);

export default router;