"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  CalendarDays, 
  Clock,
  Send,
  FileText,
  Calculator,
  CheckCircle2,
  Zap,
  Users,
  Building,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export default function QuoteSection() {
  console.log("Quote page loaded");

  const { toast } = useToast();
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [formRef, formInView] = useInView({ threshold: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    
    // Step 2: Project Details
    serviceType: "",
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
    
    // Step 3: Additional Info
    hasPlans: false,
    needsDesign: false,
    installationRequired: false,
    consultationDate: null as Date | null,
    additionalNotes: "",
  });

  const serviceTypes = [
    "Custom Fabrication",
    "Design & Engineering", 
    "Installation",
    "Maintenance",
    "Staircase",
    "Roofing",
    "Glass",
    "Consultation Only"
  ];

  const projectTypes = [
    "Architectural Facades",
    "Railings & Handrails",
    "Industrial Components",
    "Artistic Installations",
    "Solar Panel Frameworks",
    "Decorative Elements",
    "Structural Components",
    "Other"
  ];

  const timelineOptions = [
    "Rush (1-2 weeks)",
    "Standard (3-4 weeks)",
    "Flexible (5-8 weeks)",
    "Long-term (2+ months)"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Prefer to discuss"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log("Quote form field updated:", name, value);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log("Quote form select updated:", name, value);
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
    console.log("Quote form checkbox updated:", name, checked);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setFormData(prev => ({ ...prev, consultationDate: date }));
      console.log("Consultation date selected:", date);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      console.log("Quote form step advanced to:", currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      console.log("Quote form step back to:", currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", formData);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-quote-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description: "Thank you! We'll prepare your detailed quote and contact you within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          projectType: "",
          description: "",
          timeline: "",
          budget: "",
          hasPlans: false,
          needsDesign: false,
          installationRequired: false,
          consultationDate: null,
          additionalNotes: "",
        });
        setCurrentStep(1);
        setSelectedDate(undefined);
      } else {
        toast({
          title: "Error Sending Quote Request",
          description: result.message || "There was an error sending your request. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending quote request:", error);
      toast({
        title: "Error Sending Quote Request",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.phone;
      case 2:
        return formData.serviceType && formData.projectType && formData.description;
      case 3:
        return true; // Step 3 has no required fields
      default:
        return false;
    }
  };

  return (
    <div id="quote" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-4 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <img
            src="https://assets.macaly-user-data.dev/h1p2t4ef44xqfewl5x5z5w52/tdboc5mssvbqw768ioi08voj/COyG5DKMOIDdySSy_uM5Z/tmpx8ulk9nz.webp"
            alt="3D Engineering Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 via-space-black/60 to-space-black/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-orbitron font-bold metallic-text mb-8"
          >
            Get Your Quote
          </motion.h1>
          
          <motion.div
            className="h-1 bg-gradient-to-r from-neon-red to-neon-blue mx-auto mb-8"
            initial={{ width: 0 }}
            animate={heroInView ? { width: "35%" } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-metal-chrome max-w-4xl mx-auto"
          >
            Tell us about your aluminum fabrication project and receive a detailed, 
            personalized quote within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Accurate Pricing",
                description: "Detailed quotes based on exact specifications and requirements"
              },
              {
                icon: Clock,
                title: "Fast Response",
                description: "Receive your comprehensive quote within 24 hours"
              },
              {
                icon: Users,
                title: "Expert Consultation",
                description: "Free consultation with our experienced engineering team"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-panel p-6 rounded-xl text-center hover-lift group"
                >
                  <div className="relative mb-4">
                    <Icon className="w-10 h-10 text-neon-red mx-auto group-hover:text-neon-blue transition-colors duration-300" />
                    <div className="absolute inset-0 w-10 h-10 bg-neon-red/20 blur-lg mx-auto group-hover:bg-neon-blue/20 transition-colors duration-300 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-orbitron font-semibold text-metal-chrome mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-metal-silver text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section ref={formRef} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="glass-panel p-8 md:p-12 rounded-2xl"
          >
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                      step <= currentStep
                        ? "bg-neon-red text-white"
                        : "glass-panel border border-metal-chrome text-metal-chrome"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-metal-silver">
                <span>Contact Info</span>
                <span>Project Details</span>
                <span>Finalize</span>
              </div>
              
              <div className="w-full bg-metal-dark/30 rounded-full h-2 mt-4">
                <motion.div
                  className="bg-gradient-to-r from-neon-red to-neon-blue h-2 rounded-full"
                  initial={{ width: "33%" }}
                  animate={{ width: `${(currentStep / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-orbitron font-bold metallic-text mb-4">
                      Contact Information
                    </h2>
                    <p className="text-metal-silver">
                      Let's start with your contact details so we can reach you with your quote.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-metal-chrome">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome"
                        placeholder="John"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-metal-chrome">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-metal-chrome">Email Address (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-metal-chrome">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-metal-chrome">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-orbitron font-bold metallic-text mb-4">
                      Project Details
                    </h2>
                    <p className="text-metal-silver">
                      Tell us about your project so we can provide an accurate quote.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-metal-chrome">Service Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                        <SelectTrigger className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent className="glass-panel border-metal-chrome/50 bg-space-black">
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service} className="text-metal-chrome hover:text-neon-blue">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-metal-chrome">Project Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                        <SelectTrigger className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="glass-panel border-metal-chrome/50 bg-space-black">
                          {projectTypes.map((project) => (
                            <SelectItem key={project} value={project} className="text-metal-chrome hover:text-neon-blue">
                              {project}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-metal-chrome">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome resize-none"
                      placeholder="Describe your project in detail: dimensions, materials, specific requirements, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-metal-chrome">Timeline</Label>
                      <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                        <SelectTrigger className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="glass-panel border-metal-chrome/50 bg-space-black">
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline} value={timeline} className="text-metal-chrome hover:text-neon-blue">
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-metal-chrome">Budget Range</Label>
                      <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                        <SelectTrigger className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="glass-panel border-metal-chrome/50 bg-space-black">
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget} className="text-metal-chrome hover:text-neon-blue">
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-orbitron font-bold metallic-text mb-4">
                      Additional Information
                    </h2>
                    <p className="text-metal-silver">
                      Help us better understand your needs and preferences.
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="hasPlans"
                        checked={formData.hasPlans}
                        onCheckedChange={(checked) => handleCheckboxChange("hasPlans", !!checked)}
                        className="border-metal-chrome data-[state=checked]:bg-neon-red"
                      />
                      <Label htmlFor="hasPlans" className="text-metal-chrome cursor-pointer">
                        I have existing plans/drawings
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="needsDesign"
                        checked={formData.needsDesign}
                        onCheckedChange={(checked) => handleCheckboxChange("needsDesign", !!checked)}
                        className="border-metal-chrome data-[state=checked]:bg-neon-red"
                      />
                      <Label htmlFor="needsDesign" className="text-metal-chrome cursor-pointer">
                        I need design and engineering services
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="installationRequired"
                        checked={formData.installationRequired}
                        onCheckedChange={(checked) => handleCheckboxChange("installationRequired", !!checked)}
                        className="border-metal-chrome data-[state=checked]:bg-neon-red"
                      />
                      <Label htmlFor="installationRequired" className="text-metal-chrome cursor-pointer">
                        Installation services required
                      </Label>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label className="text-metal-chrome">Preferred Consultation Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="glass-panel border-metal-chrome/50 hover:border-neon-blue bg-transparent text-metal-chrome justify-start text-left font-normal"
                        >
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 glass-panel border-metal-chrome/50 bg-space-black" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="text-metal-chrome"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes" className="text-metal-chrome">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="glass-panel border-metal-chrome/50 focus:border-neon-blue bg-transparent text-metal-chrome resize-none"
                      placeholder="Any additional information, special requirements, or questions..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    className="glass-button border-2 border-metallic-blue/30 text-dark-graphite hover:bg-metallic-blue/10"
                  >
                    Previous Step
                  </Button>
                )}
                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-dark-graphite font-semibold px-8 py-6 ml-auto"
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isStepValid()}
                    className="glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-dark-graphite font-semibold px-8 py-6 ml-auto"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Submit Quote Request
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-space-blue/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold metallic-text text-center mb-16"
          >
            What Happens Next?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                step: "1",
                title: "Review & Analysis",
                description: "Our team reviews your requirements and analyzes project specifications for accurate pricing."
              },
              {
                icon: Calculator,
                title: "Quote Preparation", 
                step: "2",
                description: "We prepare a detailed quote including materials, labor, timeline, and any additional services."
              },
              {
                icon: Zap,
                step: "3",
                title: "Delivery & Follow-up",
                description: "You receive your quote within 24 hours, followed by a consultation call to discuss details."
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-panel p-8 rounded-2xl text-center hover-lift group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full border-2 border-neon-red flex items-center justify-center text-2xl font-orbitron font-bold text-neon-red group-hover:bg-neon-red group-hover:text-white transition-all duration-300">
                      {step.step}
                    </div>
                    <Icon className="w-8 h-8 text-neon-blue absolute -top-2 -right-2 group-hover:text-neon-red transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-semibold text-metal-chrome mb-4 group-hover:text-neon-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-metal-silver group-hover:text-metal-chrome transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
} 