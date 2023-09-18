import { Injectable, NotFoundException } from "@nestjs/common";

import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { Comments } from "../entities/comment.entity";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const comment = new Comments();
    comment.content = createCommentDto.content;
    comment.property_id = createCommentDto.property_id;

    return this.commentsRepository.save(comment);
  }

  async findAll(property_id: number): Promise<[Comments[], number]> {
    const [comments, count] = await this.commentsRepository.findAndCount({
      where: {
        property_id,
      },
    });

    if (!comments) {
      throw new NotFoundException("Comment not found");
    }

    return [comments, count];
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentsRepository.findOne({
      where: {
        id,
      },
    });

    if (!comment) {
      throw new NotFoundException("Comment not found");
    }

    comment.content = updateCommentDto.content;
    return this.commentsRepository.save(comment);
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
