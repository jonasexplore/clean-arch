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
});
