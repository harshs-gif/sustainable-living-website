import { motion } from 'motion/react';
import { ExternalLink, Smartphone, ShoppingBag, BookOpen, Heart, Leaf, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const resources = [
  {
    category: 'Eco-Friendly Products',
    icon: ShoppingBag,
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        name: 'Package Free Shop',
        description: 'Zero-waste essentials and sustainable alternatives',
        url: '#',
        tags: ['Zero Waste', 'Shopping'],
      },
      {
        name: 'EarthHero',
        description: 'Curated sustainable products for every need',
        url: '#',
        tags: ['Eco Products', 'Verified'],
      },
      {
        name: 'Grove Collaborative',
        description: 'Natural home and personal care products',
        url: '#',
        tags: ['Home', 'Personal Care'],
      },
    ],
  },
  {
    category: 'Mental Health Apps',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    items: [
      {
        name: 'Headspace',
        description: 'Meditation and mindfulness for everyday life',
        url: '#',
        tags: ['Meditation', 'Sleep'],
      },
      {
        name: 'Calm',
        description: 'Reduce anxiety and improve sleep quality',
        url: '#',
        tags: ['Relaxation', 'Anxiety'],
      },
      {
        name: 'BetterHelp',
        description: 'Online therapy with licensed professionals',
        url: '#',
        tags: ['Therapy', 'Counseling'],
      },
    ],
  },
  {
    category: 'Productivity Tools',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes and tasks',
        url: '#',
        tags: ['Organization', 'Collaboration'],
      },
      {
        name: 'Forest',
        description: 'Stay focused and plant real trees',
        url: '#',
        tags: ['Focus', 'Eco-Friendly'],
      },
      {
        name: 'RescueTime',
        description: 'Track and optimize your digital habits',
        url: '#',
        tags: ['Time Tracking', 'Analytics'],
      },
    ],
  },
  {
    category: 'Educational Resources',
    icon: BookOpen,
    color: 'from-purple-500 to-indigo-500',
    items: [
      {
        name: 'Coursera - Sustainability',
        description: 'Free courses on environmental sustainability',
        url: '#',
        tags: ['Courses', 'Certificates'],
      },
      {
        name: 'Project Drawdown',
        description: 'Climate solutions research and resources',
        url: '#',
        tags: ['Climate', 'Research'],
      },
      {
        name: 'The Minimalists Podcast',
        description: 'Living meaningfully with less',
        url: '#',
        tags: ['Podcast', 'Minimalism'],
      },
    ],
  },
  {
    category: 'Sustainable Living Apps',
    icon: Leaf,
    color: 'from-green-500 to-teal-500',
    items: [
      {
        name: 'Good On You',
        description: 'Ethical fashion brand ratings',
        url: '#',
        tags: ['Fashion', 'Ethics'],
      },
      {
        name: 'Too Good To Go',
        description: 'Save food from going to waste',
        url: '#',
        tags: ['Food Waste', 'Deals'],
      },
      {
        name: 'JouleBug',
        description: 'Track your eco-friendly actions',
        url: '#',
        tags: ['Tracking', 'Gamification'],
      },
    ],
  },
  {
    category: 'Wellness Platforms',
    icon: Smartphone,
    color: 'from-orange-500 to-amber-500',
    items: [
      {
        name: 'MyFitnessPal',
        description: 'Nutrition tracking and meal planning',
        url: '#',
        tags: ['Nutrition', 'Health'],
      },
      {
        name: 'Insight Timer',
        description: 'Free meditation app with community',
        url: '#',
        tags: ['Meditation', 'Free'],
      },
      {
        name: 'Sanvello',
        description: 'Mental health support and mood tracking',
        url: '#',
        tags: ['Mental Health', 'Tracking'],
      },
    ],
  },
];

export default function ResourceHub() {
  return (
    <section id="resources" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Resource Hub
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Curated tools, apps, and resources to support your sustainable, productive, and healthy lifestyle
          </p>
        </motion.div>

        <div className="space-y-12">
          {resources.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow group">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full group-hover:border-green-600 dark:group-hover:border-green-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                        >
                          Visit Resource
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Submit Resource CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 text-center">
            <h3 className="text-gray-900 dark:text-white mb-3">
              Know a Great Resource?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Help our community discover amazing tools and platforms. Submit your recommendations for review.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Submit a Resource
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
