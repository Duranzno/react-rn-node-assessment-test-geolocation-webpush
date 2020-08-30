import { SosafeData } from "sosafe-assesment-test-shared-data"
// import Pusher from 'pusher-js'
import axios, { AxiosResponse } from 'axios'
// const pusherConfig = {
//   app_id: process.env.REACT_APP_PUSHER_APP_ID,
//   key: process.env.REACT_APP_PUSHER_KEY,
//   secret: process.env.REACT_APP_PUSHER_SECRET,
//   cluster: process.env.REACT_APP_PUSHER_CLUSTER,
//   channel: 'private-channel',
//   event: 'client-upload-data',
// }

// export const subscribeToChannel =  (data: SosafeData) => {
// Pusher.logToConsole = true
// const pusher = new Pusher(pusherConfig.key || '', {
//   cluster: pusherConfig.cluster,
// })
// const channel = pusher.subscribe(pusherConfig.channel)

// channel.bind('pusher:subscription_succeeded', function () {
//   channel.trigger(pusherConfig.event, { data })
// })
// }
export const submitFormData = async (data: SosafeData): Promise<AxiosResponse> =>
  await axios.post(`${process.env.REACT_APP_SERVER_API}/upload`, data)
