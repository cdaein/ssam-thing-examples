// TODO:
// - draw somewhat complex shapes on canvas and export as SVG on keypress
// - use solid and gradient colors
// - dashed line
// - blend mode

import { ssam, type Sketch, type SketchSettings } from "ssam";
import * as g from "@thi.ng/geom";
import { draw } from "@thi.ng/hiccup-canvas";
import { downloadWithMime } from "@thi.ng/dl-asset";
import { serialize } from "@thi.ng/hiccup";

export const sketch: Sketch<"2d"> = ({ wrap, context: ctx, width, height }) => {
  // create shapes using thi.ng/geom
  const bgRect = g.rect([0, 0], [width, height], { fill: "#aaa" });
  const circ1 = g.circle([300, 300], 160, { fill: "blue" });
  const circ2 = g.circle([500, 500], 240, {
    fill: "white",
    stroke: "black",
    weight: 10,
  });
  const group1 = g.group({}, [bgRect, circ1, circ2]);

  window.addEventListener("keypress", (ev: KeyboardEvent) => {
    // press s to save as SVG
    if (ev.key === "s") {
      const src = g.asSvg(
        g.svgDoc({ viewBox: `0 0 ${width} ${height}`, stroke: null }, group1),
      );
      console.log(src);

      downloadWithMime(`svg-export.svg`, serialize(src), {
        mime: "image/svg+xml",
      });
    }
  });

  wrap.render = () => {
    draw(ctx, group1);
  };
};

export const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  filename: import.meta.url?.split("/").pop()?.split(".")[0] || undefined,
};

ssam(sketch, settings);
