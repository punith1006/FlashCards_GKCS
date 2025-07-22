import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Star, Users, Clock,Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cardCount: string;
  level: string;
  icon: string;
  image: string;
  imageAlt: string;
  textColor: string;
  bgGradient: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}







// Add this function to get branches based on title
const getBranches = (title: string) => {
  switch (title) {
    case "Engineering & Technology":
      return ["ECE", "EEE", "MCA", "Machine Learning", "Data Science"];
    case "Business":
      return ["BCom"];
    case "Finance":
      return ["Tally"];
    default:
      return [];
  }
};




export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {

  const [selectedBranch, setSelectedBranch] = useState<string>("");
  if (!product) return null;

  const features = [
    { icon: Star, text: "Premium Quality Cards" },
    { icon: Users, text: "Expert Curated Content" },
    { icon: Clock, text: "Scientifically Optimized" },
    {icon:Languages,text:"Bilingual"}
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-20`} />
                
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-slate-600" />
                </motion.button>
                
                {/* Product badge */}
                <div className="absolute bottom-6 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{product.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{product.cardCount}</div>
                      <div className="text-xs text-slate-600">{product.level}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                      {product.title}
                    </h2>
                    {/* <p className="text-lg text-slate-600 mb-4">{product.subtitle}</p> */}
                    <p className="text-slate-600 leading-relaxed text-justify">{product.description}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-slate-600" />
                        </div>
                        <span className="text-slate-700">{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div 
  className="space-y-3"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <label className="block text-sm font-medium text-slate-700">
    Select Branch
  </label>
  <div className="relative">
    <select
      value={selectedBranch}
      onChange={(e) => setSelectedBranch(e.target.value)}
      className="w-full p-3 border border-slate-200 rounded-xl bg-white text-slate-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    >
      <option value="">Choose a branch...</option>
      {getBranches(product.title).map((branch) => (
        <option key={branch} value={branch}>
          {branch}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
  </div>
</motion.div>
                  
                  {/* Pricing info */}
                  <motion.div 
                    className="bg-slate-50 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">$29.99</div>
                        <div className="text-sm text-slate-600">One-time purchase</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-medium">Free shipping</div>
                        <div className="text-xs text-slate-500">Worldwide delivery</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Action buttons */}
                <motion.div 
                  className="flex gap-3 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    className={`flex-1 ${product.textColor.replace('text-', 'bg-')} text-white hover:opacity-90 transition-opacity`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="px-6">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}