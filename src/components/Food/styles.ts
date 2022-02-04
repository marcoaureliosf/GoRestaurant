import styled, { css } from 'styled-components'

interface AvailableProps {
    available: boolean;
}

export const Container = styled.div<AvailableProps>`
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    width: 100%;

    header {
        background: #ffb84d;
        border-radius: 0.5rem 0.5rem 0 0;
        height: 12rem;
        max-width: 24rem;
        width: 100%;
        overflow: hidden;
        transition: 0.3 opacity;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img {
            border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
            pointer-events: none;
            user-select: none;


            ${props =>
            !props.available &&
            css`
                opacity: 0.3;
            `}
        }
    }

    section.body {
        background: #F0F0F5;
        padding: 2rem;
        max-height: 12rem;
        max-width: 24rem;
        width: 100%;
        height: 100%;
        
        h2 {
            color: #3d3d4d;
        }

        p {
            color: #3d3d4d;
            margin-top: 1rem;
        }

        p.price {
            font-size: 1.5rem;
            color: #39b100;
            line-height: 2rem;

            span {
                font-weight: 600;
            }
        }
    }

    footer {
        background: #E4E4EB;
        max-width: 24rem;
        width: 100%;
        padding: 1.5rem 2rem;
        border-radius: 0 0 0.5rem 0.5rem;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        div.icon-container {
            display: flex;

            button {
                background: #fff;
                padding: 0.5rem;
                border: 0;
                border-radius: 0.5rem;

                svg {
                    color: #3d3d4d;
                }

                & + button {
                    margin-left: 0.5rem;
 
                }
            }
        }

        div.availability-container {
            display: flex;
            align-items: center;
            
            p {
                font-size: 1rem;
                color: #3d3d4d;
            }

            .toggleswitch {
                border: 0;
                background: 0;
            }
        }
    }
`;
