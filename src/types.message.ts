import { Event } from './types.base';

export interface MessageEvent extends Event {
  type: 'message';
  replyToken: string;
  message: TextMessage | OtherMessage;
}

export interface Message {
  id: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'location' | 'sticker';
}

export interface TextMessage extends Message {
  type: 'text';
  quoteToken: string;
  text: string;
  emojis?: any[];
}

export interface OtherMessage extends Message {
  type: 'image' | 'video' | 'audio' | 'file' | 'location' | 'sticker';
}
