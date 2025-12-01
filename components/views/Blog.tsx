import React from 'react';
import { BlogPost } from '../../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Custom Code Beats WordPress Templates for Scaleups',
    date: 'OCT 12, 2024',
    excerpt: 'Generic templates bring bloat and security risks. Custom react solutions offer speed, security, and exact brand alignment.',
    tags: ['Tech', 'Business']
  },
  {
    id: '2',
    title: 'The Return of Typography in Web Design',
    date: 'SEP 28, 2024',
    excerpt: 'We are seeing a shift away from image-heavy layouts to type-driven interfaces. Here is why that matters for conversion.',
    tags: ['Design', 'Trends']
  },
  {
    id: '3',
    title: 'Understanding SEO in Single Page Applications',
    date: 'AUG 15, 2024',
    excerpt: 'SPAs like React apps require specific attention for Google indexing. SSR and meta-tag management explained.',
    tags: ['SEO', 'Development']
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="p-8 lg:p-16 border-b-2 border-black flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="font-display font-black text-6xl md:text-8xl mb-4">JOURNAL</h2>
          <p className="text-xl">Thoughts on design, technology, and business growth.</p>
        </div>
        <div className="mt-8 md:mt-0">
            <button className="px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors font-bold uppercase text-sm">
                Subscribe to Newsletter
            </button>
        </div>
      </div>

      <div className="flex flex-col divide-y-2 divide-black border-b-2 border-black">
        {posts.map((post) => (
          <article key={post.id} className="p-8 lg:p-12 hover:bg-neutral-50 transition-colors group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-48 shrink-0">
                <span className="font-mono text-sm font-bold block mb-2">{post.date}</span>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs border border-black px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 group-hover:underline decoration-2 underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-6 font-bold text-sm uppercase tracking-wider border-b border-black pb-0.5">Read Article</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};