import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';

export class SuperheroDto {
  @ApiProperty({
    description: 'The name of the superhero.',
    example: 'Spiderman',
  })
  name: string;

  @ApiProperty({
    description: 'The superpower of the superhero.',
    example: 'Wall Climbing',
  })
  superpower: string;

  @ApiProperty({
    description: 'The humility score of the superhero.(1-10)',
    example: 10,
  })
  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
