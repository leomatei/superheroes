import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SuperheroRepository {
  private superheroes: Superhero[];

  constructor() {
    // Load superheroes from the JSON file when the repository is initialized
    this.superheroes = this.loadSuperheroesFromFile();
  }

  // Method to load superheroes from a JSON file
  private loadSuperheroesFromFile(): Superhero[] {
    const filePath = path.join(__dirname, '../../superheroes.txt'); // Adjust the path if necessary
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent); // Parse the JSON content and return as an array of Superheroes
  }

  // Method to get all superheroes sorted by humility score
  getAll(): Superhero[] {
    return this.superheroes.sort((a, b) => a.humilityScore - b.humilityScore);
  }

  // Method to create a new superhero
  create(superhero: Superhero): Superhero {
    this.superheroes.push(superhero); // Add new superhero to the in-memory array
    this.saveSuperheroesToFile(); // Save updated superheroes to file
    return superhero;
  }

  // Method to find a superhero by name
  findByName(name: string): Superhero | undefined {
    return this.superheroes.find((hero) => hero.name === name);
  }

  // Method to save superheroes back to the JSON file after modifications
  private saveSuperheroesToFile(): void {
    const filePath = path.join(__dirname, 'superheroes.json');
    const fileContent = JSON.stringify(this.superheroes, null, 2); // Convert the array to a formatted JSON string
    fs.writeFileSync(filePath, fileContent, 'utf-8'); // Write the data back to the file
  }
}
