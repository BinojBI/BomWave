"use client";

import { FiPlus, FiMic, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";

export default function InputOverlay() {
  // State to track the input content
  const [text, setText] = useState("");

  // Determine the number of rows based on content
  // If text is empty or has one line, use 1 row. Otherwise, count the lines.
  const lines = text.split("\n").length;
  const rows = Math.max(1, lines); // Ensure minimum of 1 row

  // Determine which icon to display based on whether text has been entered
  const isInputEmpty = text.trim() === "";
  const RightIcon = isInputEmpty ? FiMic : FiChevronRight;

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="flex items-start bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 w-3/4 max-w-md">
        {/* Icon aligned to the top */}
        <FiPlus className="text-white-700 mt-1 mr-2 flex-shrink-0" size={20} />

        {/* Textarea with Dynamic Rows */}
        <textarea
          rows={rows} // Dynamic rows based on content
          value={text}
          onChange={(e) => setText(e.target.value)} // Update state on change
          placeholder="Ask us anything"
          className="flex-1 bg-transparent placeholder-white text-sm outline-none text-white-700 resize-none h-auto leading-normal" // Added leading-normal
        />

        {/* Conditional Right Icon */}
        <RightIcon
          className="text-white-700 mt-1 ml-2 flex-shrink-0"
          size={20}
        />
      </div>
    </div>
  );
}
