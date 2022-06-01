import styled from "styled-components";
import { StyledButton } from "../styled/StyledButton";

const Button = styled(StyledButton)`
  widtj: 30px;
  height: 30px;
`;

export function PlusLine(props) {
  const { className, children, theme } = props;

  return (
    <div className={className}>
      <span> {children} </span>
      <Button color={theme.color}> + </Button>
    </div>
  );
}
