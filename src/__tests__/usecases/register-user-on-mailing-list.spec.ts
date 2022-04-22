import { UserData } from "../../usecases/user-data";

describe("UseCase > Register user on mailing list", () => {
  it("must be add user with complete data to mailing list", async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);

    const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
      repo
    );

    const name = "name";
    const email = "email@email.com";

    const response = await usecase.registerUserOnMailingList({
      name,
      email,
    });

    const user = await repo.findUserByEmail(email);

    expect(user.name).toBe(name);
  });
});
