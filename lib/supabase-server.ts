/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// lib/supabase-server.ts
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export const createSupabaseServerClient = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: async (name: string) => {
          const cookieStore = await cookies();
          const cookie = cookieStore.get(name);
          return cookie?.value;
        },
        set: async (name: string, value: string, options?: any) => {
          // Not implemented: Next.js cookies() API does not support setting cookies on the server in this context
        },
        remove: async (name: string, options?: any) => {
          // Not implemented: Next.js cookies() API does not support removing cookies on the server in this context
        }
      }
    }
  )
