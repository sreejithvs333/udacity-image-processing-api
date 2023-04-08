import path from "path";
import fsPromises from "fs/promises";
import { RequestQuery } from "./types";
import * as sharp from "../utilities/sharp";
// Check if file exist
const checkIfExist = async (filePath: string) => {
  try {
    const value = await fsPromises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

const getImagePath = async (query: RequestQuery) => {
  let fileFullPath: string;

  if (query.fileName) {
    fileFullPath = path.resolve(
      __dirname,
      `../assets/images/full/${query.fileName}.jpg`
    );

    //checking if resized image is requested
    if (query.width && query.height) {
      const fileName = `${query.fileName}x${query.width}x${query.height}.jpg`;
      const fileThumbPath = path.resolve(
        __dirname,
        `../assets/images/thumb/${fileName}`
      );
      if (await checkIfExist(fileThumbPath)) {
        return fileThumbPath;
      } else {
        return await sharp.imageResizeAndSave(query);
      }
    } else if (query.width && !query.height) {
      throw new Error("height missing");
    } else if (!query.width && query.height) {
      throw new Error("width missing");
    }
  } else {
    throw new Error("Filename missing");
  }
  try {
    if(await checkIfExist(fileFullPath)){
      return fileFullPath;
    } else {
      throw new Error("File not found");
    }
    
  } catch (err) {
    throw err;
  }
};

export { getImagePath, checkIfExist };
