import { InMemoryUserRepository } from "../../../usecases/repositories/in-memory-user-repository";
import { UserData } from "../../../usecases/user-data";

describe("Repositories > In memory user repository", () => {
  it("must be return null if user is not found", async () => {
    const users: UserData[] = [];

    const repo = new InMemoryUserRepository(users);

    const user = await repo.findUserByEmail("email@email.com");

    expect(user).toBeNull();
  });

  it("must be create a new user", async () => {
    const users: UserData[] = [];

    const repo = new InMemoryUserRepository(users);

    await repo.add({
      email: "email@email.com",
      name: "name",
    });

    const user = await repo.findUserByEmail("email@email.com");

    expect(user?.name).toBe("name");
    expect(user?.email).toBe("email@email.com");
  });
});
