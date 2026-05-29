// import mysql from 'mysql2/promise';
import db from '../../lib/db'

export default defineEventHandler(async(event) => {
    return db('SELECT * FROM `users`')
})