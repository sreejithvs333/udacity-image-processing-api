import sharp from "sharp";
import fsPromises from 'fs/promises';
import path from 'path';

const imageResize = async(fileName: string = '')=>{
    const imagePath = path.resolve(__dirname, `./../assets/images/${fileName}.jpg`);
    const pathPromise = await fsPromises.readFile(imagePath)
    .then(data=>{
        return imagePath;
    });
    return pathPromise;
}

export {imageResize}