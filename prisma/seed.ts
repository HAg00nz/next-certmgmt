import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'admin@certmgmt.com' },
        update: {},
        create: {
            email: 'admin@certmgmt.com',
            name: 'Admin',
            password: '$2b$10$WUvKVe7AF3KGyqv0SZTUpuypstMHzqun8twsX1AMmOUBwofc.StJS',
            role: 'ADMIN',
        }
    })
    console.log({ user })
}

main()
    .then(() => { prisma.$disconnect() })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })