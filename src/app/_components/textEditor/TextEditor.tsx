"use client";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import dynamic from "next/dynamic";

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
        <QuillEditor
          formats={formats}
          modules={modules}
          className=" w-[800px] h-[500px]"
          value={value}
          theme="snow"
          onChange={setValue}
        ></QuillEditor>
      </div>
      {/* <div className="">
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </div> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(TextEditor), { ssr: false });
