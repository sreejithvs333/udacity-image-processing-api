import path from "path";
import fsPromises from 'fs/promises';
import { RequestQuery } from "./types";
import * as sharp from '../utilities/sharp';
// Check if file exist
const checkIfExist = async (filePath: string) => {
    try {
        await fsPromises.access(filePath);
        return true;
    } catch(error){
        return false;
    }
}

const getImagePath = async (query: RequestQuery) => {
    let fileFullPath: string;
    
    if(query.fileName){
        fileFullPath = path.resolve(__dirname, `./../assets/images/full/${query.fileName}.jpg`);
        
        //checking if resized image is requested
        if(query.width && query.height){
            let fileName = `${query.fileName}x${query.width}x${query.height}.jpg`;
            let fileThumbPath = path.resolve(__dirname, `./../assets/images/thumb/${fileName}`);
            if(await checkIfExist(fileThumbPath)) {
                return fileThumbPath;
            } else {
                return await sharp.imageResizeAndSave(query);
            }
        }
        
    } else {
        throw new Error("Input file missing");
    }
    try {
        await checkIfExist(fileFullPath);
        return fileFullPath;
    } catch (err) {
        if(err instanceof Error)
            return err.message;
        return String(err);
    }
}

export {getImagePath, checkIfExist}