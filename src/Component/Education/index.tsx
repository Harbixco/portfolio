import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import file from "../../Images/file.pdf";

export default function Index() {
  return (
    <AnimatedPage>
      <button className="text-primary">
        <a href={file}>
          Download
        </a>
      </button>
    </AnimatedPage>
  );
}
