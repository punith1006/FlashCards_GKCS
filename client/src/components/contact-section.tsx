import { motion } from "framer-motion";
import { Mail, Globe, Users, ShoppingCart, Download, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  fullName: string;
  email: string;
  interestLevel: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    interestLevel: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      interestLevel: "",
      message: "",
    });
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Master AI?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your AI learning journey today with our scientifically-proven flashcard system. Join thousands of successful learners worldwide.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--gk-blue)] rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-slate-300">info@gkcloud.ai</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--gk-green)] rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Website</div>
                  <div className="text-slate-300">www.gkcloud.ai</div>
                </div>
              </div>
              
              {/* <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--gk-orange)] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Community</div>
                  <div className="text-slate-300">Join our learning community</div>
                </div>
              </div> */}
            </div>
            
            {/* <div className="flex gap-4 mt-8">
              <Button className="px-6 py-3 bg-[var(--gk-blue)] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </div> */}
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 text-slate-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="interestLevel" className="block text-sm font-medium text-slate-700 mb-1">
                  Interest Level
                </Label>
                <Select value={formData.interestLevel} onValueChange={(value) => handleInputChange("interestLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner - New to AI</SelectItem>
                    <SelectItem value="intermediate">Intermediate - Some Experience</SelectItem>
                    <SelectItem value="advanced">Advanced - AI Professional</SelectItem>
                    <SelectItem value="educator">Educator - Teaching AI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your learning goals..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full px-6 py-3 bg-[var(--gk-blue)] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
