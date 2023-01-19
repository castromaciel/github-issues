export const sleep = (
  seconds: number = 1
):Promise<boolean> => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, seconds * 1000)
})
