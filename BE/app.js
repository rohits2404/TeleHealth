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
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/login", userLoginRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/logout", userLogoutRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/register", patientRegisterRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/register", doctorRegisterRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/profile", patienProfileRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/edit", patientEditRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/appointment", patientAppointmentBookRoute); 
// app.use("/patient/appointment", patientSubmitReviewRoute);doblecated end piont moved to patientAppointmentBookRoute
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/home", patientHomeRoute);
// app.use('/patient/prescription/add',patientAddPrescriptionRoute);
// app.use('/patient/prescription/view',patientViewPrescriptionRoute);
// app.use('/patient/prescription/delete',patientDeletePrescriptionRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/medical-document/upload", patientUploadMedicalDocumentRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/medical-document/view", patientViewMedicalDocumentRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/patient/medical-document/delete", patientDeleteMedicalDocumentRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/edit", doctorEditRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/profile", doctorProfileRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/availability", doctorAvailabilityRoute);
// app.use('/doctor/availability/delete', doctorDeleteAvailabilityRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/profile-picture/upload", doctorProfilePictureUploadRoute);
// app.use('/doctor/patient-prescription/add', doctorPatientPrescriptionAddRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/AppointmentResponse", doctorAppointmentResponseAddRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/BookFollowUp", doctorFollowUpAppointmentAddRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/AppointmentResults", doctorAppointmentResultsAddRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/appointmentHistory", doctorAppointmentHistoryRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/appointmentDetails", doctorAppointmentDetailsRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/doctor/PatientSummary", doctorPatientsummaryRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/appointment-chat", chatRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/notifications", notificationsRoute);
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/email-service", emailRoute);

/// backOffice
app.use("(https://telemedicine-pilot-d2anbuaxedbfdba9.southafricanorth-01.azurewebsites.net)/backOffice", backOfficeRoute);
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
