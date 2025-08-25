'use client'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl">AG</Link>
        <nav className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            size="small"
            color="inherit"
            sx={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            Hire Me
          </Button>

        </nav>
      </div>
    </header>
  )
}
