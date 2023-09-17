import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Properties } from "./entities/property.entity";

export type PaginationOptions = {
  page: number;
  limit: number;
};

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Properties)
    private readonly propertiesRepository: Repository<Properties>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return "This action adds a new property";
  }

  findAll() {
    return `This action returns all properties`;
  }

  async findOne(id: number): Promise<Properties> {
    const property = await this.propertiesRepository.findOne({
      where: {
        id,
      },
    });

    if (!property) {
      throw new NotFoundException("Property not found");
    }

    return property;
  }

  async findAllProperties({
    page = 1,
    limit = 10,
  }: PaginationOptions): Promise<Properties[]> {
    const skip = (page - 1) * limit;
    const properties = await this.propertiesRepository.find({
      skip,
      take: limit,
      order: {
        id: "ASC"
      }
    });
    

    if (!properties) {
      throw new NotFoundException("Properties not found");
    }

    return properties;
  }

  async updateVote(id: number, updatePropertyDto: UpdatePropertyDto) {
    const property = await this.propertiesRepository.findOne({
      where: {
        id,
      },
    });

    if (!property) {
      throw new NotFoundException("Property not found");
    }

    if (updatePropertyDto.action === "upvote") {
      property.upvote++;
    } else if (updatePropertyDto.action === "downvote") {
      property.downvote++;
    }

    return this.propertiesRepository.save(property);
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
