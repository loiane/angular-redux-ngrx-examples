import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeEmbedUrl'
})
export class YoutubeEmbedUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'https://www.youtube.com/embed/' + value;
  }

}
