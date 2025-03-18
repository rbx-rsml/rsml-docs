import * as fs from "fs"
import { defineConfig } from 'vitepress'

export default defineConfig({
    // site-level options
    title: 'Rsml',
    description: 'a declarative styling language for the Roblox ecosystem.',
    srcDir: './src',
    cleanUrls: true,

    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

    markdown: {
        languages: [
            {   
                ...JSON.parse(fs.readFileSync('./syntaxes/rsml.tmLanguage.json', 'utf8'))
            },

            {
                ...JSON.parse(fs.readFileSync('./syntaxes/luau.tmLanguage.json', 'utf8'))
            },

            {
                injectTo: ["source.luau"],
                embeddedLanguages: {
                    ["meta.embedded.rsml"]: "rsml"
                },
                ...JSON.parse(fs.readFileSync('./syntaxes/rsml-luau.tmLanguage.json', 'utf8'))
            },

            {
                ...JSON.parse(fs.readFileSync('./syntaxes/ts.tmLanguage.json', 'utf8'))
            },

            {   
                injectTo: ["source.ts"],
                embeddedLanguages: {
                    ["meta.embedded.rsml"]: "rsml"
                },
                ...JSON.parse(fs.readFileSync('./syntaxes/rsml-ts.tmLanguage.json', 'utf8'))
            }
        ],
        theme: {
            "name": "VSCode Dark",
            "settings": [
                {
                    "scope": ["comment", "comment.block"],
                    "settings": {
                        "foreground": "#6A9955"
                    }
                },

                {
                    "scope": ["string"],
                    "settings": {
                        "foreground": "#ce9178"
                    }
                },

                {
                    "scope": ["variable"],
                    "settings": {
                        "foreground": "#9CDCFE"
                    }
                },

                {
                    "scope": ["constant.numeric"],
                    "settings": {
                        "foreground": "#b5cea8"
                    }
                },

                {
                    "scope": ["support.class"],
                    "settings": {
                        "foreground": "#4EC9B0"
                    }
                },

                {
                    "scope": ["variable.other.constant"],
                    "settings": {
                        "foreground": "#4FC1FF"
                    }
                },

                {
                    "scope": ["keyword.control"],
                    "settings": {
                        "foreground": "#C586C0"
                    }
                },

                {
                    "scope": ["entity.name.tag.css"],
                    "settings": {
                        "foreground": "#D7BA7D"
                    }
                },


                {
                    "scope": ["support.function", "entity.name.function"],
                    "settings": {
                        "foreground": "#D8D7A3"
                    }
                },

                {
                    "scope": ["storage.modifier", "constant.language"],
                    "settings": {
                        "foreground": "#4191CB"
                    }
                },
            ]
        }
    },
  
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rbx-rsml' },
        ],
        sidebar: [
            {
                items: [
                    { text: 'Introduction', link: '/intro' },
                ]
            },

            {
                text: "Docs",
                items: [
                    { text: "Derives", link: "docs/derives" },
                    { text: "Names", link: "docs/names" },
                    { text: "Priorities", link: "docs/priorities" },
                    { text: "Selectors", link: "docs/selectors" },
                    { text: "Fields", link: "docs/fields" },
                    { text: "Datatypes", link: "docs/datatypes" },
                ]
            }
        ]
    },
})