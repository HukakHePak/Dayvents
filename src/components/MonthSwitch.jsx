import styled from 'styled-components';
import { StyledButton } from '../styled/StyledButton';

const Button = styled(StyledButton)`
    height: 30px;
    width: 30px;
`;

const MonthButton = styled(Button)`
    padding: 0 40px;
    width: fit-content;
`;

export function MonthSwitch(props) {
  const { onNext, onLast, onMonthChange, className, children } = props;

  return <div className={className}>
      <Button onClick={onLast}>{'<'}</Button>
      <MonthButton onClick={onMonthChange}>{ children }</MonthButton>
      <Button onClick={onNext}>{'>'}</Button>
  </div>;
}
