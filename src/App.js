import React from "react";
import styled from "styled-components";

import GlobalStyles from "./Components/GlobalStyles";
import Menu from "./Components/Menu";

const AppContainer = styled.div``;

function App() {
    return (
        <>
            <GlobalStyles />
            <Menu />
        </>
    );
}

export default App;
