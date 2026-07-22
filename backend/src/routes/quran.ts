import express from 'express';

const router = express.Router();
const url = 'https://api.alquran.cloud/v1';

router.get(
    '/:reference',
    async (req: express.Request, res: express.Response) => {
        const reference = req.params.reference;

        if (!reference || typeof reference !== 'string') {
            return res.status(404).json({ error: "Verse reference not found." });
        }

        const [chapter, verse] = reference.split(":");
        if (!chapter) {
            return res.status(404).json({ error: "Verse or chapter not found." });
        }
        if (!verse) {
            const response = await fetch(`${url}/surah/${chapter}`);
            const data = await response.json();
            console.log(data);
            return res.status(200).send(data);
        } else {
            const verseNumber = parseInt(verse);
            const response = await fetch(`${url}/surah/${chapter}?offset=${verseNumber - 1}&limit=1`);
            const data = await response.json();
            console.log(data);
            return res.status(200).send(data);
        }


    }
);

export default router;