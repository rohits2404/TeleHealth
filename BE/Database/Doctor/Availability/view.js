import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

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
const getDoctorTimeslots = async (doctorId) => {
    try {
      const result = await pool.query(
        `SELECT 
          CONCAT(timeslot_code, '_', timeslot_type) AS slot_code
          FROM timeslots WHERE timeslot_doctor_id = $1`,
        [doctorId]
      );
  
      return result.rows.map(row => row.slot_code);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export default { getDoctorTimeslots};