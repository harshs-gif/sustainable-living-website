import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, CheckCircle2, Plus, X, Download, Coffee, Monitor } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import confetti from 'canvas-confetti';

interface Goal {
  id: string;
  title: string;
  progress: number;
  target: number;
}

interface Task {
  id: string;
  text: string;
  completed: boolean;
  ecoFriendly: boolean;
}

interface Habit {
  id: string;
  name: string;
  streak: number;
  checkedToday: boolean;
}

export default function ProductivityTools() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', title: 'Reduce Paper Usage', progress: 65, target: 100 },
    { id: '2', title: 'Digital-First Workflow', progress: 80, target: 100 },
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Review documents digitally', completed: false, ecoFriendly: true },
    { id: '2', text: 'Take screen breaks', completed: false, ecoFriendly: true },
  ]);
  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', name: 'Digital Note-Taking', streak: 7, checkedToday: false },
    { id: '2', name: 'Paperless Meetings', streak: 5, checkedToday: false },
    { id: '3', name: 'Energy-Saving Mode', streak: 10, checkedToday: false },
  ]);
  const [newGoal, setNewGoal] = useState('');
  const [newTask, setNewTask] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, {
        id: Date.now().toString(),
        title: newGoal,
        progress: 0,
        target: 100,
      }]);
      setNewGoal('');
    }
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        ecoFriendly: true,
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const completed = !task.completed;
        if (completed) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        }
        return { ...task, completed };
      }
      return task;
    }));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkHabit = (id: string) => {
    setHabits(habits.map(habit => {
      if (habit.id === id && !habit.checkedToday) {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
        });
        return { ...habit, streak: habit.streak + 1, checkedToday: true };
      }
      return habit;
    }));
  };

  const updateGoalProgress = (id: string, delta: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const newProgress = Math.max(0, Math.min(100, goal.progress + delta));
        if (newProgress === 100 && goal.progress < 100) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
        return { ...goal, progress: newProgress };
      }
      return goal;
    }));
  };

  return (
    <section id="productivity" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Productivity Tools
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Achieve your goals while maintaining eco-conscious work habits
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
            src="https://images.unsplash.com/photo-1617294891800-30497d3cbee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MjY3NjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Productive workspace"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Goal Tracker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-gray-900 dark:text-white">Goal Tracker</h3>
              </div>

              <div className="space-y-4 mb-6">
                <AnimatePresence>
                  {goals.map((goal) => (
                    <motion.div
                      key={goal.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-900 dark:text-white">
                          {goal.title}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400">
                          {goal.progress}%
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2 mb-3" />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, 10)}
                        >
                          +10%
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, -10)}
                        >
                          -10%
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Add a new goal..."
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                />
                <Button onClick={addGoal}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Task Manager */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-gray-900 dark:text-white">Eco-Friendly Tasks</h3>
              </div>

              <div className="space-y-2 mb-6">
                <AnimatePresence>
                  {tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg group"
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                      />
                      <span
                        className={`flex-1 ${
                          task.completed
                            ? 'line-through text-gray-400'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {task.text}
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => deleteTask(task.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Add eco-friendly task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                />
                <Button onClick={addTask}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Habit Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Eco-Conscious Habits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {habits.map((habit) => (
                <motion.div
                  key={habit.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    habit.checkedToday
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                      : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}
                  onClick={() => checkHabit(habit.id)}
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {habit.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">
                      🔥 {habit.streak} day streak
                    </span>
                  </div>
                  {habit.checkedToday && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-2 text-green-600 dark:text-green-400"
                    >
                      ✓ Completed today!
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Eco Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="flex items-start gap-4">
              <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Screen Break Reminder</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Take a 5-minute break every hour to reduce eye strain and energy consumption
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="flex items-start gap-4">
              <Coffee className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Paper-Free Workspace</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Save an average of 10,000 sheets per year by going digital
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Download Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Card className="p-8">
            <Download className="w-12 h-12 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-900 dark:text-white mb-2">
              Downloadable Templates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get our eco-friendly workspace planner and productivity templates
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Download Templates
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
