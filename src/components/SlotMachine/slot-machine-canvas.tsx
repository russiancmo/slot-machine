import React, { useMemo, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Application } from "pixi.js";
import Bunny from "./assets/bunny.png";
import Fox from "./assets/fox.png";
import Crocodile from "./assets/crocodile.png";
import Turtle from "./assets/turtle.png";
import Sheep from "./assets/sheep.png";
import Hippo from "./assets/hippo.png";
import Lion from "./assets/Lion.png";
import Panther from "./assets/panther.png";
import Bird from "./assets/bird.png";
import { tweening } from "./functions/tweening";
import { reels } from "./functions/game-logic";
import { lerp } from "./functions/lerp";
import { ReelType } from "./slot-machine.types";
import { SlotMachineModel } from "../../store/SlotMachine";

export const SlotMachineCanvas = (
  pixi: Application,
  store: SlotMachineModel
) => {
  PIXI.Assets.load([
    Bunny,
    Fox,
    Crocodile,
    Turtle,
    Sheep,
    Hippo,
    Lion,
    Panther,
    Bird,
  ]).then(onAssetsLoaded);

  const REEL_WIDTH = 160;
  const SYMBOL_SIZE = 150;

  function onAssetsLoaded() {
    const slotTextures = [
      PIXI.Texture.from(Bunny),
      PIXI.Texture.from(Fox),
      PIXI.Texture.from(Crocodile),
      PIXI.Texture.from(Turtle),
      PIXI.Texture.from(Sheep),
      PIXI.Texture.from(Hippo),
      PIXI.Texture.from(Lion),
      PIXI.Texture.from(Panther),
      PIXI.Texture.from(Bird),
    ];

    const reelContainer = new PIXI.Container();
    for (let i = 0; i < 5; i++) {
      const rc = new PIXI.Container();
      rc.x = i * REEL_WIDTH;
      reelContainer.addChild(rc);

      const reel: ReelType = {
        container: rc,
        symbols: [],
        position: 0,
        previousPosition: 0,
        blur: new PIXI.filters.BlurFilter(),
      };
      reel.blur.blurX = 0;
      reel.blur.blurY = 0;
      rc.filters = [reel.blur];

      const indexes = store.combinations[i];

      for (let j = 0; j < 4; j++) {
        const symbol = new PIXI.Sprite(
          j === 0 ? slotTextures[0] : slotTextures?.[indexes?.[j - 1]]
        );
        symbol.y = j * SYMBOL_SIZE;
        symbol.scale.x = symbol.scale.y = Math.min(
          SYMBOL_SIZE / symbol.width,
          SYMBOL_SIZE / symbol.height
        );
        symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
        reel.symbols.push(symbol);
        rc.addChild(symbol);
      }
      reels.push(reel);
    }
    pixi.stage.addChild(reelContainer);

    pixi.ticker.add(() => {
      for (let i = 0; i < reels.length; i++) {
        const r = reels[i];
        r.blur.blurY = (r.position - r.previousPosition) * 8;
        r.previousPosition = r.position;

        for (let j = 0; j < r.symbols.length; j++) {
          const s = r.symbols[j];
          const prevy = s.y;
          s.y =
            ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
          if (s.y < 0 && prevy > SYMBOL_SIZE) {
            s.texture =
              slotTextures[Math.floor(Math.random() * slotTextures.length)];
            s.scale.x = s.scale.y = Math.min(
              SYMBOL_SIZE / s.texture.width,
              SYMBOL_SIZE / s.texture.height
            );
            s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
          }
        }
      }
    });
  }

  pixi.ticker.add(() => {
    const now = Date.now();
    const remove = [];
    for (let i = 0; i < tweening.length; i++) {
      const t = tweening[i];
      const phase = Math.min(1, (now - t.start) / t.time);

      t.object[t.property] = lerp(
        t.propertyBeginValue,
        t.target,
        t.easing(phase)
      );
      if (t.change) t.change(t);
      if (phase === 1) {
        t.object[t.property] = t.target;
        if (t.complete) t.complete(t);
        remove.push(t);
      }
    }
    for (let i = 0; i < remove.length; i++) {
      tweening.splice(tweening.indexOf(remove[i]), 1);
    }
  });
};
