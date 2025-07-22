import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import ProductModal from "./product-modal";
import aiCardAllImage from "@assets/ai card all_1753102070552.jpg";
import beginnerFrontImage from "@assets/Beginner - Front advan_1753102070554.jpg";
import cseAiCardImage from "@assets/cse ai card 16_1753102070555.jpg";
import ecoSystemImage from "@assets/image (1)_1753102070556.jpg";
import indexImage from "@assets/index_1753102070557.png";
import tocImage from "@assets/TOC 1_1753102070558.jpg";
import mainindex from "../../../attached_assets/mainindex.png";

const products = [
  {
    id: 1,
    title: "Engineering & Technology",
    subtitle: "The Leitner Way",
    description: "Accelerate your mastery with AI-powered Engineering & Technology Flashcards. Designed for aspiring engineers and tech professionals, these flashcards unlock core concepts and advanced topics using artificial intelligence.",
    cardCount: "500+ Cards",
    level: "Beginner",
    level2:"Intermediate",
    level3:"Advanced",
    icon: "🤖",
    bgGradient: "from-[var(--gk-blue)] to-[var(--gk-cyan)]",
    textColor: "text-[var(--gk-blue)]",
    bgColor: "bg-[var(--gk-blue)]",
    levelBg: "bg-[var(--gk-green)]/10",
    levelColor: "text-[var(--gk-green)]",
    cardNumber: "AI",
    image: aiCardAllImage,
    imageAlt: "Master AI flashcards with box packaging",
  },
  {
    id: 2,
    title: "Business",
    subtitle: "Core Concepts",
    description: "Boost your management and entrepreneurial skills with the Business AI Flashcards stream. These cards blend foundational business knowledge with today’s most in-demand AI applications.",
    cardCount: "45 Cards",
   level: "Beginner",
    level2:"Intermediate",
    level3:"Advanced",
    icon: "🧠",
    bgGradient: "from-[var(--gk-green)] to-emerald-400",
    textColor: "text-[var(--gk-green)]",
    bgColor: "bg-[var(--gk-green)]",
    levelBg: "bg-slate-100",
    levelColor: "text-slate-600",
    cardNumber: "01",
    image: aiCardAllImage,
    imageAlt: "Beginner Intelligence flashcards stack",
  },
  {
    id: 3,
    title: "Finance",
    subtitle: "Algorithms & Code",
    description: "Build robust financial expertise through Finance AI Flashcards your toolkit for exams and the evolving world of fintech",
    cardCount: "65 Cards",
   level: "Beginner",
    level2:"Intermediate",
    level3:"Advanced",
    icon: "💻",
    bgGradient: "from-[var(--gk-orange)] to-amber-400",
    textColor: "text-[var(--gk-orange)]",
    bgColor: "bg-[var(--gk-orange)]",
    levelBg: "bg-[var(--gk-orange)]/10",
    levelColor: "text-[var(--gk-orange)]",
    cardNumber: "02",
    image: aiCardAllImage,
    imageAlt: "Programming flashcards collection",
  }
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-10 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Product Collection</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive flashcard series designed to master artificial intelligence concepts through proven learning methodologies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              onClick={() => handleProductClick(product)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-fill"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating elements on hover */}
                <motion.div 
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg">{product.icon}</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-bold text-slate-700">{product.cardNumber}</span>
                </motion.div>
                
                {/* Quick view button */}
                <motion.button 
                  className="absolute bottom-4 right-4 bg-white text-slate-800 rounded-full p-3 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg group-hover:text-[var(--gk-blue)] transition-colors">
                      {product.title}
                    </h4>
                    {/* <p className="text-sm text-slate-500">{product.subtitle}</p> */}
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 text-justify leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <span className={`text-xs bg-slate-100 ${product.textColor} px-3 py-1 rounded-full font-medium`}>
                      {product.cardCount}
                    </span> */}
                    <span className={`text-xs ${product.levelBg} ${product.levelColor} px-3 py-1 rounded-full font-medium`}>
                      {product.level}
                    </span>
                  </div>
                  
                  <motion.button 
                    className={`${product.textColor} hover:opacity-80 transition-colors p-2 rounded-full hover:bg-slate-100`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Animated border effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(white, white) padding-box, ${product.bgGradient.replace('from-', 'linear-gradient(135deg, var(--').replace('to-', '), var(--').replace(']', '))').replace('[var(--', '').replace(')', '')} border-box`
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          
          
        </div>
        
        {/* Call to Action */}
        {/* <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-[var(--gk-blue)] text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            <ShoppingCart className="w-4 h-4" />
            View Complete Catalog
          </button>
        </motion.div> */}
      </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
