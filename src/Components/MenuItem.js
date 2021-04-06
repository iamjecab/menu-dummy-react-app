import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    flex-direction: column;
    @media (min-width: 770px) {
        flex-direction: row;
        width: 100%;
    }
    @media (min-width: 1200px) {
        width: 50%;
        padding: 20px;
    }
`;

const ImgContainer = styled.div``;

const Img = styled.img`
    max-width: 100%;
    max-height: 220px;
    outline: 4px solid #c59d5f;
    object-fit: cover;
    @media (min-width: 770px) {
        width: 30%;
        max-width: 30%;
        max-height: 150px;
    }
    @media (min-width: 1200px) {
        width: 40%;
        max-width: 40%;
        max-height: 120px;
    }
`;

const TextWrapper = styled.div`
    padding: 10px 0;
    @media (min-width: 770px) {
        flex-basis: 70%;
        padding: 0 10px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 0.5px dotted grey;
    @media (min-width: 770px) {
        padding: 0;
    }
`;

const Title = styled.h4`
    text-transform: capitalize;
`;

const Price = styled.h4`
    color: #c59d5f;
`;

const Discription = styled.p`
    margin: 10px 0;
    text-align: left;
    @media (min-width: 770px) {
        padding: 10px 0;
    }
`;

const MenuItem = ({ menu }) => {
    const { title, category, price, img, desc } = menu;

    return (
        <>
            <Wrapper>
                <Img src={img} alt={title} />

                <TextWrapper>
                    <TitleContainer>
                        <Title>{title}</Title>
                        <Price>{price}</Price>
                    </TitleContainer>
                    <Discription>{desc}</Discription>
                </TextWrapper>
            </Wrapper>
        </>
    );
};

export default MenuItem;
