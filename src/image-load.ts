// TODO:
// - draw image + other shapes on the same canvas

import { ARGB8888, imageFromURL, intBufferFromImage } from "@thi.ng/pixel";
import { ssam, type Sketch, type SketchSettings } from "ssam";
// import image from public directory
import IMG from "/c.png";

export const sketch: Sketch<"2d"> = async ({
  wrap,
  context: ctx,
  width,
  height,
  pixelRatio,
}) => {
  // load image as <img> element
  const img = await imageFromURL(IMG);
  const buf = intBufferFromImage(img, ARGB8888);
  console.log(buf);

  // cubic, linear, nearest
  const resized = buf.resize(
    width * pixelRatio,
    height * pixelRatio,
    "nearest",
  );

  wrap.render = ({ width, height }) => {
    ctx.fillStyle = `gray`;
    ctx.fillRect(0, 0, width, height);

    // ctx.drawImage(img, 0, 0, width, height);

    resized.blitCanvas(ctx);
  };
};

export const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  filename: "image-load",
};

ssam(sketch, settings);
