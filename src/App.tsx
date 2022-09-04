import { DefaultTheme, ThemeProvider } from "styled-components";

import { Header } from "./components/Header";

import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import { usePersistedState } from "./hooks/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    console.log("toggleTheme");
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
