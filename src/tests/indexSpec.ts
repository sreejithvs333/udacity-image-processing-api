import path from "path";
import { checkIfExist } from "../utilities/image-utils";
import { RequestQuery } from "../utilities/types";

describe("unit testing", () => {
  const filePath = path.resolve(__dirname, "../assets/images/full/fjord.jpg");

  const query: RequestQuery = {
    fileName: "palmtunnel.jpg",
    width: "200",
    height: "200"
  };

  beforeAll(() => {
    console.log(
      `The initial values are: \n query =" ${JSON.stringify(query)}, \n filePath = ${filePath}`
    );
  });

  it("checkIfExist(filePath) should return true", async () => {
    const doesExist = await checkIfExist(filePath);
    expect(doesExist).toBe(true);
  });
});
