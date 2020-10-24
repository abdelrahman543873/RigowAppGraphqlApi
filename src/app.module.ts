import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    UserModule,
    ProfileModule,
    BusinessModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'odoo',
      password: 'vindiesel3',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
