import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } })
    : null

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    if (supabase) {
      const { error } = await supabase.from('contacts').insert([{ name, email, message }])
      if (error) {
        console.error('Supabase insert error:', error)
        return NextResponse.json({ ok: false, error: 'DB insert failed' }, { status: 500 })
      }
      return NextResponse.json({ ok: true, message: `Thanks ${name}, your message has been saved.` })
    }

    return NextResponse.json({ ok: true, message: `Thanks ${name}, your message has been received.` })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}
