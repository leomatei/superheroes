import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { SuperheroDto } from './dto/superhero.dto';
import { BadRequestException } from '@nestjs/common';

const mockSuperheroService = {
  createHero: jest.fn(),
  getAllHeroes: jest.fn(),
  findHeroByName: jest.fn(),
};

describe('SuperheroController', () => {
  let controller: SuperheroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: mockSuperheroService,
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
  });

  it('should create a superhero successfully if humilityScore is between 1 and 10', async () => {
    const superheroDto: SuperheroDto = {
      name: 'Superman',
      superpower: 'Flying',
      humilityScore: 5,
    };

    const result = { ...superheroDto };

    mockSuperheroService.createHero.mockResolvedValue(result);

    const response = await controller.createHero(superheroDto);

    expect(response).toEqual(result);
    expect(mockSuperheroService.createHero).toHaveBeenCalledWith(
      superheroDto.name,
      superheroDto.superpower,
      superheroDto.humilityScore,
    );
  });

  it('should throw a BadRequestException if humilityScore is less than 1', async () => {
    const invalidHeroDto: SuperheroDto = {
      name: 'Invalid Hero',
      superpower: 'Laser Vision',
      humilityScore: 0,
    };

    try {
      await controller.createHero(invalidHeroDto);
    } catch (error) {
      console.log('Caught error:', error);
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBe('Humility score must be between 1 and 10');
    }
  });

  it('should throw a BadRequestException if humilityScore is greater than 10', async () => {
    const invalidHeroDto: SuperheroDto = {
      name: 'Invalid Hero',
      superpower: 'Laser Vision',
      humilityScore: 11,
    };

    try {
      await controller.createHero(invalidHeroDto);
    } catch (error) {
      console.log('Caught error:', error);
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBe('Humility score must be between 1 and 10');
    }
  });
});
