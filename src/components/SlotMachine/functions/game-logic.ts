import { backout } from "./backout";
import { tweenTo } from "./tweening";

let running = false;
export const reels: any = [];

const array:any= []
export async function startPlay() {
  return new Promise((resolve, reject) => {
    if (running) return;
    running = true;

    for (let i = 0; i < reels.length; i++) {
      const r = reels[i];
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      array.push({r, target})
      const time = 2500 + i * 600 + extra * 600;
      tweenTo(
        r,
        "position",
        target,
        time,
        backout(0.5),
        null,
        i === reels.length - 1 ? reelsComplete : null
      );
    }

    resolve(true);
  });
}

function reelsComplete() {
//   const arr: any[][] = [];
//   for (let i = 0; i < reels.length; i++) {
//     arr.push(reels[i].container.children);
//   }

//   //const rows = arr[0]?.map((_, colIndex) => arr?.map((row) => row[colIndex]));

//   const animals = reels.map((item:any) =>
//     item.symbols.map((item:any) => item.texture.baseTexture.resource.src)
//   );

  running = false;
}
