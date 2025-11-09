import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    title: '10 Simple Steps to a Zero-Waste Kitchen',
    excerpt: 'Discover practical ways to eliminate waste in your kitchen and save money while helping the planet.',
    author: 'Emma Green',
    date: 'Nov 5, 2025',
    category: 'Sustainable Living',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563391508609-0f2c666f8c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGxpdmluZ3xlbnwxfHx8fDE3NjI2NzY0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Mindfulness Practices for Daily Stress Relief',
    excerpt: 'Learn how to incorporate mindfulness into your daily routine to reduce stress and improve mental clarity.',
    author: 'Dr. Sarah Martinez',
    date: 'Nov 3, 2025',
    category: 'Mental Health',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NjI2MjI3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'The Pomodoro Technique: Boost Your Productivity',
    excerpt: 'Master this time management method to enhance focus and accomplish more in less time.',
    author: 'Mike Chen',
    date: 'Nov 1, 2025',
    category: 'Productivity',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1617294891800-30497d3cbee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MjY3NjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
    excerpt: 'Tips for creating a sustainable wardrobe that looks great and minimizes environmental impact.',
    author: 'Lisa Taylor',
    date: 'Oct 28, 2025',
    category: 'Sustainable Living',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1697788189761-d954ed91cdb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMG5hdHVyZXxlbnwxfHx8fDE3NjI2NzE5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Understanding Anxiety: A Complete Guide',
    excerpt: 'Comprehensive information about anxiety disorders, symptoms, and evidence-based treatment options.',
    author: 'Dr. James Wilson',
    date: 'Oct 25, 2025',
    category: 'Mental Health',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1629331873972-43bbadd8e17c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG5hdHVyZSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2MjY3NjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Digital Minimalism: Reclaiming Your Time',
    excerpt: 'Strategies to reduce digital clutter and create a more intentional relationship with technology.',
    author: 'Alex Kim',
    date: 'Oct 22, 2025',
    category: 'Productivity',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1697788189761-d954ed91cdb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMG5hdHVyZXxlbnwxfHx8fDE3NjI2NzE5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Eco-Life Blog
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Expert insights, practical tips, and inspiring stories for sustainable living
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <div className="max-w-2xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-gray-900 dark:text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get weekly tips and updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-gray-900 dark:text-white mb-3">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <Button variant="outline" className="w-fit group">
                  Read More
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-3">
                    {post.category}
                  </Badge>
                  <h4 className="text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" className="w-full group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
