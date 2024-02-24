import { ssam, type Sketch, type SketchSettings } from "ssam";
import * as g from "@thi.ng/geom";
import { draw } from "@thi.ng/hiccup-canvas";

export const sketch: Sketch<"2d"> = ({ context: ctx, width, height }) => {
  const rect1 = g.rect([300, 300], [420, 250], { fill: "white" });

  // draw from center
  const rect2 = g.rectWithCentroid([300, 300], [120, 120], { fill: "blue" });

  const circ1 = g.circle([200, 490], 120);

  // draw from 2 points on circumference
  const circ2 = g.circleFrom2Points([360, 360], [400, 400], {
    stroke: "blue",
    fill: "white",
    weight: 3,
  });

  const ln = g.line([380, 500], [680, 200], { stroke: "red", weight: 20 });

  const ell = g.ellipse([140, 30], {
    translate: [600, 540],
    rotate: Math.PI / 4,
  });

  const tri = g.polygon([
    [360, 600],
    [400, 660],
    [320, 660],
  ]);

  ctx.fillStyle = `gray`;
  ctx.fillRect(0, 0, width, height);

  draw(ctx, rect1);
  draw(ctx, rect2);

  // use group
  draw(ctx, g.group({ fill: "black" }, [circ1, circ2, ln]));
  draw(ctx, g.group({ fill: "pink" }, [ell, tri]));
};

export const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  filename: import.meta.url?.split("/").pop()?.split(".")[0] || undefined,
};

ssam(sketch, settings);
