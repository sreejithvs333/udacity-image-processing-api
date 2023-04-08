import sharp from "sharp";
import path from "path";
import { RequestQuery } from "./types";

const imageResizeAndSave = async (query: RequestQuery) => {
  const fileFullPath = path.resolve(
    __dirname,
    `../assets/images/full/${query.fileName}.jpg`
  );
  const width = parseInt(query.width as string);
  const height = parseInt(query.height as string);
  const fileName = `${query.fileName}x${width}x${height}.jpg`;

  const fileThumbPath = path.resolve(
    __dirname,
    `../assets/images/thumb/${fileName}`
  );
  await sharp(fileFullPath).resize(width, height).toFile(fileThumbPath);
  return fileThumbPath;
};

export { imageResizeAndSave };
