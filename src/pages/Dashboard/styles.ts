import styled from "styled-components";

export const FoodContainer = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 0;
    margin-top: -9rem;

    font-size: 87.5%;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;

    justify-items: center;
`