export class LineClient {
  constructor(private channelAccessToken: string) {}

  async getUserProfile(userId: string) {
    const url = `https://api.line.me/v2/bot/profile/${userId}`;
    const response = UrlFetchApp.fetch(url, {
      headers: { Authorization: `Bearer ${this.channelAccessToken}` },
    });
    return JSON.parse(response.getContentText());
  }
}
