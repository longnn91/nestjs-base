import { Controller, Get, Param, Post, Body, Query, NotFoundException } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    private users: User[] = [{ id: 0, name: 'Shen Long' }, {id: 1, name: 'Shen Chang'}];
    
    @ApiOkResponse({ type: User, isArray: true})
    @ApiQuery({ name: 'name', required: true })
    @Get()
    getUsers(@Query('name') name: string): User[] {
        return this.UsersService.callAll(this.users, name);
    }

    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id: string): User {
        const user = this.UsersService.callUserById(this.users, Number(id));
        if(!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @ApiCreatedResponse({type: User})
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.UsersService.createUser(body);
    }
}
