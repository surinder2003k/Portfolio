import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar, Clock, ArrowRight, FileText, Search, TrendingUp, Code2 } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const articles = [
    {
        title: 'Core Web Vitals Optimization: A Complete Guide for React Developers',
        excerpt: 'Deep dive into LCP, FID, and CLS optimization techniques specifically for React applications. Includes real-world before/after metrics from production apps.',
        category: 'Performance',
        categoryIcon: <TrendingUp size={14} />,
        date: '2024-11-15',
        readTime: '12 min',
        tags: ['React', 'Performance', 'Core Web Vitals', 'SEO'],
        url: 'https://surinder2003k.hashnode.dev/core-web-vitals-react-guide',
        featured: true,
    },
    {
        title: 'Technical SEO Checklist for Single Page Applications',
        excerpt: 'How to make SPAs crawlable and indexable. Covers prerendering, dynamic meta tags, structured data, and sitemaps for React/Next.js apps.',
        category: 'SEO',
        categoryIcon: <Search size={14} />,
        date: '2024-10-28',
        readTime: '15 min',
        tags: ['SEO', 'React', 'Next.js', 'Technical SEO'],
        url: 'https://surinder2003k.hashnode.dev/seo-checklist-spa',
        featured: false,
    },
    {
        title: 'Building Accessible React Components: Patterns That Actually Work',
        excerpt: 'Practical accessibility patterns for common UI components — modals, dropdowns, tabs, and forms. Includes testing strategies with axe-core and screen readers.',
        category: 'Accessibility',
        categoryIcon: <Code2 size={14} />,
        date: '2024-09-20',
        readTime: '18 min',
        tags: ['React', 'Accessibility', 'WCAG', 'Components'],
        url: 'https://surinder2003k.hashnode.dev/accessible-react-patterns',
        featured: false,
    },
    {
        title: 'MongoDB Aggregation Pipeline Masterclass',
        excerpt: 'From basic $match to complex $facet and $graphLookup operations. Real examples from production analytics dashboards.',
        category: 'Backend',
        categoryIcon: <FileText size={14} />,
        date: '2024-08-12',
        readTime: '20 min',
        tags: ['MongoDB', 'Node.js', 'Aggregation', 'Database'],
        url: 'https://surinder2003k.hashnode.dev/mongodb-aggregation-masterclass',
        featured: false,
    },
    {
        title: 'Why I Switched from Create React App to Vite (and Never Looked Back)',
        excerpt: 'Performance comparison, migration guide, and the hidden benefits of Vite\'s dev server. Includes benchmarks from 3 production projects.',
        category: 'Tooling',
        categoryIcon: <Code2 size={14} />,
        date: '2024-07-05',
        readTime: '8 min',
        tags: ['Vite', 'React', 'Build Tools', 'DX'],
        url: 'https://surinder2003k.hashnode.dev/vite-vs-cra',
        featured: false,
    },
    {
        title: 'SEO for Developers: What Every Frontend Engineer Should Know',
        excerpt: 'The intersection of code and search rankings. Meta tags, structured data, Core Web Vitals, and how your React decisions impact organic traffic.',
        category: 'SEO',
        categoryIcon: <Search size={14} />,
        date: '2024-06-18',
        readTime: '14 min',
        tags: ['SEO', 'React', 'Frontend', 'Google'],
        url: 'https://surinder2003k.hashnode.dev/seo-for-developers',
        featured: true,
    },
];

export default function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <section className="section" id="blog" ref={ref} aria-label="Blog and technical writing">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        <span className="gradient-text">Writing</span> & Thoughts
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        I write about React, SEO, performance, and backend engineering. 
                        Technical depth with practical takeaways — no fluff.
                    </p>
                </motion.div>

                <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginTop: '40px' }}>
                    {articles.map((article, i) => (
                        <motion.article
                            key={i}
                            className={`glass-card blog-card ${article.featured ? 'featured' : ''}`}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: i * 0.1, duration: 0.5 },
                                },
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                height: '100%',
                                padding: '28px',
                                position: 'relative',
                                border: article.featured ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                            }}
                        >
                            {article.featured && (
                                <span className="blog-featured-badge" style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    padding: '4px 10px',
                                    background: 'var(--accent-gradient)',
                                    borderRadius: '20px',
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    color: '#fff',
                                }}>Featured</span>
                            )}

                            <div className="blog-meta" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                                <span className="blog-category" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '4px 12px',
                                    background: 'rgba(108, 99, 255, 0.1)',
                                    borderRadius: '20px',
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    color: 'var(--accent-primary)',
                                }}>
                                    {article.categoryIcon}
                                    {article.category}
                                </span>
                                <span className="blog-date" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <Calendar size={12} aria-hidden="true" />
                                    {formatDate(article.date)}
                                </span>
                                <span className="blog-read-time" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <Clock size={12} aria-hidden="true" />
                                    {article.readTime} read
                                </span>
                            </div>

                            <h3 className="blog-title" style={{ 
                                fontFamily: 'var(--font-display)', 
                                fontSize: '1.25rem', 
                                fontWeight: 700, 
                                marginBottom: '12px',
                                lineHeight: 1.3,
                            }}>
                                <a 
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                                    aria-label={`Read: ${article.title}`}
                                >
                                    {article.title}
                                </a>
                            </h3>

                            <p className="blog-excerpt" style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem', 
                                lineHeight: 1.6, 
                                marginBottom: '20px',
                                flex: 1,
                            }}>
                                {article.excerpt}
                            </p>

                            <div className="blog-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                {article.tags.map((tag, ti) => (
                                    <span key={ti} style={{
                                        fontSize: '0.65rem',
                                        padding: '3px 8px',
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '10px',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.3px',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-read-link"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--accent-secondary)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    marginTop: 'auto',
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.gap = '12px'; }}
                                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--accent-secondary)'; e.currentTarget.style.gap = '8px'; }}
                                aria-label={`Read full article: ${article.title}`}
                            >
                                Read Article
                                <ArrowRight size={14} aria-hidden="true" />
                                <ExternalLink size={12} aria-hidden="true" />
                            </a>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="blog-cta"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.3 } } }}
                    style={{ textAlign: 'center', marginTop: '50px', padding: '40px', borderRadius: '20px', background: 'var(--bg-glass)', border: '1px solid var(--border-color)' }}
                >
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.1rem' }}>
                        Want more? Subscribe to my newsletter for weekly insights on React, SEO, and building better web apps.
                    </p>
                    <a href="https://surinder2003k.hashnode.dev/newsletter" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Subscribe Free
                        <ExternalLink size={16} aria-hidden="true" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}