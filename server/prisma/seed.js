// prisma/seed.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create roles
  await prisma.role.createMany({
    data: [
      { name: 'ADMIN' },
      { name: 'STUDENT' },
    ]
    
  });

  // Get ADMIN role id
  const adminRole = await prisma.role.findUnique({
    where: { name: 'ADMIN' },
  });

//   // Create an admin user
  await prisma.user.create({
    data: {
     userName:'Admmin',
      email: 'admin@example.com',
      password: 'password', 
      roleId: adminRole.id,
      isVerified: true,
      isActive: true,
    },
  });


}

main()
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
