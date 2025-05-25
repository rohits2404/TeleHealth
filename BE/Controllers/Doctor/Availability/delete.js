import database from "../../../Database/Doctor/Availability/delete.js"

const deleteAvailability = async (req, res) => {
    try {
      const timeslotCodes = req.body; // Assuming the request body contains the timeslot code array
      const doctorId = req.id; // Assuming the doctor ID is available in req.id
  
      if (!Array.isArray(timeslotCodes)) {
        return res.status(400).json({ message: 'Invalid request body format, expect JSON array' });
      }
  
      const success = await database.deleteTimeslots(timeslotCodes, doctorId);
  
      if (success) {
        return res.status(200).json({ message: 'Timeslots deleted successfully' });
      } else {
        return res.status(500).json({ message: 'Error deleting timeslots' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting timeslots' });
    }
  };
export default deleteAvailability;