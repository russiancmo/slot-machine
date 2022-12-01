export const tweening: any = [];
export function tweenTo(
  object: any,
  property: any,
  target: any,
  time: any,
  easing: any,
  onchange: any,
  oncomplete: any
) {
  const tween = {
    object,
    property,
    propertyBeginValue: object[property],
    target,
    easing,
    time,
    change: onchange,
    complete: oncomplete,
    start: Date.now(),
  };

  tweening.push(tween);
  return tween;
}
