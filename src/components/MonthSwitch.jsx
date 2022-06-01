import styled from 'styled-components';

const Button = styled.button`
    border: none;
    background: transparent;
    height: 30px;
    width: 30px;
    cursor: pointer;
`;

const Span = styled.span`
    padding: 0 20px;
`;

export function MonthSwitch(props) {
  const { onNext, onLast, className, children } = props;

  return <div className={className}>
      <Button onClick={onLast}>{'<'}</Button>
      <Span> { children } </Span>
      <Button onClick={onNext}>{'>'}</Button>
  </div>;
}
