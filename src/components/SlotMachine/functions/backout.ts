export function backout(amount: any) {
  return (t: any) => --t * t * ((amount + 1) * t + amount) + 1;
}
