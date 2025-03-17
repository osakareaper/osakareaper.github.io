import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "osaka's garden 🌱",
    pageTitleSuffix: " | osaka garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz", // CHANGE LATER
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Urbanist",
        body: "Archivo",
        code: "Ubuntu Mono"
      },
      colors: {
        lightMode: {
          light: "rgb(248, 248, 248)",
          lightgray: "rgb(220, 220, 220)",
          gray: "rgb(168, 168, 168)",
          darkgray: "rgb(90, 90, 90)",
          dark: "rgb(42, 42, 42)",
          secondary: "rgb(0, 0, 0)",
          tertiary: "rgb(36, 182, 0)",
          highlight: "rgba(128, 128, 128, 0.15)",
          textHighlight: "rgba(255, 255, 255, 0.53)"
        },
        darkMode: {
          light: "rgb(0, 0, 0)",
          lightgray: "rgb(58, 58, 58)",
          gray: "rgb(112, 112, 112)",
          darkgray: "rgb(168, 168, 168)",
          dark: "rgb(255, 255, 255)",
          secondary: "rgb(255, 255, 255)",
          tertiary: "rgb(51, 255, 0)",
          highlight: "rgba(81, 81, 81, 0.85)",
          textHighlight: "rgba(192, 192, 192, 0.53)"
        }
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
