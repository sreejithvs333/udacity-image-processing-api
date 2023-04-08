import path from "path";
import fsPromises from "fs/promises";
import { RequestQuery } from "./types";
import * as sharp from "../utilities/sharp";
// Check if file exist
const checkIfExist = async (filePath: string) => {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

const getImagePath = async (query: RequestQuery) => {
  if (!query.fileName) {
    throw new Error("Filename missing.");
  }

  const fileFullPath = path.resolve(
    __dirname,
    `../assets/images/full/${query.fileName}.jpg`
  );

  if (!(await checkIfExist(fileFullPath))) {
    throw new Error("No such file exists.");
  }

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
  } else {
    // no resizing required. Returing full image.
    return fileFullPath;
  }
};

export { getImagePath };
