"use client";

import { FiPlus, FiMic, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";

export default function InputOverlay() {
  // State to track the input content
  const [text, setText] = useState("");

  const lines = text.split("\n").length;
  const rows = Math.max(1, lines); // Ensure minimum of 1 row

  const isMultiline = lines > 1;

  // Determine which icon to display based on whether text has been entered
  const isInputEmpty = text.trim() === "";
  const RightIcon = isInputEmpty ? FiMic : FiChevronRight;
  const borderRadiusClass = isMultiline ? "rounded-4xl" : "rounded-full";
  const isPresentAndMultiline = isInputEmpty || !isMultiline;

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className={`flex items-end bg-white/18 px-4 py-3 w-3/4 max-w-md ${borderRadiusClass}`}
      >
        {/* Icon aligned to the top */}
        <FiPlus className="text-white-700 mr-2 flex-shrink-0" size={20} />

        {/* Textarea with Dynamic Rows */}
        <textarea
          rows={rows} // Dynamic rows based on content
          value={text}
          onChange={(e) => setText(e.target.value)} // Update state on change
          placeholder="Ask us anything"
          className="flex-1 bg-transparent placeholder-white text-sm outline-none text-white-700 resize-none h-auto leading-normal" // Added leading-normal
        />

        {isPresentAndMultiline ? (
          <FiMic className="text-white-700 ml-2 mt-1 flex-shrink-0" size={20} />
        ) : (
          <button
            className="w-8 h-8 bg-white/30 text-white rounded-full flex items-center justify-center shadow-md hover:bg-white/50 transition-colors ml-2 mt-1 flex-shrink-0"
            aria-label="Submit query"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
