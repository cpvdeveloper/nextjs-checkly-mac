import { ApiCheck, AssertionBuilder } from "@checkly/cli/constructs";
import { defaults } from "../defaults";

new ApiCheck("hello-api-check-1", {
  name: "Hello API",
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: `${defaults.pageUrl}/api/hello`,
    method: "GET",
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody("$.success").equals(true),
    ],
  },
});
