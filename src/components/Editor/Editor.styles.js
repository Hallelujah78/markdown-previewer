import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;


  #editor-label {
    color: white;
    text-align: center;
    font: 1.3rem Inconsolata, monospace;
    width: fit-content;
    position: absolute;
    top: 3.5vh;
    left: 2vw;
    padding: 5px 10px;
    border-radius: 10px;
    background: #a9a9a9;
    border: solid 2px;


    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 350px) {
      left: 1vw;
    }

    @media only screen and (min-width: 480px) {
      left: 6.5vw;
    }


    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      left: 10vw;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      left: 11vw;
    }

  }
`;

export const Content = styled.textarea`
  background-color: black;
  background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  width: 70vw;
  height: 35vh;
  margin: 0 auto;
  overflow: auto;
  padding: 2rem;
  color: white;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px #c8c8c8;
  resize: none;
  spellcheck: false;
`;
