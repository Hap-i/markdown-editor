import React, { useState } from "react";
// const marked = require('marked')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')

import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

export default function MdEditor() {
  const [mdText, setmdText] = useState();
  function handleChange(e) {
    console.log("handeling!");
    setmdText(e.target.value);
  }
  return (
    <div className="flex">
      <textarea
        id="md-editor"
        className="bg-black h-full w-96 text-white"
        onChange={handleChange}
      ></textarea>
      <div className="preview">
        <ReactMarkdown remarkPlugins={[gfm]} children={mdText} />
      </div>
    </div>
  );
}
