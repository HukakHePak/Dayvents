import styled from "styled-components";
import { StyledButton } from "../styled/StyledButton";

const Button = styled(StyledButton)`
  font-size: 40px;
  font-weight: 300;
`;

const Span = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

export function PlusLine(props) {
  const { className, children, theme, onClick } = props;

  return (
    <div className={className}>
      <Span> {children} </Span>
      <Button onClick={onClick} color={theme.color}> + </Button>
    </div>
  );
}
