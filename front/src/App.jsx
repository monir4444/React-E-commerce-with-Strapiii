import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Iconseaction from "./components/hero/IconSeaction";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";


function App() {
  
const [theme, colorMode] = useMode();
  return (
    
       <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
 <CssBaseline />

           <Header1 />
      <Header2 />
      <Header3 />

      <Hero />
     <Iconseaction />
     <Main />

     <Footer />

     <Scroll />

         </ThemeProvider>

       </ColorModeContext.Provider>
      

    
  )
}

export default App
