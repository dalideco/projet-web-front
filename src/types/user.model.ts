import Role from 'src/enums/role.enum';

export class User {
  constructor(public id: number, public email: string, public role: Role) {}
}
