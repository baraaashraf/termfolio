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

export async function fetchIPAddress() {
  try {
    let ipAddress = "";
    const response = await fetch("https://api.ipify.org?format=json");

    if (response.ok) {
      const data = await response.json();
      ipAddress = data.ip;
      return ipAddress;
    } else {
      console.error("Failed to fetch IP address:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

export async function fetchCountry() {
  try {
    const ip = await fetchIPAddress();
    let country = "";
    const response = await fetch(`https://ipwho.is/${ip}`);
    console.log("response", response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      country = data.country;
      const emoji = data.flag.emoji;
      return `${country} ${emoji}`;
    } else {
      console.error("Failed to fetch country:", response.statusText);
      return "Unknown";
    }
  } catch (error) {
    console.error("Error fetching country:", error);
    return "Unknown";
  }
}

console.log("fetch", await fetchCountry());
