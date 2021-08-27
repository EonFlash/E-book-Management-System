import { createGlobalStyle } from "styled-components";
import bg from "../img/bg.jpg";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body{
    font-family: 'Inter',sans-serif;
}

button{
    font-family: 'Inter',sans-serif;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid white;
    border-radius: 15px;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: white;
        color: black;

    }
}


   

h1{
    font-weight: lighter;
        font-size: 4rem;
        color: white;

}

h2{
        font-weight: lighter;
        font-size: 4rem;
        color: white;

    }
h3{
        color: white;

    }
h4{
        font-weight: bold;
        color: white;
        
    }

    p{
        padding: 3rem 0rem;
        color: white;
        font-size: 1.4rem;
        line-height: 150%;
    }


`;

export default GlobalStyle;
