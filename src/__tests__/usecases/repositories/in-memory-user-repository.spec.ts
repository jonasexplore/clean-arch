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

  it("must be return all users", async () => {
    const users: UserData[] = [
      { email: "email1@gmail.com", name: "name1" },
      { email: "email2@gmail.com", name: "name2" },
      { email: "email3@gmail.com", name: "name3" },
    ];

    const repo = new InMemoryUserRepository(users);

    const listedUsers = await repo.findAllUsers();

    expect(listedUsers.length).toBe(3);
  });
});
