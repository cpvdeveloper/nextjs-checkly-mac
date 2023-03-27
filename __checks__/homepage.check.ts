import path from "path";
import { BrowserCheck } from "@checkly/cli/constructs";
import { emailChannel } from "./alert-channels";

/*
 * Rather than create an automatic check for `home.spec.js`, we explicitly define a check here.
 * This allows us to override the check configuration.
 */
new BrowserCheck("home-check-1", {
  name: "HomePage",
  frequency: 15,
  locations: ["ap-south-1", "us-west-2"],
  alertChannels: [emailChannel],
  code: {
    entrypoint: path.join(__dirname, "homepage.spec.ts"),
  },
});
