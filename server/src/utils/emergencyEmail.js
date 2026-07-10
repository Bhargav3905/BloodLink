import { emergencyEmail } from "../templates/emailTemplate";
import sendEmail from "./sendEmail";

export const sendEmergencyAlert = async (request) => {
  const donors = await User.find({
    role: USER_ROLES.DONOR,
    bloodGroup: request.bloodGroup,
    isApproved: true,
    isActive: true,
  });

  for (const donor of donors) {
    await sendEmail({
      to: donor.email,
      subject: "Emergency Blood Required",
      html: emergencyEmail("BloodLink", request.bloodGroup, request.quantity),
    });
  }
};
