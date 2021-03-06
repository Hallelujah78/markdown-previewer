import styled from "styled-components";

export const Wrapper = styled.div`
  #preview-label {
    color: white;
    text-align: center;
    font: 1.3rem Inconsolata, monospace;
    width: fit-content;
    position: absolute;
    top: 50vh;
    left: 6vw;
    padding: 5px 10px;
    border-radius: 10px;
    background: #a9a9a9;
    border: solid 2px;
    text-shadow: 0 0 5px #c8c8c8;


    @media only screen and (max-width: 420px) {
      left: 2vw;
    }
  }

  #preview {
    background-color: black;
    background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
    width: 85vw;
    height: auto;

    margin: 0 auto;
    margin-top: 5vh;
    overflow: auto;
    padding: 0.25rem;
    color: white;
    font: 1.3rem Inconsolata, monospace;
    text-shadow: 0 0 5px #c8c8c8;
    resize: none;
    spellcheck: false;

    img {
      max-width: 80vw;
      margin: 0 auto;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1;
      margin: 0;
      margin-top: 1.5rem;
      text-rendering: optimizeLegibility;
    }

    h1 {
      font-size: 2.75rem;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.65rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    h6 {
      font-size: 1rem;
    }

    h2 em,
    h3 em {
      color: grey;
    }

    /* @end */

    small {
      font-size: 65%;
    }

    p {
      margin-top: 0.75rem;
    }

    hr {
      margin: 0.75rem 0;

      opacity: 0.5;
    }

    ol,
    ul {
      margin-top: 0.75rem;
    }

    ol ul,
    ol ol,
    ul ul,
    ul ol {
      margin-left: 2rem;
      margin-bottom: 0.75rem;
    }

    li {
      margin: 0.5em 0;
    }

    abbr {
      font-variant: small-caps;
      font-weight: 600;
      text-transform: lowercase;
      color: #808080;
    }

    abbr[title]:hover {
      cursor: help;
    }

    /* @group Block Quotes */

    blockquote {
      border-left: 5px solid #333;
      padding-left: 0.75em;
      margin-left: calc(-0.75em - 5px);

      font-style: italic;
    }

    blockquote + figcaption {
      display: block;

      margin-top: -1.5rem;
      margin-bottom: 1.5rem;

      font-size: 75%;
      text-align: right;
    }

    blockquote + figcaption:before {
      content: "??? ";

      opacity: 0.05;
    }

    /* @end */

    /* @group Pre-formatted and Code */

    pre {
      overflow: auto;

      margin: 0.75rem 0;
      padding: 0.5rem;

      font-size: 0.875em;
      white-space: pre;

      background-color: #a9a9a9;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    a {
      text-shadow: none;
      color: #a9a9a9;
    }

    code {
      padding: 0 0.25em;

      white-space: pre;
      font-family: Source Code Pro, monospace;

      background-color: #a9a9a9;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    pre code {
      padding: 0;

      word-wrap: normal;
      white-space: pre-wrap;
    }

    pre code,
    pre tt {
      background-color: transparent;
      border: none;
    }

    /* @end */

    /* @group Tables */

    table {
      margin: 0.25rem 0;
      padding: 0;

      border-collapse: collapse;
    }
    table tr {
      margin: 0;
      padding: 0;

      border-top: 1px solid #ccc;
      background-color: #a9a9a9;
    }
    table tr:nth-child(2n) {
      background-color: #a9a9a9;
    }

    table tr th {
      margin: 0;
      padding: 0.35em 0.75em;

      font-weight: bold;
      text-align: left;

      border: 1px solid #ccc;
    }

    table tr td {
      margin: 0;

      word-wrap: break-all;
      text-align: left;

      border: 1px solid #ccc;
    }

    table tr th :first-child,
    table tr td :first-child {
      margin-top: 0;
    }
    table tr th :last-child,
    table tr td :last-child {
      margin-bottom: 0;
    }
  }
`;
