import { Event } from './types.base';
import { MessageEvent } from './types.message';
import { OtherEvent } from './types.others';

export interface WebhookData {
  destination: string;
  events: (MessageEvent | OtherEvent)[];
}

export interface GasDoPostEvent {
  contextPath: string;
  parameters: Record<string, any>;
  parameter: Record<string, any>;
  queryString: string;
  contentLength: number;
  postData: {
    contents: string;
    length: number;
    name: string;
    type: string;
  };
}

export interface UserProfile {
  displayName: string;
  userId: string;
  language?: string;
  pictureUrl?: string;
  statusMessage?: string;
}
