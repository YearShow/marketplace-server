import {
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	Put,
	Req,
	Res,
	Param,
	ParseIntPipe,
	Body
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from '@entities/user/user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { send } from 'process';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Get('/')
	async getAllUsers(
		@Res() res: Response
	) {
		const users = await this.userService.getAllUsers()

		return res.send({
			status: "ok",
			data: users
		})
	}

	@Get('/:id')
	async getUser(
		@Param('id', ParseIntPipe) id: number,
		@Res() res: Response
	) {
		const userData = await this.userService.getUserData(id);

		return res.send({
			status: "ok",
			data: userData
		})
	}

	@Post('/')
	// @UseInterceptors(FileInterceptor(''))
	async createUser(@Req() req: Request, @Res() res: Response) {
		await this.userService.createUser(req.body)
		return res.send({ status: 'ok' })
	}

	@Put('/:id')
	async updateUser(
		@Param('id', ParseIntPipe) id: number,
		@Body() body: UpdateUserDto,
		@Res() res: Response
	) {
		this.userService.updateUserData(id, body)
		return res.send({ status: "ok" })
	}

	@Delete('/:id')
	async deleteUser(
		@Param('id', ParseIntPipe) id: number,
		@Res() res: Response
	) {
		this.userService.deleteUser(id)
		return res.send({ status: "ok" })
	}
}
