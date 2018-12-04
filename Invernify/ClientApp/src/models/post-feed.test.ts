import PostFeed from "./post-feed";
import {expect} from 'chai';


describe('PostFeed', () => {
    const postFeedTest = new PostFeed();
    it('Is created successfully', () => {
        expect(postFeedTest).not.to.be.null;
    })
});