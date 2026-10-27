import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BlogPost } from '@/data/content';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface BlogViewProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('VIEW ALL');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const categories = [
    'VIEW ALL',
    'ARTIFICIAL INTELLIGENCE',
    'CLOUD & DEVOPS',
    'CYBERSECURITY',
    'ENTERPRISE IT',
  ];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'VIEW ALL') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  // Group into 3 columns for faithful masonry recreation
  const col1 = displayedPosts.filter((_, i) => i % 3 === 0);
  const col2 = displayedPosts.filter((_, i) => i % 3 === 1);
  const col3 = displayedPosts.filter((_, i) => i % 3 === 2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const renderPostCard = (post: BlogPost) => (
    <article
      key={post.id}
      onClick={() => onSelectArticle(post)}
      className="blog-card group cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div
        className={`overflow-hidden rounded-md bg-slate-100 ${post.aspect} mb-4 relative shadow-xs`}
      >
        <img
          alt={post.title}
          className="blog-img w-full h-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          src={post.image}
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <BookOpen className="w-3 h-3" />
          <span>Read</span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0055ff] transition-colors leading-snug">
        {post.title}
      </h2>
      <p className="text-xs text-slate-400 mt-2 font-medium flex items-center flex-wrap">
        <span>{post.date}</span>
        <span className="mx-1.5 text-slate-300">/</span>
        <span className="text-[#0055ff] font-semibold">{post.category}</span>
        <span className="mx-1.5 text-slate-300">·</span>
        <span>{post.readTime}</span>
      </p>
    </article>
  );

  return (
    <div className="w-full bg-white flex flex-col flex-grow">
      {/* BEGIN: HeroBanner */}
      <section className="hero-gradient py-24 sm:py-28 relative text-center text-white flex items-center justify-center overflow-hidden">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        {/* Organic wave SVG backdrop matching design layout */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <svg
            className="w-full h-full object-cover"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              d="M0,128L60,149.3C120,171,240,213,360,224C480,235,600,213,720,170.7C840,128,960,64,1080,48C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="#ffffff"
              fillOpacity="0.3"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Our Blog
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/90 font-medium max-w-xl mx-auto">
            Technical analysis, research whitepapers, and operational paradigms from Brivora&apos;s systems engineering lab.
          </p>
        </div>
      </section>
      {/* END: HeroBanner */}

      {/* BEGIN: BlogSection */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-14 sm:py-16 w-full">
        {/* Category Filter Bar */}
        <nav
          aria-label="Blog categories"
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-wider mb-14 text-slate-500"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(9);
                }}
                className={`pb-1 tracking-wider transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-[#0055ff] border-b-2 border-[#0055ff]'
                    : 'hover:text-[#0055ff]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>

        {/* Asymmetrical 3-Column Masonry Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* COLUMN 1 */}
          <div className="flex flex-col space-y-12">
            {col1.map((post) => renderPostCard(post))}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col space-y-12">
            {col2.map((post) => renderPostCard(post))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col space-y-12">
            {col3.map((post) => renderPostCard(post))}
          </div>
        </div>

        {/* Centered Load More Action Pill */}
        <div className="mt-16 flex justify-center">
          {visibleCount < filteredPosts.length ? (
            <button
              onClick={handleLoadMore}
              className="w-full max-w-4xl py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-200 text-center cursor-pointer shadow-xs"
              type="button"
            >
              LOAD MORE
            </button>
          ) : (
            <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase py-3 px-6 bg-slate-50 rounded-full">
              All {filteredPosts.length} Articles Loaded
            </div>
          )}
        </div>
      </main>
      {/* END: BlogSection */}
    </div>
  );
};
