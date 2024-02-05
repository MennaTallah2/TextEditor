"use client";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import ReactQuill, { Quill } from "react-quill";

// let SizeStyle = Quill.import("attributors/style/size");
// SizeStyle.whitelist = ["10px", "15px", "18px", "20px", "32px", "54px"];
// Quill.register(SizeStyle, true);
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],

    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [],
      },
    ],
    [{ background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
];
const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="h-full w-full flex items-center m-2 flex-col">
        <ReactQuill
          formats={formats}
          modules={modules}
          className=" w-[800px] h-[500px]"
          value={value}
          theme="snow"
          onChange={setValue}
        ></ReactQuill>
      </div>
      {/* <div className="bg-gray-">
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </div> */}
    </>
  );
};

export default TextEditor;
