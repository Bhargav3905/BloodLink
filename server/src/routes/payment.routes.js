import { Router } from "express";

import {
  createOrder,
  verifyPayment,
} from "../controllers/payment.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js";

const router = Router();

router.use(verifyJWT);

router.post(
  "/:id/create-order",
  authorizeRoles(USER_ROLES.PATIENT, USER_ROLES.HOSPITAL),
  createOrder,
);

router.post(
  "/verify",
  authorizeRoles(USER_ROLES.PATIENT, USER_ROLES.HOSPITAL),
  verifyPayment,
);

export default router;
