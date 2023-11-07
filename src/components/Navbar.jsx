import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={'/exp.png'}
        alt='Expertizo logo'
        height={120}
        width={120}
        quality={100}
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}