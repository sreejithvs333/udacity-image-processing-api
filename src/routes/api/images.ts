import express from 'express';
import {imageResize} from './../../utilities/sharp'
const images = express.Router();

interface RequestQuery {
    fileName?: string;
    width?: string;
    height?: string;
  }

images.get('/',(req: express.Request, res : express.Response)=>{
    const query: RequestQuery = req.query;
    const image =  imageResize(query.fileName);
    image
    .then(path=>{
        console.log(path);
        res.status(200).sendFile(path);
    })
    .catch(err=>{
        res.status(400).send(err.message);
    })
});

export default images;