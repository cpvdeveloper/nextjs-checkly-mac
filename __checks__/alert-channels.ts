import { EmailAlertChannel } from "@checkly/cli/constructs";

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30,
};

export const emailChannel = new EmailAlertChannel("email-channel", {
  address: "your-email@gmail.com",  // your email here
  ...sendDefaults,
});
