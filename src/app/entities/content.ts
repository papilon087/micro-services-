export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validatorContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghtValid = this.validatorContentLength(content);

    if (!isContentLenghtValid) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }
}
