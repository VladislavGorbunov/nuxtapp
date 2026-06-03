import { z } from 'zod'
import db from '../../../lib/db'
import { QueryResult } from 'mysql2'

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(5),
})


export default defineEventHandler(async (event) => {

  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const result = await db('SELECT * FROM `admin` WHERE `email` = ' + '"' + email + '" LIMIT 1')

  console.log(result)

    if (email == result[0].email && password == result[0].password) {
    
      await setUserSession(event, {
        user: {
          name: result[0].name,
        },
      })
      return {}
    }
    
  

  throw createError({
      status: 401,
      message: 'Bad credentials',
    })
  })
  
