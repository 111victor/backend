import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Properties } from './entities/property.entity';

export type PaginationOptions = {
  page: number;
  limit: number;
};

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Properties) private readonly propertiesRepository: Repository<Properties>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  findAll() {
    return `This action returns all properties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }

  async findAllProperties({ page = 1, limit = 10 }: PaginationOptions): Promise<Properties[]> {
    const skip = (page - 1) * limit;
    const items = await this.propertiesRepository.find({
      skip,
      take: limit,
    });
    return items;
  }
}
