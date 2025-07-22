import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductGuide {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function LearnAboutKeto() {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with first slide (index 0)

  const productGuides: ProductGuide[] = [
    {
      title: "Exogenous Ketones",
      description: "Doctor-developed powder made from high-quality beta hydroxy-butyrate (BHB). Boost ketone levels. Get back into ketosis.",
      image: "https://cdn.shopify.com/s/files/1/1786/3461/files/PK_Base-Ketones-Tub-Strawberry-Lemonade_RENDER_950x950_61dc97c4-9d01-4fac-b997-29f865ec008b.png?v=1736348870&width=300",
      link: "#"
    },
    {
      title: "Keto Bars",
      description: "Stay keto and healthy on the go with these clean and delicious bars, available in four flavors.",
      image: "https://cdn.shopify.com/s/files/1/1786/3461/files/PK_CollagenProteinBars-ChocolateAlmondBrownie-RENDER-Film_Box_24-07-08.png?v=1721765759&width=300",
      link: "#"
    },
    {
      title: "MCT Oil Powder",
      description: "Helps make ketones readily available for your body to use, making ketosis easier to achieve and maintain.",
      image: "https://cdn.shopify.com/s/files/1/1786/3461/files/PK_MCT-Oil-Powder-Tub-Salted-Caramel_RENDER_950x950_8d7fba76-4548-431e-bcd6-00c2d5b2f224.png?v=1736349062&width=300",
      link: "#"
    },
    {
      title: "Keto Nootropic",
      description: 'Also known as "brain boosters," "smart drugs", or "cognitive enhancers", nootropics are compounds that may enhance various mental functions.',
      image: "https://cdn.shopify.com/s/files/1/1786/3461/files/PK_Nola-Bar_Box_White-Choc-Macadamia_RENDER_24-07-26.png?v=1724780571&width=300",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productGuides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productGuides.length) % productGuides.length);
  };

  return (
    <section className="py-20 px-4 bg-white overflow-hidden w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Learn about keto.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
          {/* Left side - Questions and Answers */}
          <div className="space-y-10">
            {/* Question 1 - What is keto? */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-[30px] h-[30px] bg-[#58CC88] rounded-full flex items-center justify-center">
                    <span className="text-white text-base font-bold">?</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2.5">
                  What is keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  What makes it different from other low-carb diets? How do I 
                  do it, and how do I know it's working? Learn everything you 
                  need to know about keto, its many benefits and the science 
                  behind them.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Learn all about Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 2 - How do I start keto? */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-[30px] h-[30px] bg-[#58CC88] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2.5">
                  How do I start keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Ready to get started but feel overwhelmed by this new 
                  lifestyle and all you have to learn about it? Follow this step-by-step 
                  program where we'll walk you through how to begin 
                  and get results.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Get into Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 3 - Will I lose weight on keto? */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-[30px] h-[30px] bg-[#58CC88] rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold leading-none">×</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2.5">
                  Will I lose weight on keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  The Ketogenic Diet is quickly becoming known for its 
                  incredible weight loss benefits. Learn how you can use keto 
                  can help you meet your weightloss and health goals.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Weight Loss & Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Product Guide Carousel */}
          <div className="relative h-full flex flex-col justify-center">
            <div className="max-w-[25.6rem] mx-auto w-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{currentSlide + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    HOW TO USE
                  </span>
                </div>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  All Product Guides →
                </a>
              </div>
            </div>

            <div 
              className="carousel-gradient rounded-lg relative overflow-hidden min-h-[480px] max-w-[25.6rem] mx-auto shadow-lg border border-gray-200/60 ring-1 ring-gray-100/50"
              style={{
                boxShadow: `-12px 0 24px -8px #F3F1F1, 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
              }}
            >
              <div className="px-5 pt-5 pb-4 h-full flex flex-col">
                <h4 className="text-lg font-bold text-gray-900 mb-2.5">
                  {productGuides[currentSlide].title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-shrink-0">
                  {productGuides[currentSlide].description}
                </p>
                
                {/* Product image container - takes remaining space with scaled image */}
                <div className="flex justify-center items-center flex-1 pb-2.5">
                  <div className="relative">
                    <img 
                      src={productGuides[currentSlide].image}
                      alt={productGuides[currentSlide].title}
                      className="w-[18rem] h-[24rem] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation arrows - positioned at the container edges */}
              {currentSlide > 0 && (
                <button 
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-100 cursor-pointer z-10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                  aria-label="Previous product guide"
                >
                  <ChevronLeft className="w-7 h-7 text-slate-700 transition-colors duration-300" />
                </button>
              )}
              {currentSlide < productGuides.length - 1 && (
                <button 
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-100 cursor-pointer z-10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                  aria-label="Next product guide"
                >
                  <ChevronRight className="w-7 h-7 text-slate-700 transition-colors duration-300" />
                </button>
              )}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-5">
              {productGuides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-gray-600' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}