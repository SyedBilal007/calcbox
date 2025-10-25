'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // For now, just log the data (in production, you'd save to database)
  console.log('Contact form submission:', {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  })

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}
