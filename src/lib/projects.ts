import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const statusRank: Record<Project['data']['status'], number> = {
  'in-progress': 0,
  shipped: 1,
};

/** In-progress projects first, then shipped; manual `order` within each group. */
export async function getProjectsSorted(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) =>
      statusRank[a.data.status] - statusRank[b.data.status] || a.data.order - b.data.order,
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjectsSorted()).filter((project) => project.data.featured);
}
