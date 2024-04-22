import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AwsRum } from "aws-rum-web";

try {
  const config = {
    sessionSampleRate: 1,
    identityPoolId: "us-east-2:243680ac-d4a6-4faa-9aad-5cf1f2df93f7",
    endpoint: "https://dataplane.rum.us-east-2.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: false,
  };

  const APPLICATION_ID = "9d014e55-459a-46c7-afc9-d1f3b1c84d37";
  const APPLICATION_VERSION = "1.0.0";
  const APPLICATION_REGION = "us-east-2";

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
