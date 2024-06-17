import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a new post
  const newPost = await prisma.post.create({
    data: {
      title: "My First Post",
      body: "This is the content of my first post.",
    },
  });
  console.log("Created new post:", newPost);

  // Fetch all posts
  const allPosts = await prisma.post.findMany();
  console.log("All posts:", allPosts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
