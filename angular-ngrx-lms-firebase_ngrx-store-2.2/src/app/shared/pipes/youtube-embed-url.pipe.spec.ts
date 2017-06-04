import { YoutubeEmbedUrlPipe } from './youtube-embed-url.pipe';

describe('YoutubeEmbedUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeEmbedUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
