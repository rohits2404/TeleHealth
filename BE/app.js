import express, { json } from "express";
import cors from "cors";
import userLoginRoute from "./Routes/Login.js";
import userLogoutRoute from "./Routes/Logout.js";
import patientRegisterRoute from "./Routes/Patient/Register.js";
import doctorRegisterRoute from "./Routes/Doctor/Register.js";
import patienProfileRoute from "./Routes/Patient/Profile.js";
import patientEditRoute from "./Routes/Patient/Edit.js";
import patientAppointmentBookRoute from "./Routes/Patient/Appointment/book.js";
import patientSubmitReviewRoute from "./Routes/Patient/Appointment/SubmitReview.js";
import patientHomeRoute from "./Routes/Patient/Home.js";
import backOfficeRoute from "./Routes/backOffice/backOfficeRoutes.js";
// const patientAddPrescriptionRoute = require('./Routes/Patient/MedicalHistory/addPrescription');
// const patientDeletePrescriptionRoute= require('./Routes/Patient/MedicalHistory/deletePrescription');
// const patientViewPrescriptionRoute= require('./Routes/Patient/MedicalHistory/viewPrescription');
import patientUploadMedicalDocumentRoute from "./Routes/Patient/Medical Document/Upload.js";
import patientViewMedicalDocumentRoute from "./Routes/Patient/Medical Document/View.js";
import patientDeleteMedicalDocumentRoute from "./Routes/Patient/Medical Document/Delete.js";
import doctorProfileRoute from "./Routes/Doctor/Profile.js";
import doctorEditRoute from "./Routes/Doctor/Edit.js";
// const doctorAddAvailabilityRoute = require('./Routes/Doctor/Availability/add');
// const doctorDeleteAvailabilityRoute = require('./Routes/Doctor/Availability/Delete');
import doctorProfilePictureUploadRoute from "./Routes/Doctor/Profile Picture/Upload.js";
// const doctorPatientPrescriptionAddRoute = require('./Routes/Doctor/Patient Prescription/Add');
import doctorAppointmentResponseAddRoute from "./Routes/Doctor/AppointmentResponse.js";
import doctorFollowUpAppointmentAddRoute from "./Routes/Doctor/BookFollowUp.js";
import doctorAppointmentResultsAddRoute from "./Routes/Doctor/AppointmentResults.js";
import doctorAppointmentHistoryRoute from "./Routes/Doctor/AppointmentHistory.js";
import doctorAppointmentDetailsRoute from "./Routes/Doctor/AppointmentDetails.js";
import doctorPatientsummaryRoute from "./Routes/Doctor/Patientsummary.js";
import doctorAvailabilityRoute from "./Routes/Doctor/Availability.js";
import notificationsRoute from "./Routes/notifications.js";
import emailRoute from "./Routes/Email.js";
import chatRoute from "./Routes/Chat.js";
import { globalErrorHanlder } from "./Utilities.js";
const port = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/login", userLoginRoute);
app.use("/logout", userLogoutRoute);
app.use("/patient/register", patientRegisterRoute);
app.use("/doctor/register", doctorRegisterRoute);
app.use("/patient/profile", patienProfileRoute);
app.use("/patient/edit", patientEditRoute);
app.use("/patient/appointment", patientAppointmentBookRoute); 
// app.use("/patient/appointment", patientSubmitReviewRoute);doblecated end piont moved to patientAppointmentBookRoute
app.use("/patient/home", patientHomeRoute);
// app.use('/patient/prescription/add',patientAddPrescriptionRoute);
// app.use('/patient/prescription/view',patientViewPrescriptionRoute);
// app.use('/patient/prescription/delete',patientDeletePrescriptionRoute);
app.use("/patient/medical-document/upload", patientUploadMedicalDocumentRoute);
app.use("/patient/medical-document/view", patientViewMedicalDocumentRoute);
app.use("/patient/medical-document/delete", patientDeleteMedicalDocumentRoute);
app.use("/doctor/edit", doctorEditRoute);
app.use("/doctor/profile", doctorProfileRoute);
app.use("/doctor/availability", doctorAvailabilityRoute);
// app.use('/doctor/availability/delete', doctorDeleteAvailabilityRoute);
app.use("/doctor/profile-picture/upload", doctorProfilePictureUploadRoute);
// app.use('/doctor/patient-prescription/add', doctorPatientPrescriptionAddRoute);
app.use("/doctor/AppointmentResponse", doctorAppointmentResponseAddRoute);
app.use("/doctor/BookFollowUp", doctorFollowUpAppointmentAddRoute);
app.use("/doctor/AppointmentResults", doctorAppointmentResultsAddRoute);
app.use("/doctor/appointmentHistory", doctorAppointmentHistoryRoute);
app.use("/doctor/appointmentDetails", doctorAppointmentDetailsRoute);
app.use("/doctor/PatientSummary", doctorPatientsummaryRoute);
app.use("/appointment-chat", chatRoute);
app.use("/notifications", notificationsRoute);
app.use("/email-service", emailRoute);

/// backOffice
app.use("/backOffice", backOfficeRoute);
app.use("/", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    ok: false,
    message: "No such route founded in server...💣💣💣",
  });
});

app.use(globalErrorHanlder);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Server is running on port ${port}`);
});

export default app;
