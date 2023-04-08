import sharp from "sharp";
import fsPromises from 'fs/promises';
import path from 'path';
import { RequestQuery } from "./types";

const imageResizeAndSave = async(query: RequestQuery)=>{
    let fileFullPath = path.resolve(__dirname, `./../assets/images/full/${query.fileName}.jpg`);
    let width = parseInt(query.width as string);
    let height = parseInt(query.height as string);
    let fileName = `${query.fileName}x${width}x${height}.jpg`;
    
    let fileThumbPath = path.resolve(__dirname, `./../assets/images/thumb/${fileName}`);
    await sharp(fileFullPath).resize(width, height).toFile(fileThumbPath);
    return fileThumbPath;
}   

export {imageResizeAndSave}