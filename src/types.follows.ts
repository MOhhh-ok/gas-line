import { Event } from './types.base';

export interface FollowEvent extends Event {
  type: 'follow';
  follow: {
    /**
     * true: User unblocked.
     * false: User added friend.
     *
     * This is not guaranteed to be accurate for "friend addition" and "unblock". */
    isUnblocked: boolean;
  };
}

export interface UnfollowEvent extends Event {
  type: 'unfollow';
}
