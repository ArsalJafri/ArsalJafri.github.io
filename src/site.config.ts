/**
 * Site-wide settings. Change your name, tagline, and links here, in one place.
 * Leave a link as an empty string to hide it everywhere.
 */
export const SITE = {
  name: 'Arsal Jafri',
  title: 'Arsal Jafri',
  tagline: 'I build software across systems, AI, and hardware, and write about what I learn.',
  description:
    'Projects and writing by Arsal Jafri, a Computer Science student at the University of Houston building across systems, AI, and hardware.',
  links: {
    github: 'https://github.com/ArsalJafri',
    linkedin: '',
    email: '',
  },
} as const;

export const NAV = [
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
] as const;
