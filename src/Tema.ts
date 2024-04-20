import { ThemeConfig, extendTheme } from "@chakra-ui/react";
const config:ThemeConfig={
    initialColorMode:'dark'
}
const theme = extendTheme({
    config, colors:{
        gray:{
            50:'hsl(207, 26%, 17%)',
            100:'hsl(209, 23%, 22%)',
            200:'hsl(209, 23%, 21%)',
            300:'hsl(209, 23%, 20%)',
            400:'hsl(209, 23%, 19%)',
            500:'hsl(209, 23%, 18%)',
            600:'hsl(209, 23%, 17%)',
            700:'hsl(209, 23%, 16%)',
            800:'hsl(209, 23%, 15%)',
            900:'hsl(209, 23%, 14%)'
        }
    }
})
export default theme