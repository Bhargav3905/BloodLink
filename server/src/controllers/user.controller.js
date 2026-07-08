import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import { updateProfileSchema } from "../validations/user.validation.js";

// Get logged-in user
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

// Update profile
const updateProfile = asyncHandler(async (req, res) => {
  const validationResult = updateProfileSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const updates = validationResult.data;

  // Prevent empty update request
  if (Object.keys(updates).length === 0) {
    throw new ApiError(400, "No fields provided for update");
  }

  // Prevent duplicate phone numbers
  if (updates.phone) {
    const existingUser = await User.findOne({
      phone: updates.phone,
      _id: { $ne: req.user._id },
    });

    if (existingUser) {
      throw new ApiError(409, "Phone number already exists");
    }
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: updates,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
});

export { getCurrentUser, updateProfile };
