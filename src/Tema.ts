import { ThemeConfig, extendTheme } from "@chakra-ui/react";
const config:ThemeConfig={
    initialColorMode:'dark'
}
const theme = extendTheme({
    config, colors:{
        gray:{
             50:'hsl(209, 21%, 20%)',
             700:'hsl(209, 23%, 22%)',
             800:'hsl(209, 23%, 15%)',
             900:'hsl(209, 23%, 14%)'
        },
        dark:"hsl(207, 26%, 17%)"
    }
})
export default theme