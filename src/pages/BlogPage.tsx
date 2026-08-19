import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import logoImage from '@/assets/Gemini_Generated_Image_4y0qxk4y0qxk4y0q.png';
import PageSectionHeader from '@/components/PageSectionHeader';
import { blogPosts } from '@/lib/blogPosts';

function BlogPage() {
  const categories = ['All Content', 'Infectious Disease Updates'];
  const [selectedCategory, setSelectedCategory] = useState('All Content');
  const [selectedPostTitle, setSelectedPostTitle] = useState(blogPosts[0].title);
  const [expandedPostTitle, setExpandedPostTitle] = useState<string | null>(null);
  const featuredRef = useRef<HTMLElement | null>(null);

  const filteredPosts = useMemo(
    () => selectedCategory === 'All Content'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory]
  );

  useEffect(() => {
    if (!filteredPosts.some((post) => post.title === selectedPostTitle)) {
      const fallback = filteredPosts[0]?.title ?? '';
      setSelectedPostTitle(fallback);
      setExpandedPostTitle(null);
    }
  }, [filteredPosts, selectedPostTitle]);

  const featuredPost = filteredPosts.find((post) => post.title === selectedPostTitle) ?? filteredPosts[0];
  const remainingPosts = filteredPosts.filter((post) => post.title !== featuredPost?.title);

  const handleSelectPost = (title: string) => {
    setSelectedPostTitle(title);
    setExpandedPostTitle(null);
    setTimeout(() => {
      featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  const toggleExpandedPost = (title: string) => {
    setExpandedPostTitle((current) => (current === title ? null : title));
  };

  const isSectionHeading = (line: string) =>
    line === line.toUpperCase() ||
    line.endsWith(':') ||
    line === 'COVID-19' ||
    line === 'General Information' ||
    line === 'About Dr. Sujansky\'s Life in These Times' ||
    line === 'Update on Infectious Disease Threats: What You Need to Know';

  const normalizeLine = (line: string) =>
    line
      .replaceAll('â€¢', '•')
      .replaceAll('â€™', '\'')
      .replaceAll('â€œ', '"')
      .replaceAll('â€\x9d', '"')
      .replaceAll('â€¦', '...')
      .replace(/<\s*strong\s*>/gi, '**')
      .replace(/<\s*\/\s*strong\s*>/gi, '**')
      .replace(/<\s*b\s*>/gi, '**')
      .replace(/<\s*\/\s*b\s*>/gi, '**');

  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-navy">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <PageSectionHeader title="Blog" />
            <motion.h2
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mb-6 text-3xl font-semibold tracking-tight text-navy md:text-4xl"
            >
              Latest News
            </motion.h2>
            <div className="relative mx-auto max-w-sm">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none border border-navy/70 bg-white px-4 py-3 pr-10 text-base text-navy shadow-[0_10px_24px_rgba(15,23,42,0.05)] outline-none transition-colors duration-200 hover:border-gold/70 focus:border-gold/70"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50" />
            </div>
          </div>

          {featuredPost ? (
            <div className="space-y-10">
              <motion.article
                ref={featuredRef}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden border border-navy/70 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr]">
                  <div className="flex min-h-[220px] items-center justify-center border-b border-navy/10 bg-white p-8 lg:min-h-[320px] lg:border-b-0 lg:border-r lg:border-navy/10">
                    <img
                      src={logoImage}
                      alt="Practice logo"
                      className="max-h-24 w-auto object-contain opacity-95 md:max-h-32"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-9">
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.08em] text-steely-blue">
                      <span className="inline-flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="mb-4 max-w-3xl text-xl font-semibold leading-[1.12] tracking-tight text-navy md:text-[1.7rem]">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 max-w-2xl text-[22px] leading-9 text-foreground/90">
                      {featuredPost.excerpt}
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleExpandedPost(featuredPost.title)}
                      className="inline-flex w-fit items-center gap-2 text-lg font-semibold text-steely-blue transition-colors duration-200 hover:text-gold"
                    >
                      {expandedPostTitle === featuredPost.title ? 'Read Less' : 'Read More'}
                      {expandedPostTitle === featuredPost.title ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                {expandedPostTitle === featuredPost.title && (
                  <div className="border-t border-navy/10 bg-white px-7 py-8 md:px-9">
                    <div className="mx-auto max-w-4xl space-y-4 bg-white px-2 text-[24px] leading-[3rem] text-foreground/85 md:px-4 md:text-[25px]">
                      {featuredPost.content.map((line, index) => (
                        normalizeLine(line).startsWith('•') ? (
                          <div key={index} className="flex items-start gap-3">
                            <span className="shrink-0 text-gold">•</span>
                            <p>{renderBoldText(normalizeLine(line).replace(/^[•]\s*/, ''))}</p>
                          </div>
                        ) : (
                          <p
                            key={index}
                            className={isSectionHeading(normalizeLine(line)) ? 'pt-2 text-lg font-semibold text-navy' : ''}
                          >
                            {renderBoldText(normalizeLine(line))}
                          </p>
                        )
                      ))}
                    </div>
                    {featuredPost.images && featuredPost.images.length > 0 && (
                      <div className="mx-auto mt-10 max-w-4xl px-2 md:px-4">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                          {featuredPost.images.map((image, index) => (
                            <figure key={index} className="flex flex-col">
                              <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full border border-navy/10 object-cover"
                              />
                              {image.caption && (
                                <figcaption className="mt-3 text-base leading-relaxed text-foreground/70">
                                  {image.caption}
                                </figcaption>
                              )}
                            </figure>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.article>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {remainingPosts.map((post, index) => (
                  <BlogPostCard
                    key={index}
                    {...post}
                    onSelect={() => handleSelectPost(post.title)}
                    isActive={post.title === selectedPostTitle}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-navy/70 bg-white p-10 text-center text-navy">No posts in this category yet.</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
