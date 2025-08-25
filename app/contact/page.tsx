'use client'

import Section from '@/components/Section'
import { TextField, Button, Alert } from '@mui/material'
import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [msg, setMsg] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('sending')
    setMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        cache: 'no-store',
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data?.error || 'Failed')
      setStatus('sent')
      setMsg(data?.message ?? 'Thanks! Your message has been received.')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err: any) {
      setStatus('error')
      setMsg(err?.message || 'Something went wrong.')
    }
  }

  return (
    <>
      <Section title="Contact">
        <form onSubmit={onSubmit} className="max-w-md space-y-4 card">
          <TextField fullWidth name="name" label="Your Name" required />
          <TextField fullWidth name="email" type="email" label="Email" required />
          <TextField fullWidth name="message" label="Message" multiline minRows={3} required />

          <Button type="submit" variant="contained" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send'}
          </Button>

          {status === 'sent' && <Alert severity="success">{msg}</Alert>}
          {status === 'error' && <Alert severity="error">{msg || 'Something went wrong.'}</Alert>}
        </form>
      </Section>
    </>
  )
}
