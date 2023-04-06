import path from "path";
import fsPromises from 'fs/promises';
import { RequestQuery } from "./types";

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
    let filePath: string;
    if(query.fileName){
        filePath = path.resolve(__dirname, `./../assets/images/${query.fileName}.jpg`);
    } else {
        throw new Error("Filename must be given as query param");
    }
    try {
        await checkIfExist(filePath);
        return filePath;
    } catch (err) {
        if(err instanceof Error)
            return err.message;
        return String(err);
    }
}

export {getImagePath}