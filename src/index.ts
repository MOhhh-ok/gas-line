interface DoPostEvent {
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

export interface LineWebhookEvent {
  destination: string;
  events: LineMessageEvent[];
}

export interface LineMessageEvent {
  type: 'message';
  replyToken: string;
  message: LineMessageText | any;
}

export interface LineMessage {
  id: string;
  type: 'text' | any;
}

export interface LineMessageText extends LineMessage {
  type: 'text';
  quoteToken: string;
  text: string;
}

export function parsePostEvent(e: DoPostEvent): LineWebhookEvent {
  return JSON.parse(e.postData.contents);
}
