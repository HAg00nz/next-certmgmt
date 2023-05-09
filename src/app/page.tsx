import { prisma } from '@/lib/prisma'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'admin@certmgmt.com'
    }
  })

  return (
    <main>
      Hello, {user?.name}!
    </main>
  )
}
