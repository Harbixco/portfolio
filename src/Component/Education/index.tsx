import React from "react";
import AnimatedPage from "../Animated/AnimatedPage";
import file from "../../Images/file.pdf";

export default function Index() {
  return (
    <AnimatedPage>
      <a href="../../Images/file.pdf" download={file}>
        Download
      </a>
    </AnimatedPage>
  );
}
