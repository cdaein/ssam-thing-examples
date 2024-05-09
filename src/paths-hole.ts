import {
  complexPolygon,
  flip,
  group,
  polygon,
  type Polygon,
} from "@thi.ng/geom";
import { draw } from "@thi.ng/hiccup-canvas";
import { Sketch, SketchSettings, ssam } from "ssam";

export const sketch: Sketch<"2d"> = ({ wrap, context: ctx }) => {
  const poly1 = polygon([
    [100, 150],
    [500, 150],
    [700, 400],
    [500, 700],
    [300, 700],
    [100, 400],
  ]);

  const poly2 = polygon([
    [300, 300],
    [350, 300],
    [350, 350],
    [300, 350],
  ]);

  // NOTE: need casting for flip() return
  const combined = complexPolygon(poly1, [flip(poly2) as Polygon]);

  wrap.render = ({ width, height }) => {
    ctx.fillStyle = `gray`;
    ctx.fillRect(0, 0, width, height);

    draw(ctx, group({ fill: "blue", translate: [80, 50] }, [combined]));
    draw(ctx, group({ stroke: "yellow", weight: 2 }, [poly1, poly2]));
  };
};

export const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: true,
  filename: import.meta.url?.split("/").pop()?.split(".")[0] || undefined,
};

ssam(sketch, settings);
