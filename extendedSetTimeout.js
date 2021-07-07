/**
 * This method comes handy when you need to create time outs with a duration bigger than the maximum duration
 * of the NodeJS in-built method setTimeout (2147483647 = (2^31)-1)
 * 
 * @author 5antos#4876
 * @param {number} ms Time value in milliseconds (timer)
 * @returns {void}
 */

function extendedSetTimeout(ms) {
  const biggestInt = (2**31)-1
  const max = ms > biggestInt ? biggestInt : ms

  setTimeout(async () => {
    if (ms > max) extendedSetTimeout(ms - max)
    else {
      // Code to run when the timer ends
    }
  }, max)
}