import { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, Zap, Recycle, ShoppingBag, Droplet, Sun, Wind, TreePine } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    icon: Zap,
    title: 'Energy Conservation',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    tips: [
      { title: 'Switch to LED bulbs', description: 'LED bulbs use 75% less energy and last 25 times longer than traditional bulbs.', impact: 85 },
      { title: 'Unplug devices when not in use', description: 'Phantom power accounts for 10% of your electricity bill.', impact: 65 },
      { title: 'Use natural light', description: 'Open curtains during the day to reduce lighting needs.', impact: 70 },
      { title: 'Install smart thermostats', description: 'Save up to 10-23% on heating and cooling costs.', impact: 90 },
    ],
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    tips: [
      { title: 'Start composting', description: 'Reduce landfill waste by 30% and create nutrient-rich soil.', impact: 80 },
      { title: 'Use reusable bags', description: 'One reusable bag can eliminate 1000 plastic bags.', impact: 75 },
      { title: 'Buy in bulk', description: 'Reduce packaging waste and save money.', impact: 60 },
      { title: 'Recycle properly', description: 'Learn what can and cannot be recycled in your area.', impact: 85 },
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Eco-Friendly Products',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/20',
    tips: [
      { title: 'Choose sustainable brands', description: 'Support companies with ethical and eco-friendly practices.', impact: 70 },
      { title: 'Buy local and seasonal', description: 'Reduce carbon footprint from transportation.', impact: 75 },
      { title: 'Use bamboo products', description: 'Bamboo is a fast-growing, renewable resource.', impact: 65 },
      { title: 'Invest in quality', description: 'Durable products last longer and reduce waste.', impact: 80 },
    ],
  },
  {
    icon: Droplet,
    title: 'Mindful Consumption',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    tips: [
      { title: 'Reduce water waste', description: 'Fix leaks and use low-flow fixtures.', impact: 70 },
      { title: 'Practice minimalism', description: 'Buy only what you truly need.', impact: 85 },
      { title: 'Repair before replacing', description: 'Extend the life of your belongings.', impact: 75 },
      { title: 'Choose plant-based meals', description: 'Reduce your carbon footprint by 50%.', impact: 90 },
    ],
  },
];

export default function SustainableGuide() {
  const [commitments, setCommitments] = useState<Record<string, number>>({});

  const handleCommit = (categoryTitle: string, tipTitle: string) => {
    const key = `${categoryTitle}-${tipTitle}`;
    setCommitments(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  const totalImpact = Object.keys(commitments).length * 15;

  return (
    <section id="sustainable" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Sustainable Living Guide
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover practical ways to reduce your environmental impact and live more sustainably
          </p>
        </motion.div>

        {/* Impact Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">Your Impact Score</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {Object.keys(commitments).length} commitments made
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
                <span className="text-green-600 dark:text-green-400">{totalImpact} pts</span>
              </div>
            </div>
            <Progress value={Math.min(totalImpact, 100)} className="h-3" />
          </Card>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629331873972-43bbadd8e17c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG5hdHVyZSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2MjY3NjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sustainable living"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.tips.map((tip, tipIndex) => {
                      const key = `${category.title}-${tip.title}`;
                      const committed = commitments[key] || 0;
                      
                      return (
                        <AccordionItem key={tipIndex} value={`item-${tipIndex}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <span className="text-gray-900 dark:text-white text-left">
                              {tip.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              <p className="text-gray-600 dark:text-gray-300">
                                {tip.description}
                              </p>
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-gray-600 dark:text-gray-400">
                                    Environmental Impact
                                  </span>
                                  <span className={category.color}>
                                    {tip.impact}%
                                  </span>
                                </div>
                                <Progress value={tip.impact} className="h-2" />
                              </div>
                              <Button
                                size="sm"
                                variant={committed > 0 ? "default" : "outline"}
                                className={committed > 0 ? "bg-green-600 hover:bg-green-700" : ""}
                                onClick={() => handleCommit(category.title, tip.title)}
                              >
                                {committed > 0 ? `Committed (${committed})` : 'Commit to This'}
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
            <h3 className="text-center text-gray-900 dark:text-white mb-8">
              Impact of Sustainable Choices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Sun, value: '50%', label: 'Energy Saved' },
                { icon: Droplet, value: '30%', label: 'Water Conserved' },
                { icon: Wind, value: '40%', label: 'CO₂ Reduced' },
                { icon: TreePine, value: '100+', label: 'Trees Equivalent' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="inline-block mb-3"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-12 h-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <div className="text-green-600 dark:text-green-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
