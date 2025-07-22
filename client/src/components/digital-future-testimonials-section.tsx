import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// TestimonialCard component matching the reference design
function TestimonialCard({ testimonial, index, isSectionVisible }: { testimonial: any, index: number, isSectionVisible: boolean }) {
  const isDark = testimonial.cardType === 'dark-overlay';
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.3,
    triggerOnce: true 
  });
  
  // Apply typewriter effect to the first card (index 0) and fourth card (index 3)
  const shouldUseTypewriter = index === 0 || index === 3;
  
  const { displayText: typewriterText } = useTypewriter({
    text: testimonial.quote,
    speed: 30,
    startDelay: index === 3 ? 1000 : 0, // Delay 4th card slightly for variety
    shouldStart: shouldUseTypewriter && isIntersecting && isSectionVisible,
    loop: shouldUseTypewriter, // Enable looping for typewriter cards
    pauseDuration: 3000 // Pause for 3 seconds between loops
  });
  
  return (
    <div 
      ref={ref}
      className={`
        relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500
        ${isDark ? 'bg-gray-900 text-white' : 'text-gray-800'}
        h-[580px] transform hover:scale-105
      `}
    style={!isDark ? {
      background: 'rgba(254, 241, 225, 0.35)',
      backdropFilter: 'blur(40px) saturate(150%)',
      WebkitBackdropFilter: 'blur(40px) saturate(150%)',
      border: '1px solid rgba(254, 241, 225, 0.4)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
    } : {}}>
      {/* Background Video for dark cards */}
      {testimonial.hasBackgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=600&fit=crop&crop=center')`
              }}
            ></div>
          </video>
        </>
      )}
      
      {/* Ultra-transparent glass overlay for light cards */}
      {!isDark && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(254, 241, 225, 0.15) 0%, rgba(254, 241, 225, 0.05) 100%)',
            backdropFilter: 'blur(50px) saturate(180%)',
            WebkitBackdropFilter: 'blur(50px) saturate(180%)',
          }}
        />
      )}

      
      {/* Content container */}
      <div className={`
        relative z-20 p-8 h-full flex flex-col
        ${testimonial.isStoryCard ? 'pt-16' : 'pt-8'}
      `}>
        {isDark ? (
          <>
            {/* Dark cards layout (like first reference image) */}
            {/* Spacer to push quote to middle */}
            <div className="flex-1"></div>

            {/* Quote - Starting from middle, scrollable */}
            <div className="flex-1 mb-8 overflow-hidden">
              <blockquote className="leading-relaxed text-md font-normal text-white">
                "{shouldUseTypewriter ? typewriterText : testimonial.quote}"
                {shouldUseTypewriter && isIntersecting && typewriterText.length < testimonial.quote.length && (
                  <span className="animate-pulse">|</span>
                )}
              </blockquote>
            </div>

            {/* Bottom section - Fixed at bottom, slimmer */}
            <div className="flex-shrink-0">
              {/* Snackpass Stories badge - only for story cards */}
              {testimonial.isStoryCard && (
                <div className="mb-1">
                  <span className="text-xs font-medium text-white/90 tracking-wide">Snackpass Stories</span>
                </div>
              )}
              
              {/* Company name - Large title */}
              <h3 className="text-white text-3xl font-bold leading-none">
                {testimonial.title}
              </h3>

              {/* Author name only - simple text below company */}
              <div className="text-sm font-normal mt-1 text-white/80">
                {testimonial.author}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Light cards layout (like second reference image) */}
            {/* Header at top */}
            <div className="mb-6">
              <h3 className="text-gray-900 text-2xl font-bold leading-tight mb-2">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-base font-medium">
                {testimonial.subtitle}
              </p>
            </div>

            {/* Quote in middle, scrollable */}
            <div className="flex-1 mb-8 overflow-hidden">
              <blockquote className="leading-relaxed text-base text-gray-800">
                "{shouldUseTypewriter ? typewriterText : testimonial.quote}"
                {shouldUseTypewriter && isIntersecting && typewriterText.length < testimonial.quote.length && (
                  <span className="animate-pulse text-gray-400">|</span>
                )}
              </blockquote>
            </div>

            {/* Author info at bottom with avatar */}
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=4F46E5&color=fff&size=40`}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">
                  {testimonial.role}, {testimonial.author}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {testimonial.since}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function DigitalFutureTestimonialsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('keto-insights');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const testimonialsSliderRef = useRef<HTMLDivElement>(null);
  
  // Section-level intersection observer to track if user is in testimonials section
  const { ref: sectionIntersectionRef, isIntersecting: isSectionVisible } = useIntersectionObserver({ 
    threshold: 0.2,
    triggerOnce: false 
  });

  // Handle scroll to update navigation button states for testimonials
  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialsSliderRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      }
    };

    const slider = testimonialsSliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTestimonialsLeft = () => {
    if (testimonialsSliderRef.current) {
      testimonialsSliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollTestimonialsRight = () => {
    if (testimonialsSliderRef.current) {
      testimonialsSliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);



  // Expanded testimonials data based on Snackpass website
  const testimonials = [
    {
      id: "xing-fu-tang",
      title: "Xing Fu Tang",
      subtitle: "Taiwan's No.1 Boba Brand",
      quote: "When it comes time to service a lot of tickets in short order, it is very helpful to be able to turn the POS into a kiosk… and have customers order for themselves and then dedicate that man power to making the actual drinks.",
      author: "Andrew Chuang",
      role: "CEO",
      company: "Xing Fu Tang",
      since: "Snackpass Partner Since 2023",
      cardType: "dark-overlay",
      hasBackgroundImage: true
    },
    {
      id: "ole-ole-burrito",
      title: "Ole Ole Burrito Express",
      subtitle: "30K Subscribers On Snackpass",
      quote: "With Snackpass we were finally able to bring all our operations under one roof, eliminating the stress of integrating and purchasing multiple solutions. Our day-to-day work has never been more efficient.",
      author: "Amin Fasil",
      role: "Owner",
      company: "Ole Ole Burrito Express",
      since: "Snackpass Partner Since 2020",
      cardType: "light-beige",
      hasBackgroundImage: false
    },
    {
      id: "riceful",
      title: "Riceful",
      subtitle: "1st Okinawa Onigiri Shop in the US",
      quote: "Everything is connected. Customers can order in-store, online, or via the app and always earn points. This consistency keeps our customers loyal and coming back.",
      author: "Kai Tang",
      role: "Owner",
      company: "Riceful",
      since: "Snackpass Partner Since 2020",
      cardType: "light-beige",
      hasBackgroundImage: false
    },
    {
      id: "empanada-factory",
      title: "Empanada Factory",
      subtitle: "3.4K Subscribers Through Snackpass",
      quote: "Implementing Snackpass wasn't just a tech upgrade; it was a revenue game-changer. With Snackpass on board, we've been able to bring more customers back through the door and boost everyday earnings.",
      author: "Marcelo Gutierrez",
      role: "CEO",
      company: "Empanada Factory",
      since: "Snackpass Partner Since 2021",
      cardType: "dark-overlay",
      hasBackgroundImage: true,
      isStoryCard: true
    }
  ];

  const handleGetStartedClick = () => {
    setIsExpanded(true);
  };

  const handleBackClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !testimonialsRef.current) {
            ticking = false;
            return;
          }

          const windowHeight = window.innerHeight;
          const scrollY = window.scrollY;
          
          // Find the Learn About Keto section (previous sibling)
          const learnAboutKetoSection = sectionRef.current.previousElementSibling as HTMLElement;
          if (!learnAboutKetoSection) {
            ticking = false;
            return;
          }
          
          // Get static positions to avoid recalculation issues
          const learnAboutKetoRect = learnAboutKetoSection.getBoundingClientRect();
          const learnAboutKetoTop = learnAboutKetoRect.top + scrollY;
          const learnAboutKetoHeight = learnAboutKetoRect.height;
          
          // Get the Digital Future section height
          const digitalFutureRect = sectionRef.current.getBoundingClientRect();
          const digitalFutureHeight = digitalFutureRect.height;
          
          // Get testimonials section height
          const testimonialsRect = testimonialsRef.current.getBoundingClientRect();
          const testimonialsHeight = testimonialsRect.height;
          
          // Find footer element to determine when to stop animation
          const footer = document.querySelector('footer');
          let stopAnimationPoint = learnAboutKetoTop + learnAboutKetoHeight + digitalFutureHeight;
          
          if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const footerTop = footerRect.top + scrollY;
            const footerHeight = footerRect.height;
            
            // Calculate the current position of footer bottom relative to viewport
            const footerBottom = footerTop + footerHeight;
            const currentViewportBottom = scrollY + windowHeight;
            
            // Stop animation when we can scroll no further (footer bottom reaches viewport bottom)
            // Account for the transform that moves footer up
            const maxScrollPosition = footerBottom - windowHeight;
            
            // If we're at or past the max scroll position, stop animation
            if (scrollY >= maxScrollPosition) {
              setScrollProgress(1);
              ticking = false;
              return;
            }
          }
          
          // Start animation when we're near the end of the Learn About Keto section
          const triggerStart = learnAboutKetoTop + learnAboutKetoHeight - windowHeight;
          
          // Calculate animation progress based on how much we can scroll
          if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const footerTop = footerRect.top + scrollY;
            const footerHeight = footerRect.height;
            const maxScrollPosition = footerTop + footerHeight - windowHeight;
            const animationRange = maxScrollPosition - triggerStart;
            
            if (scrollY >= triggerStart && animationRange > 0) {
              const scrollDistance = scrollY - triggerStart;
              const progress = Math.min(scrollDistance / animationRange, 1);
              setScrollProgress(progress);
            } else if (scrollY < triggerStart) {
              setScrollProgress(0);
            }
          } else {
            // Fallback if footer not found
            if (scrollY >= triggerStart) {
              const scrollDistance = scrollY - triggerStart;
              const progress = Math.min(scrollDistance / (digitalFutureHeight * 0.9), 1);
              setScrollProgress(progress);
            } else {
              setScrollProgress(0);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transform values for both sections
  // Use a more controlled transform that ensures footer stays as last visible item
  const maxTransform = containerRef.current?.getBoundingClientRect().height || 500;
  const digitalFutureTransform = `translateY(${-scrollProgress * maxTransform}px)`;
  const testimonialsTransform = `translateY(${-scrollProgress * maxTransform}px)`;

  return (
    <div className="relative">
      {/* Container that prevents vacant space by adjusting height */}
      <div 
        className="relative"
        style={{
          // Reduce container height as scroll progresses to eliminate vacant space
          marginBottom: scrollProgress > 0 ? `${-scrollProgress * (maxTransform * 0.6)}px` : '0px',
          transition: 'margin-bottom 0.1s ease-out'
        }}
      >
        {/* Digital Future Section */}
        <section 
          ref={sectionRef}
          className="relative overflow-hidden"
          style={{
            background: isExpanded 
              ? 'linear-gradient(135deg, rgba(254, 241, 225, 0.3) 0%, rgba(254, 241, 225, 0.4) 50%, rgba(254, 241, 225, 0.2) 100%)'
              : 'white',
            backdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
            WebkitBackdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
            transform: digitalFutureTransform,
            transition: 'transform 0.1s ease-out',
            zIndex: scrollProgress > 0 ? 10 : 1,
          }}
      >
       
        </section>
        
        {/* Testimonials Section - Now synchronized with scroll */}
        <div 
        ref={(el) => {
          testimonialsRef.current = el;
          sectionIntersectionRef.current = el;
        }}
        className="bg-gray-50 pb-0"
        style={{
          transform: testimonialsTransform,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="container mx-auto px-8 max-w-[1400px] pt-16">
          {/* Desktop Layout: Single row with header and cards */}
          <div className="hidden lg:flex lg:items-start lg:gap-8 relative">
            {/* Header Section - Fixed width column */}
            <div className="flex-shrink-0 w-80 flex flex-col justify-between h-[580px]">
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-black leading-[1.15] font-normal">
                  Why fast growing<br />
                  restaurant brands<br />
                  choose Snackpass
                </h2>
                <div className="space-y-6 font-medium">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Future proof your business. Stay ahead of the competition without spending millions.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                  </p>
                </div>
              </div>
              <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200 w-fit">
                Case Studies
              </button>
            </div>

            {/* Horizontal Scrolling Cards - Takes remaining space */}
            <div className="flex-1 overflow-x-auto pb-6 scrollbar-hide"  style={{
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* IE and Edge */
  }} ref={testimonialsSliderRef}>
              <div className="flex gap-6 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-80 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} index={index} isSectionVisible={isSectionVisible} />
                  </div>
                ))}
              </div>
            </div>

            {/* Left Navigation Button - At first card border - Only visible when can scroll left */}
            {canScrollLeft && (
              <button
                onClick={scrollTestimonialsLeft}
                className="absolute left-[calc(320px+32px-24px)] top-1/2 -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-900"
                style={{
                  background: 'rgba(254, 241, 225, 0.35)',
                  backdropFilter: 'blur(40px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                  border: '1px solid rgba(254, 241, 225, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Navigation Button - At right border of third card - Only visible when can scroll right */}
            {canScrollRight && (
              <button
                onClick={scrollTestimonialsRight}
                className="absolute left-[calc(320px+32px+960px+24px)] top-1/2 -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-900"
                style={{
                  background: 'rgba(254, 241, 225, 0.35)',
                  backdropFilter: 'blur(40px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                  border: '1px solid rgba(254, 241, 225, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>



          {/* Mobile Layout - Stack vertically with horizontal scrolling cards */}
          <div className="lg:hidden">
            {/* Header Section */}
            <div className="mb-12 px-4">
              <h2 className="text-3xl font-serif text-black leading-[1.15] font-normal mb-6">
                Why fast growing<br />
                restaurant brands<br />
                choose Snackpass
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-600 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                </p>
              </div>
              <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200 w-fit">
                Case Studies
              </button>
            </div>

            {/* Horizontal Scrolling Cards */}
            <div className="overflow-x-auto pb-6 overflow-hidden">
              <div className="flex gap-6 px-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-80 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} index={index} isSectionVisible={isSectionVisible} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        
       
      </div>
    </div>
  );
}