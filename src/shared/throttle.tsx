export const throttle = (fn: Function, delay: number) => {
  let timer: number | undefined
  return (...args: any[]) => {
    if (timer) return
    fn(...args)
    timer = setTimeout(() => {
      timer = undefined
    }, delay)
  }
}
