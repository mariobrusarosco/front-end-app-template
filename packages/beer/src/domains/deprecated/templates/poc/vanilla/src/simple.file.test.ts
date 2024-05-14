import simpleFile from "./simple-file";

const singMock = jest.spyOn(simpleFile, "sing");

describe("When singing", () => {
  it("welds a song into your brain", () => {
    simpleFile.sing();

    expect(singMock).toHaveBeenCalled();
  });
});
