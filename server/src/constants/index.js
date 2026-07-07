export const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  DONOR: "donor",
  HOSPITAL: "hospital",
  PATIENT: "patient",
});

export const REQUEST_STATUS = Object.freeze({
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  PAYMENT_PENDING: "payment_pending",
  COMPLETED: "completed",
  EXPIRED: "expired",
});

export const PAYMENT_STATUS = Object.freeze({
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
});

export const DONATION_STATUS = Object.freeze({
  PENDING: "pending",
  VERIFIED: "verified",
  REJECTED: "rejected",
});

export const BLOOD_GROUPS = Object.freeze([
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
]);
