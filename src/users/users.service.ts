import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';

@Injectable()
export class UsersService {
    callAll(users: User[], name: string): User[] {
        return users.filter(_ => _.name === name);
    }

    callUserById(users: User[], id: number) {
        return users.find(_ => _.id === Number(id));
    }

    createUser(body: CreateUserDto): User {
        return {id: Date.now(), ...body}
    }
}
