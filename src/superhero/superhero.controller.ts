import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SuperheroDto } from './dto/superhero.dto';
import { SuperheroService } from './superhero.service';
import { BadRequestException } from '@nestjs/common';

@ApiTags('Superheroe')
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of superheroes sorted by humility score',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of superheroes sorted by humility score.',
    type: [SuperheroDto],
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  getAllHeroes(): SuperheroDto[] {
    return this.superheroService.getAllHeroes();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new superhero' })
  @ApiResponse({
    status: 201,
    description: 'The superhero has been successfully created.',
    type: SuperheroDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request, the payload is not valid.',
  })
  createHero(@Body() superheroData: SuperheroDto): SuperheroDto {
    const { name, superpower, humilityScore } = superheroData;
    if (humilityScore < 1 || humilityScore > 10) {
      throw new BadRequestException('Humility score must be between 1 and 10');
    }
    return this.superheroService.createHero(name, superpower, humilityScore);
  }

  @Get(':name')
  @ApiOperation({ summary: 'Get a superhero by name' })
  @ApiParam({ name: 'name', description: 'The name of the superhero' })
  @ApiResponse({
    status: 200,
    description: 'The superhero is found.',
    type: SuperheroDto,
  })
  @ApiResponse({ status: 404, description: 'Superhero not found.' })
  findHeroByName(@Param('name') name: string): SuperheroDto | undefined {
    return this.superheroService.findHeroByName(name);
  }
}
