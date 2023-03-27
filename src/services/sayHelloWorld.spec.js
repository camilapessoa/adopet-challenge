import sayHello from "./sayHelloWorld.js";

describe("Say Hello test", () => {
  it("Should say Hello World", () => {
    const response = sayHello();

    expect(response).toBe("Hello World!");
  });

  it("Should say Hello Adopet", () => {
    const response = sayHello("Adopet");

    expect(response).toBe("Hello Adopet!");
  });
});
