import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();
const doc = {
  info: {
    title: 'API do Lab Maker',
    description: 'Documentação da API',
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = './src/swagger-output.json';
const routes = ['./src/resources/auth/auth.router.ts',
                './src/resources/usuario/usuario.router.ts',
                './src/resources/equipamento/equipamento.router.ts',
                './src/resources/projeto/projetos.router.ts'];
swaggerAutogen()(outputFile, routes, doc);
