import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      emailAddress: "test@example.com",
      firstName: "John",
      lastName: "Doe",
      imageUrl: "https://i.pravatar.cc/150?u=test",
    },
  });
  console.log("User created:", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
