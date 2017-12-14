import Greeter from "./Greeter";

test("Greeter.greet", () => {
  const greeter = new Greeter("test");
  expect(greeter.greet()).toBe("test");
});
