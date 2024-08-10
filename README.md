# ssam-thing-examples

A collection of creative coding example sketches using [Ssam.js](https://github.com/cdaein/ssam) and [Thing Umbrella](https://github.com/thi-ng/umbrella).

## How to run

1. Clone this repo.
2. `npm install`
3. `SKETCH=<sketch-file-name> npm run dev`

## Examples

|                 source file                 |                     result                     |                 notes                 |
| :-----------------------------------------: | :--------------------------------------------: | :-----------------------------------: |
|   [`basic-shapes`](./src/basic-shapes.ts)   |   ![basic shapes](./output/basic-shapes.png)   |             basic drawing             |
| [`color-gradient`](./src/color-gradient.ts) | ![color gradient](./output/color-gradient.png) |         oklab color gradient          |
|     [`image-load`](./src/image-load.ts)     |   ![image loading](./output/image-load.png)    |          load an image file           |
|     [`paths-hole`](./src/paths-hole.ts)     |  ![paths with holes](./output/paths-hole.png)  |   path with a hole (counter-shape)    |
|          [`paths`](./src/paths.ts)          |          ![paths](./output/paths.png)          |   different types of path drawings    |
|     [`svg-export`](./src/svg-export.ts)     |     ![svg export](./output/svg-export.png)     | convert Canvas drawing to an SVG file |
|     [`svg-to-canvas`](svg-to-canvas.ts)     |  ![svg to canvas](./output/svg-to-canvas.png)  |   parse SVG file and draw on Canvas   |
