import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";

const sendTestEmail = asyncHandler(async (req, res) => {
  await sendEmail({
    to: "prajapatibhargavk@gmail.com",
    subject: "BloodLink Test",
    html: "<h2>Email Working 🎉</h2>",
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Test email sent successfully"));
});

export { sendTestEmail };
