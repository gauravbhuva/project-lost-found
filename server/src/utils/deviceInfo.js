import {UAParser} from "ua-parser-js";

export function getDeviceInfo(req) {
  const userAgent = req.headers["user-agent"] || "";
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.connection?.remoteAddress ||
    req.ip ||
    null;

  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  return {
    userAgent,
    ip,
    browser: result.browser.name || "Unknown",
    browserVersion: result.browser.version || "Unknown",
    os: result.os.name || "Unknown",
    osVersion: result.os.version || "Unknown",
    deviceType: result.device.type || "desktop", // mobile | tablet | etc
    deviceVendor: result.device.vendor || "Unknown",
    deviceModel: result.device.model || "Unknown",
  };
}