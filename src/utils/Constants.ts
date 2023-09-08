import { colorWrapper } from "./ColorUtils"

/**
 * 常量
 * * 代理所有环境变量
 * * 指定颜色常量
 */
export const constants = {
    build: {
        TITLE: import.meta.env.VITE_APP_TITLE,
        DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION,
        AUTHOR: import.meta.env.VITE_APP_AUTHOR,
        VERSION: import.meta.env.VITE_APP_VERSION,
    },
    runtime: {
        BASE: import.meta.env.VITE_BASE,
        API_BASE: import.meta.env.VITE_API_BASE
    },
    color: {
        PRIMARY: colorWrapper([
            '#2f5597',
            '#3775ba',
            '#3c86cf',
            '#4199e4',
            '#44a7f3',
            '#4cb4f7',
            '#62c2f9',
            '#8ad3fc',
            '#b8e4fe',
            '#e3f5ff'
        ]),
        COMPLEMENTARY: colorWrapper([
            '#97712f',
            '#bc9537',
            '#d2ab3c',
            '#e7bf42',
            '#f8d146',
            '#fbd75f',
            '#fdde7a',
            '#ffe89e',
            '#fff0c4',
            '#fff9e7'
        ])
    }
}