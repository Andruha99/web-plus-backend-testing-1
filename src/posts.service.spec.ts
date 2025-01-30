import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

  it("should add a new post", () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);
    expect(newPost.text).toEqual(post.text);
  });

  it("should find a post", () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);
    const foundPost = postsService.find(newPost.id);

    expect(foundPost).toMatchObject(newPost);
  });
});
