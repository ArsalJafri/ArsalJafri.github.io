import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type PostKind = Post['data']['kind'];

/** Drafts show up in `astro dev` but never in a production build. */
const isVisible = (post: Post) => import.meta.env.DEV || !post.data.draft;

const newestFirst = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', isVisible);
  return posts.sort(newestFirst);
}

export async function getRecentPosts(count: number): Promise<Post[]> {
  return (await getPublishedPosts()).slice(0, count);
}

export async function getPostsByKind(kind: PostKind): Promise<Post[]> {
  return (await getPublishedPosts()).filter((post) => post.data.kind === kind);
}

export async function getPostsForProject(projectId: string): Promise<Post[]> {
  return (await getPublishedPosts()).filter((post) => post.data.project?.id === projectId);
}

/** Rough reading time at ~230 words per minute. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
