import { sleep, randomDelay } from "./delay"
async function signinHandler (req, res) {
  await sleep(randomDelay)
  res.status(200)
    .json({
    "access_token": "2|FPGlkVE1Dj6a80NJvgHP5ML5I4CaWZzR3lFa95xG",
})
}
export default signinHandler
