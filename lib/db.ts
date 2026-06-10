import mysql from 'mysql2/promise';

async function db(sql: string) {
    try {
        await using connection = await mysql.createConnection({
            // host: 'MySQL-8.4',
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nuxt',
        });
        
        const [result, fields] = await connection.query(sql);
        
        return result
    } catch (e: any) {
        console.log('Ошибка базы данных: ' + e.errors)
    }
}
    
export default db