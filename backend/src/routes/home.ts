import express from 'express';
const router = express.Router();

router.get(
    '/',
    async (req: express.Request, res: express.Response) => {
        res.status(200).json({ msg: 'Backend root' });
    }
);
export default router;