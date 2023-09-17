import { IsInt } from "class-validator";

export class CreatePropertyDto {
  @IsInt()
  upvote: number;

  @IsInt()
  downvote: number;
}
