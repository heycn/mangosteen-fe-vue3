export const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let timer: number | undefined
  let result: ReturnType<T>
  return (...args: Parameters<T>) => {
    if (timer) return
    fn(...args)
    timer = setTimeout(() => {
      timer = undefined
    }, delay)
    return result
  }
}
