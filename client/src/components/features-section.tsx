import { motion } from "framer-motion";

const features = [
  {
    icon: "🧠",
    title: "Microlearning",
    description: "Bite-sized content makes learning quick, focused, and easy to fit into busy schedules.",
    color: "bg-[var(--gk-green)]",
  },
  {
    icon: "📈",
    title: "Progressive Difficulty",
    description: "Content is structured from beginner to expert level, ensuring smooth learning progression and building solid foundations.",
    color: "bg-[var(--gk-blue)]",
  },
  {
    icon: "👥",
    title: "Expert-Curated Content",
    description: "Each card is carefully crafted by AI experts and educators, ensuring accuracy and relevance to current industry standards.",
    color: "bg-[var(--gk-orange)]",
  },
   {
    icon: "🇪🇳",
    title: "Bilingual Support",
    description: "Dual-language explanations help overcome language barriers and promote better understanding.",
    color: "bg-[var(--gk-blue)]",
  },
];

const leitnerBoxes = [
  { box: 1, interval: "Daily Review", progress: 75, color: "bg-red-500" },
  { box: 2, interval: "3 Days", progress: 50, color: "bg-orange-500" },
  { box: 3, interval: "1 Week", progress: 33, color: "bg-yellow-500" },
  { box: 4, interval: "2 Weeks", progress: 25, color: "bg-green-500" },
  { box: 5, interval: "1 Month", progress: 20, color: "bg-blue-500" },
];

const stats = [
  { value: "98%", label: "Success Rate", color: "text-[var(--gk-blue)]" },
  { value: "5x", label: "Faster Learning", color: "text-[var(--gk-green)]" },
  { value: "87%", label: "Long-term Retention", color: "text-[var(--gk-orange)]" },
  { value: "10k+", label: "Active Learners", color: "text-[var(--gk-brown)]" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Best Learning Methodologies for AI Flashcards</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our scientifically-proven spaced repetition system optimizes learning efficiency and long-term retention.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-lg">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Leitner Box System Visualization */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {/* <h4 className="font-semibold text-slate-800 text-center mb-6">Leitner Box System</h4> */}
              <div className="space-y-4">
                {leitnerBoxes.map((box, index) => (
                  <motion.div
                    key={box.box}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-6 ${box.color.replace('bg-', 'bg-')}/10 border-2 ${box.color.replace('bg-', 'border-')}/20 rounded flex items-center justify-center`}>
                      <span className={`text-xs font-semibold ${box.color.replace('bg-', 'text-')}`}>{box.box}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`h-2 ${box.color.replace('bg-', 'bg-')}/20 rounded-full`}>
                        <motion.div 
                          className={`h-full ${box.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${box.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-slate-600">{box.interval}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
