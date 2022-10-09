import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		NestTypeOrmModule.forRoot({
			type: 'postgres',
			// host: process.env.POSTGRES_HOST,
			// port: Number(process.env.POSTGRES_PORT),
			// username: process.env.POSTGRES_USERNAME,
			// password: process.env.POSTGRES_PASSWORD,
			// database: process.env.POSTGRES_DATABASE,
			host: '45.84.225.192',
			port: 5432,
			username: 'nest_test',
			password: 'nest_test',
			database: 'nest_test',
			synchronize: true,
			entities: ['dist/entities/**/*.entity.js'],
			// migrations: ['dist/db/migrations/**/*.js'],
			// cli: {migrationsDir: 'src/db/migrations'}
		}),
	],
})
export class TypeOrmModule { }
