import "./App.css";
import { LanguageProvider } from "./Components/context/Langcontext";
import { ThemeProvider } from "./Components/context/Themecontext";
import Homescreen from "./Components/HomeScreen/Homescreen";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Homescreen />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
