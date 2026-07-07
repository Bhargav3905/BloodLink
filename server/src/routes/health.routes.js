import { Router } from "express";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          server: "BloodLink API",
          version: "v1",
        },
        "Server is running successfully",
      ),
    );
  }),
);

export default router;
