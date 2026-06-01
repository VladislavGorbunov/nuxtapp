import { z } from 'zod'
import db from '../../../lib/db'

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(5),
})


export default defineEventHandler(async (event) => {

  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const admin = await db('SELECT * FROM `admin` WHERE `email` = ' + '"' + email + '"')

  console.log(admin?.length)

  if (email === 'limitorg2016@yandex.ru' && password === 'admin') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'John Doe',
      },
    })
    return {}
  }
  throw createError({
    status: 401,
    message: 'Bad credentials',
  })
})
