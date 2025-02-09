import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  // Set up the Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Humble Superhero API')
    .setDescription('API for managing superheroes with humility scores')
    .setVersion('1.0')
    .addTag('superhero') // Optional: Add tags for endpoints grouping
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger to be available at /api endpoint
  SwaggerModule.setup('api', app, document);
}
