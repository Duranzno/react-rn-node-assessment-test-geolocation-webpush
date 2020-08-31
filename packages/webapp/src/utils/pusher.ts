import { SosafeData } from '@sosafe-test/common';
// import Pusher from 'pusher-js'
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
export const submitFormData = async (
  data: SosafeData,
): Promise<Response> => {
  try {
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};
