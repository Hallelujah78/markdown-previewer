import React, { useState } from "react";
import PropTypes from "prop-types";

//styles
import { Wrapper, Content } from "./Editor.styles";

const Editor = ({ value, onChange }) => {

  return (
    <Wrapper>
      <label id='editor-label' htmlFor='editor'>Editor</label>
      <Content id="editor" value={value} onChange={onChange}></Content>
    </Wrapper>
  );
};

export default Editor;

// everytime editor contents changes => update the setState
// everytime the state changes => update the previewer
