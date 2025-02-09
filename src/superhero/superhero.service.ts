import { Injectable } from '@nestjs/common';
import { SuperheroRepository } from './superhero.repository';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
  constructor(private readonly superheroRepository: SuperheroRepository) {}

  getAllHeroes(): Superhero[] {
    return this.superheroRepository.getAll();
  }

  createHero(
    name: string,
    superpower: string,
    humilityScore: number,
  ): Superhero {
    const newHero = new Superhero(name, superpower, humilityScore);
    return this.superheroRepository.create(newHero);
  }

  findHeroByName(name: string): Superhero | undefined {
    return this.superheroRepository.findByName(name);
  }
}
