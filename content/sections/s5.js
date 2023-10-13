import React from "react";
import styled from 'styled-components';
import { Container } from "./style";

const S5 = () => {
    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
            </Title>
             
            <div className="grid-container">
                <div className="grid-item">1st</div>
                <div className="grid-item">2nd</div>
                <div className="grid-item">3rd</div>
                <div className="grid-item">4th</div>
                </div>
        </Container>
    )
}

export default S5

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`

const Container = styled.div`
    /* Basic styling for the grid container */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 20px;
        /* Additional styling for the container can be added here */
    }

    /* Styling for grid items */
    .grid-item {
        background-color: black;
        color: white;
        padding: 20px;
        text-align: center;
        border: 1px solid #000;
        border-radius: 10px;
        /* Additional styling for grid items can be added here */
    }

    /* Media queries for responsive layout adjustments */
    @media (max-width: 767px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
        /* Additional adjustments for smaller screens can be added here */
    }
`