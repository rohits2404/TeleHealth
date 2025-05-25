import { Router } from "express";
import { getAllPatients, getPatientInfo, getPatientAppointments, changePatientState, getAllDoctors, changeDoctorState, getDoctorInfo, getDoctorAppointments } from "../../Controllers/backOffice/backOfficeController.js";
import AppointmentDetails from '../../Controllers/backOffice/appointmentDetails.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js'

var restrictTo = require("../../Utilities").default.restrictTo;

const router = Router();

router.use("/", tokenAuthentication, restrictTo("Admin"));

router.get("/getAllPatients", getAllPatients);

router.get("/getPatient/:field", getPatientInfo);

router.get(
  "/getPatientAppointment/:id",
  getPatientAppointments
);

router.patch(
  "/changePatientState/:id",
  changePatientState
);

router.get("/getAllDoctors", getAllDoctors);

router.patch("/changeDoctorState/:id", changeDoctorState);

router.get("/getDoctor/:field", getDoctorInfo);

router.get(
  "/getDoctorAppointments/:id",
  getDoctorAppointments
);

router.get('/appointmentdetails/:appointmentId', tokenAuthentication, AppointmentDetails);

export default router;
