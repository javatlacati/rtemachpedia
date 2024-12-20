import { type Paragraph } from './Paragraph';

export interface Lyric {
  id: number;
  title: string;
  authors: string[];
  paragraphs: Paragraph[];
  video?: YoutubeVideo;
}

export interface YoutubeVideo {
  id: string;
  start?: number;
  end?: number;
}
