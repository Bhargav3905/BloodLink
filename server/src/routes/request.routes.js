import { Router } from "express";

import {
  createRequest,
  getMyRequests,
  getPendingRequests,
  approveRequest,
  rejectRequest,
} from "../controllers/request.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js";

const router = Router();

router.use(verifyJWT);

router.post("/", createRequest);

router.get("/my", getMyRequests);

router.get("/pending", authorizeRoles(USER_ROLES.ADMIN), getPendingRequests);

router.patch("/:id/approve", authorizeRoles(USER_ROLES.ADMIN), approveRequest);

router.patch("/:id/reject", authorizeRoles(USER_ROLES.ADMIN), rejectRequest);

export default router;
