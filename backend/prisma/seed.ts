import { PrismaClient } from '@prisma/client';
import { TiposUsuarios } from './../src/resources/tipoUsuario/tipoUsuario.constants';

const prisma = new PrismaClient();

async function seed() {
  await prisma.tipoUsuario.createMany({
    data: [
      { id: TiposUsuarios.ADMIN, rotulo: 'admin' },
      { id: TiposUsuarios.CLIENT, rotulo: 'client' },
    ],
    skipDuplicates: true,
  });
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
