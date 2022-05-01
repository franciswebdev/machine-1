import { FC } from "react";
import { Container, ContainerProps } from "@mui/material"

export const GlobalContainer: FC<ContainerProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}