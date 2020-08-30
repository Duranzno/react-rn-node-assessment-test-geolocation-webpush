import Pusher from 'pusher';
import { pusherConfig, SosafeData } from "sosafe-assesment-test-shared-data";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trigger(
  data: SosafeData,
  channel?: string,
  event?: string,
): void {
  const pusher = new Pusher({
    appId: pusherConfig.appId,
    key: pusherConfig.key,
    secret: pusherConfig.secret,
    cluster: pusherConfig.cluster,
    useTLS: true,
    keepAlive: true,
  });

  console.log(pusher);
  pusher.trigger(
    channel || pusherConfig.channel,
    event || pusherConfig.event,
    data,
  );
}
