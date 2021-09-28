import { sleep, randomDelay } from "../delay"
async function resetHandler (req, res) {
  await sleep(randomDelay)
  res.status(200)
    .json({
    "message": "Password successfully updated."
})
}
export default resetHandler