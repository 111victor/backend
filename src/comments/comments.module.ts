import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comments } from "./entities/comment.entity";
import { CommentsController } from "./controllers/comments.controller";
import { CommentsService } from "./services/comments.service";

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
