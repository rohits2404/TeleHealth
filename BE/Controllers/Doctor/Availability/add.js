import database from '../../../Database/Doctor/Availability/add.js';


const addAvailability = async (req, res) => {
  try {
    const timeslotCodes = req.body; // Assuming the request body contains the timeslot code array
    const doctorId = req.id; // Assuming the doctor ID is available in req.id

    if (!Array.isArray(timeslotCodes)) {
      return res.status(400).json({ message: 'Invalid request body format, expect JSON array' });
    }

    const success = await database.insertTimeslots(timeslotCodes, doctorId);

    if (success) {
      return res.status(201).json({ message: 'Timeslots added successfully' });
    } else {
      return res.status(500).json({ message: 'Error adding timeslots' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error adding timeslots' });
  }
};
export default { addAvailability};
