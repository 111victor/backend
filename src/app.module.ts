import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PropertiesModule } from "./properties/properties.module";
import { Properties } from "./properties/entities/property.entity";
import { CommentsModule } from "./comments/comments.module";
import { Comments } from "./comments/entities/comment.entity";
import { getDbConfig } from "./database/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: getDbConfig().db.host,
      port: getDbConfig().db.port,
      password: getDbConfig().db.password,
      username: getDbConfig().db.username,
      entities: [Properties, Comments],
      database: getDbConfig().db.database,
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
