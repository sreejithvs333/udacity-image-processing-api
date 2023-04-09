import path from "path";
import { checkIfExist, getImagePath } from "../utilities/image-utils";
import { RequestQuery } from "../utilities/types";
import supertest from "supertest";
import app from "..";
import fsPromises from "fs/promises";
import fs from 'fs';
import * as sharp from '../utilities/sharp';

describe("unit testing", () => {
  const filePath = path.resolve(__dirname, "../assets/images/full/fjord.jpg");
  const querySuccess: RequestQuery = {
    fileName: "palmtunnel",
    width: "200",
    height: "200"
  };

  beforeAll(() => {
    console.log(
      `\n The initial values are: \n\n querySuccess = ${JSON.stringify(
        querySuccess
      )}, \n\n filePath = ${filePath}`
    );
  });

  it("checkIfExist(filePath) should return true", async () => {
    const doesExist = await checkIfExist(filePath);
    expect(doesExist).toBe(true);
  });

  it("getImagePath(querySuccess) to be truthy", async () => {
    const value = await getImagePath(querySuccess);
    expect(value).toBeTruthy();
  });

  it("imageResizeAndSave() should create a resized file", async ()=> {
    const fileThumbPath = path.resolve(__dirname, "../assets/images/thumb/palmtunnelx200x200.jpg")
    try {
      // delete the file if already exist
      await fsPromises.access(path.resolve(__dirname, fileThumbPath));
      fs.unlinkSync(fileThumbPath);
      await sharp.imageResizeAndSave(querySuccess);
    } catch (error) {
      await sharp.imageResizeAndSave(querySuccess);
    }
    
    expect(await fsPromises.access(fileThumbPath)).not.toBeInstanceOf(Error);
    
  });
});

describe("Endpoint test", () => {
  const request = supertest(app);
  it("GET api/images should return 200 status", async () => {
    const response = await request.get("/api/images?fileName=palmtunnel");
    expect(response.status).toBe(200);
  });
});
