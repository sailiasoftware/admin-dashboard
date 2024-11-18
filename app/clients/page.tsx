import { redirect } from 'next/navigation'

import { createClient } from '@/app/actions/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (<div className='text-center'>
   <h1>Private Page</h1>
   <p>Hello {data.user.email}</p>
   </div>)
}