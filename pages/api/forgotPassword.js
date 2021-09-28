import { sleep, randomDelay } from "./delay"
async function forgotHandler (req, res) {
  await sleep(randomDelay)
  res.status(200)
    .json({
    "message": "Password reset token sent.",
    "status": "success"
})
}
export default forgotHandler
