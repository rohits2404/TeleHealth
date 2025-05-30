import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
import pkg from "bcryptjs"
const { hash } = pkg;
const saltRounds = 10;

const { PGHOST, PGDATABASE, PGUSER, PGPORT } = process.env;
let PGPASSWORD = process.env.PGPASSWORD;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: PGPORT,
    ssl: {
        rejectUnauthorized: true,
    },
});
(async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        client.release();
    } catch (error) {
        console.error('Database connection error', error.stack);
    }
})();

const getUserByEmail = async (email) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        if (result.rows.length) {
            console.log('User already exists', result.rows);
            return result.rows[0];
        }
        console.log('User not found');
        return false;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const updatePassword = async (id, email, password) => {
    try {
        const hashedPassword = await hash(password, saltRounds);
        const result = await pool.query('UPDATE users SET user_password_hash = $1 WHERE user_email = $2 AND user_id = $3 RETURNING *', [hashedPassword, email, id]);
        if (result.rows.length) {
            console.log('Password updated', result.rows);
            return true;
        }
        console.log('Password not updated');
        return false;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

export default { getUserByEmail, updatePassword };


