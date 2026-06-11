import { z } from 'zod'
import { sequelize, db } from '../../../lib/db'
import { QueryResult } from 'mysql2'
import User from '../../../models/admin'
import bcrypt from 'bcrypt';

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(5),
})


export default defineEventHandler(async (event) => {

  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const admin = await User.findOne({ where: { email: email }, raw: true });

  if (admin) {
    // Сравнение паролья с хэшем пароля в БД
    const passVerify = await bcrypt.compare(password, admin.password)

    if (email == admin.email && passVerify) {
      await setUserSession(event, {
        user: {
          name: admin.name,
        },
      })
      return {}
    }
  }

  throw createError({
    status: 401,
    message: 'Bad credentials',
  })
})

