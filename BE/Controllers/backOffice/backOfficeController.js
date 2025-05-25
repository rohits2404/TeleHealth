import Utilities from "../../Utilities.js";
const { AppError } = Utilities;
import _default from "../../Utilities.js";
const { catchAsyncError } = _default;
import __default from "../../Database/Patient/Profile.js";
const { retrievePatientInfo } = __default;
import { retrieveAllPatients, retrieveAllDoctors, retrieveApppointmentsDetails } from "../../Database/backOffice/backOfficeModel.js";
import { changePatientState, changePersonState } from "../../Database/backOffice/backOfficeModel.js";
import ___default from "../../Utilities.js";
const { queryHandler } = ___default;
import { emit } from "nodemon";
import { query } from "express";

export const getPatientInfo = catchAsyncError(async (req, res, next) => {
  const queryOptions = queryHandler(req.query);
  const { fields } = req.query;
  const { field } = req.params;
  let id, email;
  if (!field) return next(new AppError("Please provide id  ...💣💣💣", 400));
  if (Number.isInteger(+field)) id = field;
  else email = field;

  const patientInfo = await retrieveAllPatients(
    queryOptions,
    fields,
    id,
    email
  );
  // const patientApp = await retrievePatientAppointments(id);
  if (patientInfo) {
    return res.status(200).json({
      status: "sucess",
      ok: true,
      patientInfo,
      // patientAppointments: patientApp,
    });
  }
  return next(new AppError("Invalid id or email...💣💣💣", 400));
});

const _changePatientState = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new AppError("User id not found...💣💣", 400));
  const { state } = req.body;
  if (!state)
    return next(new AppError("Please provide the new state....", 400));

  const patient = await changePersonState("patient", id, state);

  console.log(patient);

  if (!patient) return next(new AppError("failed to updated data .....", 400));

  res.status(200).json({
    status: "success",
    ok: true,
    message: "state changed successfully",
  });
});
export { _changePatientState as changePatientState };

export const getAllPatients = catchAsyncError(async (req, res, next) => {
  const { queryOptions, queryAtributes } = queryHandler(req.query);
  const { fields } = req.query;
  // delete req.query.limit;
  // delete req.query.order;
  // console.log(queryOptions);
  // const arr = Object.entries(req.query);

  // let queryAtributes = arr
  //   .map((atribute) => {
  //     if (atribute[0] === "user_id") return `${atribute[0]} = ${+atribute[1]}`;

  //     if (atribute[0] === "user_phone_number") {
  //       return `${atribute[0]} = '+${atribute[1]}'`;
  //     }

  //     return `${atribute[0]} = '${atribute[1]}'`;
  //   })
  //   .join(" AND ");
  //

  let patients = await retrieveAllPatients(
    queryOptions,
    fields,
    queryAtributes
  );
  if (!patients) {
    patients = [];
  }
  return res.status(200).json({
    status: "success",
    ok: true,
    patients,
  });
});

export const getPatientAppointments = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new AppError("Please Provide Patient id ....⛔", 400));
  let patientAppointments =
    (await retrieveApppointmentsDetails(id, true)) || [];
  res.status(200).json({
    status: "success",
    ok: true,
    patientAppointments,
  });
});

export const getAllDoctors = catchAsyncError(async (req, res, next) => {
  const { queryOptions, queryAtributes } = queryHandler(req.query);
  const { fields } = req.query;
  // delete req.query.limit;
  // delete req.query.order;
  // console.log(queryOptions);
  // const arr = Object.entries(req.query);

  // let queryAtributes = arr
  //   .map((atribute) => {
  //     if (atribute[0] === "user_id") return `${atribute[0]} = ${+atribute[1]}`;

  //     if (atribute[0] === "user_phone_number") {
  //       return `${atribute[0]} = '+${atribute[1]}'`;
  //     }

  //     return `${atribute[0]} = '${atribute[1]}'`;
  //   })
  //   .join(" AND ");

  let doctors = await retrieveAllDoctors(queryOptions, fields, queryAtributes);
  if (!doctors) doctors = [];
  res.status(200).json({
    status: "success",
    ok: true,
    doctors,
  });
});

export const changeDoctorState = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new AppError("Please Provide Dcotor id ....⛔", 400));

  const { state } = req.body;
  if (!state)
    return next(new AppError("Please Provide Dcotor New State ....⛔", 400));

  const result = await changePersonState("doctor", id, state);
  if (result) {
    return res.status(200).json({
      status: "succes",
      ok: true,
      message: "Doctor State Updated Successfully..",
    });
  }
  return next(
    new AppError(
      "Failed to update Doctor State , Please try agian later..⛔💣",
      400
    )
  );
});

export const getDoctorInfo = catchAsyncError(async (req, res, next) => {
  const queryOptions = queryHandler(req.query);
  const { fields } = req.query;
  const { field } = req.params;
  let id, email;
  if (!field) {
    return next(new AppError("Please Provide Doctor id ....⛔", 400));
  }
  if (Number.isInteger(+field)) {
    id = field;
  } else email = field;
  const doctor = await retrieveAllDoctors(
    undefined,
    fields,
    undefined,
    id,
    email
  );
  if (!doctor) {
    return next(new AppError("Invalid Id .... ", 400));
  }
  res.status(200).json({
    status: "sucess",
    ok: true,
    doctor,
  });
});

export const getDoctorAppointments = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new AppError("Please Provide doctor id ....⛔", 400));
  let doctorAppointments =
    (await retrieveApppointmentsDetails(id, false)) || [];
  res.status(200).json({
    status: "success",
    ok: true,
    doctorAppointments,
  });
});
