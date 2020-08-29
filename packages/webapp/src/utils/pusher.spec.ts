import { submitToChannel } from './pusher'

describe('Testing Pusher Client Event Functionality', () => {
  test('should push data to client and check on dashboard manually', async () => {
    submitToChannel({
      filters: [],
      location: { data: 'empty' },
      name: 'name',
      scores: [],
    })
  })
})
