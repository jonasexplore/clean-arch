import { InMemoryUserRepository } from "../../../usecases/repositories/in-memory-user-repository";
import { UserData } from "../../../usecases/user-data";

describe("Repositories > In memory user repository", () => {
  it("must be return null if user is not found", async () => {
    const users: UserData[] = [];
    const repo = new InMemoryUserRepository(users);
    const user = await repo.findUserByEmail("email@email.com");
    expect(user).toBeNull();
  });
});
