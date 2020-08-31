import { submitFormData } from './pusher'
import { SosafeDataTemplate } from '@sosafe-test/common'

describe('Testing Pusher Client Event Functionality', () => {
  test('should push data to client and check on dashboard manually', async () => {
    const v = await submitFormData(SosafeDataTemplate)
    expect(v.status).toBe(200)
    expect(v.statusText).toBe("OK")
  })
})
