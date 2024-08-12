// oklab gradient

import { hsv, mix, oklab, rgb } from "@thi.ng/color";
import * as g from "@thi.ng/geom";
import { draw } from "@thi.ng/hiccup-canvas";
import { Sketch, SketchSettings, ssam } from "ssam";

const sketch: Sketch<"2d"> = ({ wrap, context: ctx, width, height }) => {
  // create two colors
  // need conversion from HSV -> OKLAB
  const colA = oklab(rgb(hsv(0, 1, 1)));
  const colB = oklab(rgb(hsv([0.6, 1, 1])));

  // shapes
  const margin = 0.08;
  const gap = 0.012;

  const numStops = 24;
  const rects = Array.from({ length: numStops }, (_, i) => {
    // generate oklab gradient colors
    const mid = mix(oklab(), colA, colB, i / numStops);

    return g.rectWithCentroid(
      [
        width * (margin + (i * (1 - margin * 2)) / (numStops - 1)),
        height * 0.5,
      ],
      [width * ((1 - margin * 2) / (numStops - 1) - gap), height * 0.7],
      {
        fill: mid,
      },
    );
  });

  wrap.render = ({ width, height }) => {
    ctx.fillStyle = `gray`;
    ctx.fillRect(0, 0, width, height);

    draw(ctx, g.group({}, rects));
  };
};

const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  filename: import.meta.url?.split("/").pop()?.split(".")[0] || undefined,
};

ssam(sketch, settings);
