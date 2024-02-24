import type { Sketch, SketchMode, SketchSettings } from "ssam";

declare global {
  interface Window {
    SKETCH: string;
  }
}

type SsamSketchModule = {
  sketch: Sketch<SketchMode>;
  settings: SketchSettings;
};

try {
  const importedModule: SsamSketchModule = await import(
    // defined in env via CLI
    /* @vite-ignore */
    `./${window.SKETCH}.ts`
  );
} catch {
  console.error(`module import error`);
}
