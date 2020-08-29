/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { trigger } from './pusher';
describe('testing trigger manually', () => {
  test('should ', () => {
    expect(2 + 2).toBe(4);
    trigger({ data: 'test from server' }, 'server-test-channel', 'server-test-event');
  });
});
