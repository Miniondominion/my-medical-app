import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/clinical-documentation">Clinical Documentation</Link></li>
          <li><Link href="/lab-skills-documentation">Lab Skills Documentation</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header