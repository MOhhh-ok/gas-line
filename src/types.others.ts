import { Event } from './types.base';

export interface OtherEvent extends Event {
  type: 'follow' | 'unfollow' | 'join' | 'leave' | 'postback' | 'beacon';
}
