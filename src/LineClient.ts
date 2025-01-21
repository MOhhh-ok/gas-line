import { UserProfile } from './types';

export class LineClient {
  constructor(private channelAccessToken: string) {}

  getUserProfile(userId: string): UserProfile {
    const url = `https://api.line.me/v2/bot/profile/${userId}`;
    const response = UrlFetchApp.fetch(url, {
      headers: { Authorization: `Bearer ${this.channelAccessToken}` },
    });
    return JSON.parse(response.getContentText());
  }
}
