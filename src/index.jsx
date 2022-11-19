import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://27461b79c2bc4295a3ccd16e29c45235@o4504111512420352.ingest.sentry.io/4504111555084288",
//   integrations: [new BrowserTracing({ tracingOrigins: ["*"] })],

// Set tracesSampleRate to 1.0 to capture 100%
// of transactions for performance monitoring.
// We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
