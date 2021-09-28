const data = {
    "data": {
        "id": 1,
        "name": "Sanoj",
        "email": "sanoj@nextjsauth.test",
    },
    "status": "success"
};

import { sleep, randomDelay } from "./delay"
async function profileHandler (req, res) {
  await sleep(randomDelay)
  res.status(200)
    .json(data)
}
export default profileHandler
