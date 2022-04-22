import { UserRepository } from "../ports/user-repository";
import { UserData } from "../user-data";

export class InMemoryUserRepository implements UserRepository {
  constructor(private repository: UserData[]) {
    this.repository = repository;
  }

  async add(user: UserData): Promise<void> {
    const userExists = await this.exists(user);

    if (!userExists) {
      this.repository.push(user);
    }
  }

  async findUserByEmail(email: string): Promise<UserData> {
    return this.repository.find((user) => user.email === email) ?? null;
  }

  async findAllUsers(): Promise<UserData[]> {
    return this.repository;
  }

  async exists({ email }: UserData): Promise<boolean> {
    const user = await this.findUserByEmail(email);

    return user ? true : false;
  }
}
