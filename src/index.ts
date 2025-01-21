import { GasDoPostEvent, WebhookData } from './types';
export * from './types';
export * from './types.base';
export * from './types.message';
export * from './types.others';
export * from './LineClient';

export function parsePostEvent(e: GasDoPostEvent): WebhookData {
  return JSON.parse(e.postData.contents);
}
