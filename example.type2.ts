
export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
}

export interface UserProfile {
  id: string;
  email: string;
  roles: ('admin' | 'user')[];
}

// Extending the interface for domain-specific architecture
export interface IUserRepository extends IRepository<UserProfile> {
  findByEmail(email: string): Promise<UserProfile | null>;
  bulkUpdateRoles(ids: string[], roles: UserProfile['roles']): Promise<void>;
}

// Implementing the interface contract inside a concrete class
export class MongoUserRepository implements IUserRepository {
  async findById(id: string): Promise<UserProfile | null> {
    return { id, email: 'senior@domain.com', roles: ['user'] };
  }

  async save(entity: UserProfile): Promise<UserProfile> {
    return entity;
  }

  async findByEmail(email: string): Promise<UserProfile | null> {
    return { id: 'usr_99', email, roles: ['user'] };
  }

  async bulkUpdateRoles(ids: string[], roles: UserProfile['roles']): Promise<void> {
    console.log(`Writing roles update to Mongo collection for: ${ids.join(', ')}`);
  }
}

// Injecting the interface dependency into a business-logic service
class UserService {
  constructor(private userRepo: IUserRepository) { }

  async grandAdminAccess(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error("User not found");

    await this.userRepo.bulkUpdateRoles([user.id], ['admin', 'user']);
  }
}

// Wire-up implementation
const repo = new MongoUserRepository();
const service = new UserService(repo);
service.grandAdminAccess("usr_123");



// // 临时伪造一个内存数据库，只需要满足 IUserRepository 接口结构即可
class MockUserRepository implements IUserRepository {
  async findById(id: string): Promise<UserProfile> { return { id: id, email: 'test@me.com', roles: ['user'] }; }
  async save(e: any) { return e; }
  async findByEmail() { return null; }
  async bulkUpdateRoles() { /* 啥也不干，不连数据库 */ }
}

// // 单测时这样用，不依赖任何真实数据库，1毫秒内运行完！

async function runTest() {
  const mockRepo = new MockUserRepository();
  const user = await mockRepo.findById('2');
  console.log(user);
}
runTest()
