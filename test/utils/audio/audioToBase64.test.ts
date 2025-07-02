import {audioUrlToBase64} from '../../../src/utils/audio/audioToBase64';

beforeEach(() => {
  const audioMock = new Blob(['audio fake to Base64'], { type: 'audio/mpeg' });
  global.fetch = vi.fn(() => Promise.resolve(new Response(audioMock)));
  
})

test('Audio To Base 64', async () => {
  const base64Sound = await audioUrlToBase64('./cat.mp3');
  expect(base64Sound).toBeTruthy();
});