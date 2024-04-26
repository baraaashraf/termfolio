export function detectBrowser() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edg") > -1) {
      return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
      return "Opera";
    } else if (
      userAgent.indexOf("Trident") > -1 ||
      userAgent.indexOf("MSIE") > -1
    ) {
      return "Internet Explorer";
    }
    return "Unknown";
  }