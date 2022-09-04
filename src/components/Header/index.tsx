import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Header</h1>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.65, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
}
