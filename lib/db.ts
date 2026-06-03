import mysql from 'mysql2/promise';

async function db(sql: string) {
    try {
        await using connection = await mysql.createConnection({
            host: 'MySQL-8.4',
            user: 'root',
            password: '',
            database: 'nuxt',
        });
<<<<<<< HEAD

        const [results, fields] = await connection.query(query);
        
        return results
      
=======
        
        const [result, fields] = await connection.query(sql);
        
        return result
>>>>>>> 69fc28099ec4d80a7378471e90c3d5748566353c
    } catch (e: any) {
        console.log('Ошибка базы данных: ' + e.errors)
    }
}
    
export default db