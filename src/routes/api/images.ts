import express from 'express';
import * as ImageUtils from '../../utilities/image-utils';
import * as CustomTypes from './../../utilities/types'
const images = express.Router();

// returns the requested file
images.get('/', async (req: express.Request, res: express.Response) => {
    const query: CustomTypes.RequestQuery = req.query;
    try{
        const imagePath = await ImageUtils.getImagePath(query);
        return res.status(200).sendFile(imagePath);
    } catch(err){
        if (err instanceof Error)
            return res.status(400).send(err.message);
        return res.status(400).send(String(err));
    }
});

export default images;
