import styled from 'styled-components'

export const Container = styled.div`
    background: #c72828;
    padding: 2rem 0 ;
    width: 100%;

    header {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 0 10rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

       img {
        @media (max-width: 480px) {
            width: 13rem;
        }
       }

        nav {
            div {
                button {
                    font-weight: 600;
                    border-radius: 0.5rem;
                    border: 0;
                    background: #39b100;
                    color: #fff;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    transition: filter 0.2s;

                    .text {
                        padding: 1rem 1.5rem;
                    }

                    .icon {
                        display: flex;
                        padding: 1rem 1rem;
                        background: #41c900;
                        border-radius: 0 0.5rem 0.5rem 0;
                    }

                    &:hover {
                        filter: brightness(0.9);
                    }
                }

                @media (max-width: 480px) {
                    button {
                        font-weight: 600;
                        border-radius: 0.5rem;
                        border: 0;
                        background: #39b100;
                        color: #fff;

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        transition: filter 0.2s;
                    
                        .text {
                            padding: 0.2rem 0.5rem;
                            font-size:  87.5%;;
                        }

                        .icon {
                            display: flex;
                            padding: 0.6rem 0.1rem;
                            background: #41c900;
                            border-radius: 0 0.5rem 0.5rem 0;
                        }

                        &:hover {
                            filter: brightness(0.9);
                        }
                    }
                }
            }
        }
    }
`;