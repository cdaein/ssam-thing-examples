import * as g from "@thi.ng/geom";
import { draw } from "@thi.ng/hiccup-canvas";
import { ssam, type Sketch, type SketchSettings } from "ssam";

export const sketch: Sketch<"2d"> = ({ context: ctx }) => {
  // prettier-ignore
  const pts = [
    [150, 100], [200, 150], [300, 50], [400, 150], [500, 50], [600, 150], [650, 100]
  ]

  //----------
  const dots1 = g.points(pts, {
    shape: "circle",
    size: 12,
    stroke: "white",
  });
  const polyln1 = g.polyline(pts, {
    stroke: "blue",
    lineCap: "round",
    lineJoin: "round",
  });
  const group1 = g.group({ weight: 12 }, [polyln1, dots1]);

  //----------
  const dots2 = g.points(pts, {
    size: 20,
  });
  const polyln2 = g.polyline(pts, {
    stroke: "white",
  });
  const group2 = g.group({ stroke: "red", weight: 3, translate: [0, 150] }, [
    polyln2,
    dots2,
  ]);

  //----------
  const path1 = new g.PathBuilder({
    translate: [0, 300],
    stroke: "blue",
    weight: 4,
  });
  path1.moveTo(pts[0]);
  path1.quadraticTo(pts[1], [250, 100]);
  path1.quadraticChainTo([100, 0], true);
  path1.quadraticChainTo([100, 0], true);
  path1.quadraticChainTo([100, 0], true);
  path1.quadraticChainTo([100, 0], true);

  const quadra = g.quadratic(pts[0], pts[1], [250, 100], {
    translate: [0, 320],
  });
  const cbc1 = g.cubicFromQuadratic(pts[0], pts[1], [250, 100], {
    stroke: "white",
    translate: [0, 340],
  });
  const cbc2 = g.cubic(pts[0], [300, 250], [500, -50], pts[6], {
    stroke: "yellow",
    translate: [0, 400],
  });

  // FIX: arcTo() doesn't seem to work?
  const path2 = new g.PathBuilder({ stroke: "red", translate: [0, 500] });
  path2.moveTo(pts[0]);
  path2.arcTo(pts[2], [50, 50], 0, false, false);

  draw(
    ctx,
    g.group({ __background: "#888", stroke: "black", weight: 4 }, [
      group1,
      group2,
      path1.current(),
      quadra,
      cbc1,
      cbc2,
      path2.current(),
    ]),
  );
};

export const settings: SketchSettings = {
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  filename: import.meta.url?.split("/").pop()?.split(".")[0] || undefined,
};

ssam(sketch, settings);
