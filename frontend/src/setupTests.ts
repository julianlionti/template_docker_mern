import React from "react";

jest.mock("./utils/Config", () => ({
  default: {
    MODE: "test",
    BASE_URL: "http://localhost:5000",
  },
}));
