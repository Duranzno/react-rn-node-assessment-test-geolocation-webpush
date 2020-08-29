import Pusher from 'pusher';
const pusherConfig = {
  channel: 'sosafe-data-channel',
  event: 'sosafe-data-event',
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trigger(data: any, channel?: string, event?: string): void {
  const pusher = new Pusher({
    appId: '1063660',
    key: '605ff04b821c4a21d109',
    secret: '574d241f013461101120',
    cluster: 'us2',
    useTLS: true,
    keepAlive: true,
  });

  console.log(pusher);
  pusher.trigger(channel || pusherConfig.channel, event || pusherConfig.event, data);
}
