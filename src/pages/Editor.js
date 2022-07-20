import React from "react";
import Header from "./../components/Header";
import Section from "./../components/Section";
import MdEditor from "./../components/MdEditor";
import MdPreview from "./../components/MdPreview";
function Editor() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="flex h-screen w-screen">
        <Section></Section>
        <MdEditor></MdEditor>
        <MdPreview></MdPreview>
      </div>
    </>
  );
}

export default Editor;
