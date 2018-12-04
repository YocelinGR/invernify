import PostFeed from "../models/post-feed";
import * as faker from 'faker';

faker.seed(1);

export const createMock = (image: string) => {
    const x = new PostFeed();
    x.authorName = faker.name.findName();
    x.title = faker.lorem.words(7);
    x.summary = faker.lorem.words(20);
    x.date = faker.date.past().toISOString();
    x.permalink = faker.internet.url();
    x.thumbnail = image;
    x.tags = [faker.lorem.word()];
    return x;
};