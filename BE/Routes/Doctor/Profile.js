import { Router } from "express";
import  doctorController from "../../Controllers/Doctor/Profile.js";
import { tokenAuthentication } from "../../middleware/User/Authentication.js";

const router = Router();

router.get("/info", tokenAuthentication, doctorController.doctorInfo);
router.get(
  "/patients",
  tokenAuthentication,
  doctorController.doctorPatients
);
router.get(
  "/appointments",
  tokenAuthentication,
  doctorController.doctorAppointments
);
// router.get('/availabilities', tokenAuthentication, doctorProfileController.doctorAvailabilities);
router.get(
  "/DoctorFurtherInformation",
  tokenAuthentication,
  doctorController.doctor_Further_Informtion
);
// router.get('/experience', tokenAuthentication, doctorProfileController.doctorExperience);
// router.get('/education', tokenAuthentication, doctorProfileController.doctorEducation);
// router.get('/interests', tokenAuthentication, doctorProfileController.doctorInterests);
router.get(
  "/reviews",
  tokenAuthentication,
  doctorController.doctorReviews
);
router.get(
  "/PendingRequests",
  tokenAuthentication,
  doctorController.doctorPendingRequests
);
router.get(
  "/DeclinedRequests",
  tokenAuthentication,
  doctorController.doctorDeclinedRequests
);

router.post("/experience", tokenAuthentication, doctorController.addDoctorExperience);
router.post("/education", tokenAuthentication, doctorController.addDoctorEducation);
router.post("/languages", tokenAuthentication, doctorController.addDoctorLanguage);
router.post("/interests", tokenAuthentication, doctorController.addDoctorInterest);

// Delete routes
router.delete("/experience/:doctor_experience_id", tokenAuthentication, doctorController.deleteDoctorExperience);
router.delete("/education/:doctor_education_id", tokenAuthentication, doctorController.deleteDoctorEducation);
router.delete("/languages/:language_id", tokenAuthentication, doctorController.deleteDoctorLanguage);
router.delete("/interests/:doctor_interest_id", tokenAuthentication, doctorController.deleteDoctorInterest);

export default router;
