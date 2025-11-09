import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Users, Trophy, Send, Share2, ThumbsUp, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Message {
  id: string;
  user: string;
  text: string;
  likes: number;
  timestamp: Date;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  points: number;
  icon: string;
}

export default function Community() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'Sarah G.',
      text: 'Just completed my first zero-waste week! Feeling amazing! 🌱',
      likes: 12,
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      user: 'Mike R.',
      text: 'Does anyone have tips for composting in a small apartment?',
      likes: 8,
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: '3',
      user: 'Emma L.',
      text: 'Love the productivity tracker! Hit all my goals this week 🎯',
      likes: 15,
      timestamp: new Date(Date.now() - 10800000),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Zero-Waste Week',
      description: 'Eliminate single-use plastics for 7 days',
      participants: 1247,
      points: 500,
      icon: '♻️',
    },
    {
      id: '2',
      title: 'Digital Detox Weekend',
      description: 'Reduce screen time by 50% this weekend',
      participants: 892,
      points: 300,
      icon: '📱',
    },
    {
      id: '3',
      title: 'Meditation Marathon',
      description: 'Complete 7 days of daily meditation',
      participants: 1534,
      points: 400,
      icon: '🧘',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 2450, badge: '🏆' },
    { rank: 2, name: 'Jordan Smith', points: 2280, badge: '🥈' },
    { rank: 3, name: 'Taylor Brown', points: 2100, badge: '🥉' },
    { rank: 4, name: 'Casey Wilson', points: 1950, badge: '⭐' },
    { rank: 5, name: 'Riley Davis', points: 1820, badge: '⭐' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: 'You',
        text: newMessage,
        likes: 0,
        timestamp: new Date(),
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  const handleLike = (id: string) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    ));
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Community Hub
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Connect with like-minded individuals, share experiences, and participate in eco-challenges
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542315099045-93937d70c67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjI2NjYyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Community"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-gray-900 dark:text-white">Community Feed</h3>
                </div>

                {/* Post Input */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Textarea
                    placeholder="Share your eco-journey, tips, or ask questions..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="mb-3"
                  />
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 gap-2"
                      onClick={handleSendMessage}
                    >
                      <Send className="w-4 h-4" />
                      Post
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {message.user.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gray-900 dark:text-white">
                                {message.user}
                              </span>
                              <span className="text-gray-400">·</span>
                              <span className="text-gray-500 dark:text-gray-400">
                                {getTimeAgo(message.timestamp)}
                              </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                              {message.text}
                            </p>
                            <div className="flex items-center gap-4">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center gap-2 text-gray-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                onClick={() => handleLike(message.id)}
                              >
                                <ThumbsUp className="w-4 h-4" />
                                <span>{message.likes}</span>
                              </motion.button>
                              <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>

            {/* Eco Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-gray-900 dark:text-white">Active Challenges</h3>
                </div>

                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-400 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{challenge.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-gray-900 dark:text-white mb-1">
                            {challenge.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {challenge.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {challenge.participants.toLocaleString()}
                              </span>
                              <Badge variant="secondary">
                                {challenge.points} pts
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline">
                              Join
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-gray-900 dark:text-white">Leaderboard</h3>
                </div>

                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <motion.div
                      key={user.rank}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
                    >
                      <span className="text-2xl">{user.badge}</span>
                      <div className="flex-1">
                        <div className="text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          {user.points.toLocaleString()} points
                        </div>
                      </div>
                      <div className="text-gray-400">
                        #{user.rank}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 dark:text-white mb-4">
                  Community Impact
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Active Members', value: '10,247' },
                    { label: 'CO₂ Saved', value: '1.2M kg' },
                    { label: 'Trees Planted', value: '45,678' },
                    { label: 'Challenges Completed', value: '23,456' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
