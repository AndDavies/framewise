import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase URL & Public ANON Key
const supabaseUrl = 'https://giixitfgspwdddyidkxz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaXhpdGZnc3B3ZGRkeWlka3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NDYyMDgsImV4cCI6MjA0NjMyMjIwOH0.A0wUdLpeIWM1lqfaNVtwzae3DgHaVlw2LXnHpUu_hnY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: Request) {
  try {
    // Parse JSON from the request body
    const { email, ip_address, referrer } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required.' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.toLowerCase(),
          ip_address: ip_address || null,
          referrer: referrer || null
        }
      ])

    if (error) {
      // If it's a duplicate email (primary key violation), handle gracefully
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You’ve already subscribed with that email!' },
          { status: 409 }
        )
      }
      // Otherwise return the error message
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      )
    }

    // Successful insert
    return NextResponse.json(
      {
        message:
          "Thanks for your support! Keep an eye on your mailbox for articles, tools, and our upcoming App launch."
      },
      { status: 200 }
    )
  } catch (err) {
    console.error('Error in subscribe route:', err)
    return NextResponse.json(
      { message: 'Server error.' },
      { status: 500 }
    )
  }
}