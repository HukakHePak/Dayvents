import styled from 'styled-components';
import { MonthSwitch } from '../components/MonthSwitch';

export const StyledMonthSwitch = styled(MonthSwitch)`
    position: absolute;
    z-index: 25;
    width: 100%;
    top: 65px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    background: #f6f6f6;
    border-bottom: 2px solid #eeeeee;
    height: 40px;
    box-sizing: border-box;
    padding: 0 50px;
    color: ${(props) => props.color};
`;