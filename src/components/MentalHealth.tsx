import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Brain, MessageCircle, BookOpen, Phone, Users, Waves } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface QuizQuestion {
  question: string;
  options: { text: string; score: number }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How often do you feel overwhelmed by daily tasks?',
    options: [
      { text: 'Rarely or never', score: 0 },
      { text: 'Sometimes', score: 1 },
      { text: 'Often', score: 2 },
      { text: 'Almost always', score: 3 },
    ],
  },
  {
    question: 'How well do you sleep at night?',
    options: [
      { text: 'Very well', score: 0 },
      { text: 'Fairly well', score: 1 },
      { text: 'Poorly', score: 2 },
      { text: 'Very poorly', score: 3 },
    ],
  },
  {
    question: 'Do you feel you have enough support from others?',
    options: [
      { text: 'Yes, definitely', score: 0 },
      { text: 'Mostly', score: 1 },
      { text: 'Not really', score: 2 },
      { text: 'No, not at all', score: 3 },
    ],
  },
];

export default function MentalHealth() {
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = score;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    return quizAnswers.reduce((sum, score) => sum + (score || 0), 0);
  };

  const getAdvice = (score: number) => {
    if (score <= 3) {
      return {
        level: 'Great',
        color: 'text-green-600 dark:text-green-400',
        message: 'You seem to be managing well! Keep up your positive habits and continue to prioritize self-care.',
      };
    } else if (score <= 6) {
      return {
        level: 'Moderate',
        color: 'text-yellow-600 dark:text-yellow-400',
        message: 'You may be experiencing some stress. Consider implementing more relaxation techniques and reaching out for support.',
      };
    } else {
      return {
        level: 'High Stress',
        color: 'text-rose-600 dark:text-rose-400',
        message: 'It appears you may be experiencing significant stress. We strongly recommend speaking with a mental health professional.',
      };
    }
  };

  const submitQuiz = () => {
    if (quizAnswers.length === quizQuestions.length) {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setShowResults(false);
  };

  const resources = [
    {
      title: 'National Suicide Prevention Lifeline',
      description: '24/7 free and confidential support',
      contact: '988',
      icon: Phone,
    },
    {
      title: 'Crisis Text Line',
      description: 'Text support for those in crisis',
      contact: 'Text HOME to 741741',
      icon: MessageCircle,
    },
    {
      title: 'NAMI Helpline',
      description: 'Mental health information and support',
      contact: '1-800-950-NAMI',
      icon: Heart,
    },
  ];

  return (
    <section id="mental-health" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/10">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100/30 to-transparent dark:from-blue-900/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Mental Health Support
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Your mental well-being matters. Explore resources, take self-assessments, and find support
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl relative"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NjI2MjI3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mental wellness"
            className="w-full h-64 sm:h-80 object-cover"
          />
          {/* Flowing wave overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/20 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <Tabs defaultValue="education" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="assessment">Self-Assessment</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Understanding Depression',
                  description: 'Learn about symptoms, causes, and treatment options for depression.',
                  icon: Brain,
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  title: 'Managing Anxiety',
                  description: 'Discover techniques to cope with anxiety and panic attacks.',
                  icon: Heart,
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Stress Management',
                  description: 'Practical strategies to reduce and manage daily stress.',
                  icon: Waves,
                  color: 'from-green-500 to-teal-500',
                },
              ].map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <motion.div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-gray-900 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {topic.description}
                      </p>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Meditation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5), transparent)',
                      'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.5), transparent)',
                      'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5), transparent)',
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="relative z-10 text-center">
                  <Waves className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-gray-900 dark:text-white mb-4">
                    Guided Meditation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    Take a moment to relax with our guided meditation exercises. 
                    Find a quiet space, breathe deeply, and let go of stress.
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Meditation
                  </Button>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Assessment Tab */}
          <TabsContent value="assessment">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <Card className="p-8 max-w-3xl mx-auto">
                {!showResults ? (
                  <>
                    <h3 className="text-gray-900 dark:text-white mb-6 text-center">
                      Mental Wellness Check-In
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                      Answer these questions honestly to get personalized advice
                    </p>

                    <div className="space-y-8">
                      {quizQuestions.map((q, qIndex) => (
                        <motion.div
                          key={qIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: qIndex * 0.1 }}
                        >
                          <p className="text-gray-900 dark:text-white mb-4">
                            {qIndex + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((option, oIndex) => (
                              <motion.button
                                key={oIndex}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                  quizAnswers[qIndex] === option.score
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                }`}
                                onClick={() => handleAnswer(qIndex, option.score)}
                              >
                                {option.text}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <Button
                        size="lg"
                        onClick={submitQuiz}
                        disabled={quizAnswers.length !== quizQuestions.length}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Get Results
                      </Button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${
                        calculateScore() <= 3 ? 'from-green-400 to-emerald-500' :
                        calculateScore() <= 6 ? 'from-yellow-400 to-orange-500' :
                        'from-rose-400 to-red-500'
                      } mb-4`}>
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                      <h3 className={`${getAdvice(calculateScore()).color} mb-4`}>
                        {getAdvice(calculateScore()).level}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {getAdvice(calculateScore()).message}
                    </p>

                    <div className="mb-6">
                      <div className="text-gray-600 dark:text-gray-400 mb-2">
                        Your Score: {calculateScore()} / {quizQuestions.length * 3}
                      </div>
                      <Progress 
                        value={(calculateScore() / (quizQuestions.length * 3)) * 100} 
                        className="h-3"
                      />
                    </div>

                    <Button onClick={resetQuiz} variant="outline">
                      Take Again
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800">
                  <h3 className="text-rose-900 dark:text-rose-300 mb-4">
                    Crisis Resources - Available 24/7
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {resources.map((resource, index) => {
                      const Icon = resource.icon;
                      return (
                        <motion.div
                          key={resource.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                        >
                          <Icon className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-2" />
                          <h4 className="text-gray-900 dark:text-white mb-1">
                            {resource.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {resource.description}
                          </p>
                          <p className="text-rose-600 dark:text-rose-400">
                            {resource.contact}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-gray-900 dark:text-white mb-2">
                      Online Counseling
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Connect with licensed therapists through secure video sessions
                    </p>
                    <Button variant="outline">Find a Therapist</Button>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-gray-900 dark:text-white mb-2">
                      Support Groups
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Join peer-led support groups for shared experiences
                    </p>
                    <Button variant="outline">Browse Groups</Button>
                  </Card>
                </motion.div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
