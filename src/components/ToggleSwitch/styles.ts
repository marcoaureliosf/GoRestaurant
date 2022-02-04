import styled from 'styled-components'

interface CheckedProps {
    checked: boolean;
}

export const Container = styled.label<CheckedProps>`
    background: ${(props) => props.checked ? '#39B100' : '#C72828'};
    width: 5.5rem;
    height: 2rem;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 12px;

    input {
        height: 0;
        width: 0;
        opacity: 0;
    }

    span {
        position: absolute;
        width: 2.5rem;
        height: 1.2rem;
        border-radius: 1rem;
        background: #fff;
        left: ${(props) => props.checked ? '40%' : '0.5rem'};
        cursor: pointer;
        box-shadow: 1px 1px 4px lightgray;
        transition: 0.5s;
    }
`;