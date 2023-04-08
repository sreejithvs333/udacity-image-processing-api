import path from "path";
import { checkIfExist, getImagePath } from "../utilities/image-utils";
import { RequestQuery } from "../utilities/types";

describe("unit testing", () => {
  const filePath = path.resolve(__dirname, "../assets/images/full/fjord.jpg");

  const querySuccess: RequestQuery = {
    fileName: "palmtunnel",
    width: "200",
    height: "200"
  };

  beforeAll(() => {
    console.log(
      `\n The initial values are: \n\n querySuccess = ${JSON.stringify(querySuccess)}, \n\n filePath = ${filePath}`
    );
  });

  it("checkIfExist(filePath) should return true", async () => {
    const doesExist = await checkIfExist(filePath);
    expect(doesExist).toBe(true);
  });

  it("getImagePath(querySuccess) to be truthy", async()=> {
    const value = await getImagePath(querySuccess);
    expect(value).toBeTruthy();
  });
});
