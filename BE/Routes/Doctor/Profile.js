import { Router } from "express";
import { doctorInfo, doctorPatients, doctorAppointments, doctor_Further_Informtion, doctorReviews, doctorPendingRequests, doctorDeclinedRequests, addDoctorExperience, addDoctorEducation, addDoctorLanguage, addDoctorInterest, deleteDoctorExperience, deleteDoctorEducation, deleteDoctorLanguage, deleteDoctorInterest } from "../../Controllers/Doctor/Profile.js";
import { tokenAuthentication } from "../../middleware/User/Authentication.js";

const router = Router();

router.get("/info", tokenAuthentication, doctorInfo);
router.get(
  "/patients",
  tokenAuthentication,
  doctorPatients
);
router.get(
  "/appointments",
  tokenAuthentication,
  doctorAppointments
);
// router.get('/availabilities', tokenAuthentication, doctorProfileController.doctorAvailabilities);
router.get(
  "/DoctorFurtherInformation",
  tokenAuthentication,
  doctor_Further_Informtion
);
// router.get('/experience', tokenAuthentication, doctorProfileController.doctorExperience);
// router.get('/education', tokenAuthentication, doctorProfileController.doctorEducation);
// router.get('/interests', tokenAuthentication, doctorProfileController.doctorInterests);
router.get(
  "/reviews",
  tokenAuthentication,
  doctorReviews
);
router.get(
  "/PendingRequests",
  tokenAuthentication,
  doctorPendingRequests
);
router.get(
  "/DeclinedRequests",
  tokenAuthentication,
  doctorDeclinedRequests
);

router.post("/experience", tokenAuthentication, addDoctorExperience);
router.post("/education", tokenAuthentication, addDoctorEducation);
router.post("/languages", tokenAuthentication, addDoctorLanguage);
router.post("/interests", tokenAuthentication, addDoctorInterest);

// Delete routes
router.delete("/experience/:doctor_experience_id", tokenAuthentication, deleteDoctorExperience);
router.delete("/education/:doctor_education_id", tokenAuthentication, deleteDoctorEducation);
router.delete("/languages/:language_id", tokenAuthentication, deleteDoctorLanguage);
router.delete("/interests/:doctor_interest_id", tokenAuthentication, deleteDoctorInterest);

export default router;
