"use client";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: [1, 2, 3, 4, 5, 6] }],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ color: [] }, { background: [] }],
    [{ align: [] }],
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
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
  "clean",
  "script",
];
const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-start gap-5 w-full h-full p-2">
      <QuillEditor
        formats={formats}
        modules={modules}
        className="Quill  h-[calc(100%-70px)]"
        value={value}
        theme="snow"
        onChange={setValue}
      />

      <div
        className="flex items-start text-start w-full h-full p-2 bg-slate-50"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TextEditor), { ssr: false });
