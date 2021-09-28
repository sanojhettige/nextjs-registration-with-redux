const delayRange = {
  min: 1,
  max: 3
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const randomDelay = Math.floor(Math.random() * (delayRange.max - delayRange.min) * 1000) + delayRange.min * 1000

export { sleep, randomDelay };