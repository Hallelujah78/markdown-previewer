import React, { useState } from "react";
import PropTypes from "prop-types";
import marked from "marked";

//styles
import { Wrapper } from "./MarkdownPreviewer.styles";

//components
import Editor from "../../components/Editor";

const MarkdownPreviewer = () => {
  const [value, setValue] = useState(
    `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props){
  super(props);
this.state = {
  input: '',
  messages: []
};};
  // Change code above this line
  render() {
    return <div />
  }
};
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Learning With | freeCodeCamp | Is Amazing
  ------------ | ------------- | -------------
  You can learn | HTML + CSS | Javascript and more.
  What a | time to | be alive.

  - There are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `
  );

  const onChange = (e) => {
    setValue(e.target.value);
    const output = { __html: marked(value) };
  };
  marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  //const output = {__html:marked(value)};

  return (
    <Wrapper>
      <Editor onChange={onChange} value={value}></Editor>
      <label id='preview-label' htmlFor='preview'>Markdown</label>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(value) }} />
    </Wrapper>
  );
};

export default MarkdownPreviewer;
