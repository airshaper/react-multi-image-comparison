import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ReactMultiImageComparison } from "./ReactMultiImageComparison.jsx";
import "./style.scss";

const container = document.getElementById("app");
const root = createRoot(container);

const image1 = new URL("../images/1.jpg", import.meta.url);
const image2 = new URL("../images/2.jpg", import.meta.url);
const image3 = new URL("../images/3.jpg", import.meta.url);
const image4 = new URL("../images/3.jpg", import.meta.url);

root.render(
  <div style={{ width: "1000px" }}>
    <StrictMode>
      <ReactMultiImageComparison
        imagePaths={[image1, image2, image3]}
        imageDescs={["Basic", "Regular", "Advanced", "Optimized"]}
      />
    </StrictMode>
  </div>
);
