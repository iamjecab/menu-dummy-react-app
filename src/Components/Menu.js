import React, { useState } from "react";
import styled from "styled-components";

import menu from "../data";
import MenuItem from "./MenuItem";

const Wrapper = styled.div`
    width: 80%;
    max-width: 1200px;
    text-align: center;
    color: #102a42;
    margin: auto;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-top: 3rem;
`;

const Nav = styled.nav``;

const Btn = styled.button`
    margin: 17px 10px;
    font-size: 1rem;
    border: none;
    padding: 5px 10px;
    color: #c59d5f;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #c59d5f;
        color: white;
    }
`;

const MenuItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (min-width: 770px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`;

const Menu = () => {
    const [menuList, setMenuList] = useState(menu);

    const filterBreakfast = () => {
        setMenuList(menu.filter((e) => e.category === "breakfast"));
    };

    const filterLunch = () => {
        setMenuList(menu.filter((e) => e.category === "lunch"));
    };

    const filterSnack = () => {
        setMenuList(menu.filter((e) => e.category === "shakes"));
    };

    const filterAll = () => {
        setMenuList(menu);
    };

    return (
        <>
            <Wrapper>
                <Title>Our Menu</Title>
                <Nav>
                    <Btn onClick={filterAll}>All</Btn>

                    <Btn onClick={filterBreakfast}>Breakfast</Btn>

                    <Btn onClick={filterLunch}>Lunch</Btn>

                    <Btn onClick={filterSnack}>Shakes</Btn>
                </Nav>
                <MenuItemWrapper>
                    {menuList.map((menuItem) => {
                        return <MenuItem key={menuItem.id} menu={menuItem} />;
                    })}
                </MenuItemWrapper>
            </Wrapper>
        </>
    );
};

export default Menu;
