import { Email } from "../../entities/Email";

describe("Entities > Email validation", () => {
  it("must be not accept null strings", () => {
    const email = null;
    expect(Email.validate(email)).toBeFalsy();
  });

  it("must be not accept empty strings", () => {
    const email = "";
    expect(Email.validate(email)).toBeFalsy();
  });

  it("must be accept valid email", () => {
    const email = "email@email.com";
    expect(Email.validate(email)).toBeTruthy();
  });

  it("must be not accept local part larger than 64 chars", () => {
    const email = "e".repeat(65) + "@email.com";
    expect(Email.validate(email)).toBeFalsy();
  });

  it("must be not accept strings larger than 320 chars", () => {
    const email = "e".repeat(64) + "@" + "d".repeat(300) + ".com";
    expect(Email.validate(email)).toBeFalsy();
  });

  it("must be not accept domain larger than 255 chars", () => {
    const email = "e".repeat(64) + "@" + "d".repeat(256) + ".com";
    expect(Email.validate(email)).toBeFalsy();
  });
});
