export interface Event {
  type:
    | 'message'
    | 'follow'
    | 'unfollow'
    | 'join'
    | 'leave'
    | 'postback'
    | 'beacon';
  mode: 'active' | 'standby';
  timestamp: number;
  source?: SourceUser | SourceGroup | SourceRoom;
  webhookEventId: string;
  deliveryContext: {
    isRedelivery: boolean;
  };
}

export interface SourceUser {
  type: 'user';
  userId: string;
}

export interface SourceGroup {
  type: 'group';
  groupId: string;
  userId?: string;
}

export interface SourceRoom {
  type: 'room';
  roomId: string;
  userId?: string;
}
