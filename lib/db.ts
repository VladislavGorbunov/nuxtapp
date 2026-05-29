import mysql from 'mysql2/promise';

async function db(query: string) {
    try {
        await using connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nuxt',
        });

        const [results, fields] = await connection.query(query);

        return results
    } catch (e: any) {
        console.log('Ошибка базы данных: ' + e.errors)
    }
}
    
export default db