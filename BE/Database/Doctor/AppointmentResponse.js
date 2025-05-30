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

const acceptAppointment = async (appointmentId) => {
 
    await pool.query(
      `UPDATE appointment
       SET appointment_status = 'Approved'
       WHERE appointment_id = $1`,
      [appointmentId]
    );
  };
  
  const declineAppointment = async (appointmentId) => {
    
    await pool.query(
      `UPDATE appointment
       SET appointment_status = 'Declined'
       WHERE appointment_id = $1`,
      [appointmentId]
    );
  };
  
  export default { acceptAppointment, declineAppointment };