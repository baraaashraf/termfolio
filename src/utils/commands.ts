import packageJson from "../../package.json";
import themes from "../../themes.json";
import { history } from "../stores/history";
import { theme } from "../stores/theme";
import { devFetch } from "./devfetch";
import { detectBrowser } from "./detectBrowser";
const hostname = `${window.location.hostname} on ${navigator.platform}`;

const userBrowser = detectBrowser();
let lolCount: number = 1;
export const commands: Record<
  string,
  (args: string[]) => Promise<string> | string
> = {
  help: () => "Available commands: \n" + Object.keys(commands).join(" \n"),
  hostname: () => hostname,
  whoami: () => `guest on ${userBrowser}`,
  date: () => new Date().toLocaleString(),
  echo: (args: string[]) => args.join(" "),
  lol: () => `lol x${lolCount++}`,
  website: () => {
    window.open(packageJson.author.url, "_blank");
    return "Opening portfolio...";
  },
  github: () => {
    window.open(packageJson.author.github, "_blank");
    return "Opening github...";
  },

  sudo: (args: string[]) => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    return `Permission denied: unable to run the command '${args[0]}' as root.`;
  },
  theme: (args: string[]) => {
    const usage = `Usage: theme [args].
    [args]:
      ls: list all available themes
      set: set theme to [theme]

    [Examples]:
      theme ls
      theme set gruvboxdark
    `;
    if (args.length === 0) {
      return usage;
    }

    switch (args[0]) {
      case "ls": {
        let result = themes.map((t) => t.name.toLowerCase()).join("\n ");
        result += `You can preview all these themes here: ${packageJson.repository.url}/tree/master/docs/themes`;

        return result;
      }

      case "set": {
        if (args.length !== 2) {
          return usage;
        }

        const selectedTheme = args[1];
        const t = themes.find((t) => t.name.toLowerCase() === selectedTheme);

        if (!t) {
          return `Theme '${selectedTheme}' not found. Try 'theme ls' to see all available themes.`;
        }

        theme.set(t);

        return `Theme set to ${selectedTheme}`;
      }

      default: {
        return usage;
      }
    }
  },
  repo: () => {
    window.open(packageJson.repository.url, "_blank");

    return "Opening repository...";
  },
  clear: () => {
    history.set([]);

    return "";
  },
  email: () => {
    window.open(`mailto:${packageJson.author.email}`);

    return `Opening mailto:${packageJson.author.email}...`;
  },
  donate: () => {
    window.open(packageJson.funding.url, "_blank");

    return "Opening donation url...";
  },
  devfetch: () => {
    return devFetch();
  },

  weather: async (args: string[]) => {
    const city = args.join("+");

    if (!city) {
      return "Usage: weather [city]. Example: weather Cairo";
    }

    const weather = await fetch(`https://wttr.in/${city}?ATm`);

    return weather.text();
  },

  exit: () => {
    return "Please close the tab to exit.";
  },
  curl: async (args: string[]) => {
    if (args.length === 0) {
      return "curl: no URL provided";
    }

    const url = args[0];

    try {
      const response = await fetch(url);
      const data = await response.text();

      return data;
    } catch (error) {
      return `curl: could not fetch URL ${url}. Details: ${error}`;
    }
  },
  banner: () => `
  ██████╗ ██╗  ██╗██████╗  █████╗ ██████╗ 
  ██╔══██╗╚██╗██╔╝██╔══██╗██╔══██╗╚════██╗
  ██████╔╝ ╚███╔╝ ██████╔╝███████║ █████╔╝
  ██╔══██╗ ██╔██╗ ██╔══██╗██╔══██║██╔═══╝ 
  ██████╔╝██╔╝ ██╗██║  ██║██║  ██║███████╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ v${packageJson.version}

Type 'help' to see list of available commands.
`,
};
