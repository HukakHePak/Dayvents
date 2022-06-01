import styled from "styled-components";
import { StyledButton } from "../styled/StyledButton";

const Button = styled(StyledButton)`
  font-family: "Rubik";
  font-size: 25px;
  width: 40px;
  color: inherit;
`;

const MonthButton = styled(StyledButton)`
  padding: 0 40px;
  width: fit-content;
  font-size: 17px;
`;

export function MonthSwitch(props) {
  const { onNext, onLast, onMonthChange, className, children } = props;

  return (
    <div className={className}>
      <Button onClick={onLast}>{"<"}</Button>
      <MonthButton onClick={onMonthChange}>{children}</MonthButton>
      <Button onClick={onNext}>{">"}</Button>
    </div>
  );
}
