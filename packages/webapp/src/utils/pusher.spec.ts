import { submitFormData } from './pusher'

describe('Testing Pusher Client Event Functionality', () => {
  test('should push data to client and check on dashboard manually', async () => {
    submitFormData({
      filters: [],
      location: { latitude:1,longitude:1 },
      name: 'name',
      scores: [],
    })
  })
})
