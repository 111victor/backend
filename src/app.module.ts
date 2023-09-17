import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { UserModule } from './user/user.module';
import { PropertiesModule } from "./properties/properties.module";
import { Properties } from "./properties/entities/property.entity";
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';
import { Comments } from "./comments/entities/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      password: "",
      username: "postgres",
      entities: [Properties, Comments],
      database: "properties",
      synchronize: true,
      logging: true,
    }),
    PropertiesModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
