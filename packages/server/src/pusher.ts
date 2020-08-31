/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Pusher from 'pusher';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trigger(
  data: object,
  channel?: string,
  event?: string,
): void {
  const pusher = new Pusher({
    appId: process.env.REACT_APP_PUSHER_APP_ID!,
    key: process.env.REACT_APP_PUSHER_KEY!,
    secret: process.env.REACT_APP_PUSHER_SECRET!,
    cluster: process.env.REACT_APP_PUSHER_CLUSTER!,
    useTLS: true,
    keepAlive: true,
  });

  pusher.trigger(
    channel || "sosafe-data-channel",
    event || "sosafe-data-event",
    data,
  );
}
