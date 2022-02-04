import styled from 'styled-components';

export const Container = styled.form`
    padding: 3rem 2.5rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 2.5rem;
    }

    button {
        margin-top: 3rem;
        align-self: flex-end;
    }

    button {
        font-weight: 600;
        border-radius: 0.5rem;
        border: 0;
        background: #39b100;
        color: #fff;

        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
        padding: 1rem 1.5rem;
        }

        .icon {
        display: flex;
        padding: 1rem 1rem;
        background: #41c900;
        border-radius: 0 0.5rem 0.5rem 0;
        margin: 0 auto;
        }

        @media (max-width: 480px) {
            font-weight: 600;
            border-radius: 0.5rem;
            border: 0;
            background: #39b100;
            color: #fff;

            display: flex;
            flex-direction: row;
            align-items: center;

            .text {
            padding: 0.9rem;
            }

            .icon {
            display: flex;
            padding: 1.5rem 0.6rem;
            background: #41c900;
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 0 auto;
            }
        }
    }

    input {
        display: flex;
        align-items: center;

        background: #fff;
        border-radius: 0.5rem;
        border: 0;
        padding: 1rem 1.5rem;
        width: 100%;
        font-size: 1rem;

        & + input {
            margin-top: 1.5rem;
        }

        h1 {
            margin-bottom: 2.5rem;
            font-weight: 600;
            font-size: 2rem;
            line-height: 2rem;
        }

        &::placeholder {
            color: #b7b7cc;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }

    }

    div {
        display: flex;
        justify-content: flex-end;

    }
`;