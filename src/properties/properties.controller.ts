import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import {
  transformPropertyDescription,
  transformPropertyDetails,
} from "./transformers/property.transformer";
import {
  PropertyDescription,
  PropertyDetails,
} from "./interfaces/propertyDescription";

@Controller("properties")
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  async findAllProperties(
    @Query("page") page: number,
    @Query("limit") limit: number,
  ): Promise<{ propertyListDescription: PropertyDescription[] }> {
    const paginated = {
      page,
      limit,
    };
    const propertyList =
      await this.propertiesService.findAllProperties(paginated);
    return {
      propertyListDescription: propertyList.map((p) =>
        transformPropertyDescription(p),
      ),
    };
  }

  @Get(":id")
  async findSingleProperty(
    @Param("id") id: number,
  ): Promise<{ propertyDetails: PropertyDetails }> {
    const singleProperty = await this.propertiesService.findOne(id);
    return {
      propertyDetails: transformPropertyDetails(singleProperty),
    };
  }

  @Patch(":id/update-vote")
  async updateVote(
    @Param("id") id: number,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertiesService.updateVote(id, updatePropertyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.propertiesService.remove(+id);
  }
}
