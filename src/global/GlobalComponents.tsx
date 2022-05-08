import { FC } from "react";
import { Container, ContainerProps } from "@mui/material"

// Create a component with Container properties
export const GlobalContainer: FC<ContainerProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}