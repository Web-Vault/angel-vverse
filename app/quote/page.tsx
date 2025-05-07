"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const services = [
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Blog posts, website copy, social media content, and more.",
    icon: "📝",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategy, management, and paid campaigns across platforms.",
    icon: "📱",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    description: "Professional product photos for e-commerce and marketing.",
    icon: "📸",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Logos, branding, marketing materials, and digital assets.",
    icon: "🎨",
  },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Custom Quote Builder
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Get Your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Custom Quote
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project, and we'll provide a tailored quote for your digital marketing needs.
            </p>

            <div className="max-w-xl mx-auto">
              <Progress value={progress} className="h-2 bg-blue-400/20" />
              <div className="flex justify-between mt-2 text-sm text-blue-200">
                <span>Services</span>
                <span>Project Details</span>
                <span>Business Info</span>
                <span>Review</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Quote Request Submitted!
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Thank you for your interest in our services. Our team will review your project details and get back to you with a custom quote within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/")}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                  >
                    Return to Home
                  </Button>
                </motion.div>
              ) : (
                <>
                  {/* Step 1: Select Services */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        1. Select Services
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Choose the services you're interested in. You can select multiple options.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {services.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ scale: 1.02 }}
                            className={`border-2 rounded-xl p-6 cursor-pointer transition-all backdrop-blur-sm ${
                              selectedServices.includes(service.id)
                                ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg"
                                : "border-gray-200 hover:border-blue-300 bg-white/50"
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-start">
                              <div className="text-3xl mr-4 bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg">
                                {service.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                                  {service.title}
                                </h3>
                                <p className="text-gray-600">
                                  {service.description}
                                </p>
                              </div>
                              <div className="ml-auto">
                                <Checkbox
                                  checked={selectedServices.includes(service.id)}
                                  onCheckedChange={() => handleServiceToggle(service.id)}
                                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-cyan-600"
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <Button
                          onClick={handleNextStep}
                          disabled={selectedServices.length === 0}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                        >
                          Next Step <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        2. Project Details
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Tell us more about your project requirements and goals.
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="project-name">Project Name</Label>
                          <Input
                            id="project-name"
                            placeholder="e.g., Website Redesign, Social Media Campaign"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="project-description">
                            Project Description
                          </Label>
                          <Textarea
                            id="project-description"
                            placeholder="Please describe your project, goals, and any specific requirements..."
                            rows={5}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Project Timeline</Label>
                          <RadioGroup defaultValue="1-3-months">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="asap" id="asap" />
                                <Label htmlFor="asap">
                                  As soon as possible
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1-month" id="1-month" />
                                <Label htmlFor="1-month">Within 1 month</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="1-3-months"
                                  id="1-3-months"
                                />
                                <Label htmlFor="1-3-months">1-3 months</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="3-plus-months"
                                  id="3-plus-months"
                                />
                                <Label htmlFor="3-plus-months">3+ months</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label>Budget Range</Label>
                          <RadioGroup defaultValue="5k-10k">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="under-5k"
                                  id="under-5k"
                                />
                                <Label htmlFor="under-5k">Under $5,000</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5k-10k" id="5k-10k" />
                                <Label htmlFor="5k-10k">$5,000 - $10,000</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="10k-25k" id="10k-25k" />
                                <Label htmlFor="10k-25k">
                                  $10,000 - $25,000
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="25k-plus"
                                  id="25k-plus"
                                />
                                <Label htmlFor="25k-plus">$25,000+</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={handlePrevStep}>
                          Back
                        </Button>
                        <Button
                          onClick={handleNextStep}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Next Step <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Business Information */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        3. Business Information
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Please provide your contact and business details.
                      </p>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Company Website</Label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Company Size</Label>
                          <RadioGroup defaultValue="11-50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1-10" id="1-10" />
                                <Label htmlFor="1-10">1-10 employees</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="11-50" id="11-50" />
                                <Label htmlFor="11-50">11-50 employees</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="51-200" id="51-200" />
                                <Label htmlFor="51-200">51-200 employees</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="201-plus"
                                  id="201-plus"
                                />
                                <Label htmlFor="201-plus">201+ employees</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label>How did you hear about us?</Label>
                          <RadioGroup defaultValue="search">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="search" id="search" />
                                <Label htmlFor="search">Search Engine</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="social" id="social" />
                                <Label htmlFor="social">Social Media</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="referral"
                                  id="referral"
                                />
                                <Label htmlFor="referral">Referral</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={handlePrevStep}>
                          Back
                        </Button>
                        <Button
                          onClick={handleNextStep}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Next Step <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review and Submit */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        4. Review and Submit
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Please review your information before submitting your
                        quote request.
                      </p>

                      <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-4">
                            Selected Services
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedServices.map((serviceId) => {
                              const service = services.find(
                                (s) => s.id === serviceId
                              );
                              return service ? (
                                <div
                                  key={service.id}
                                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                                >
                                  <span className="mr-2">{service.icon}</span>
                                  {service.title}
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" required />
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the terms and conditions and privacy
                              policy
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="marketing" />
                            <Label htmlFor="marketing" className="text-sm">
                              I would like to receive marketing communications
                              about DigiMarkPro products, services, and events
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={handlePrevStep}>
                          Back
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                        >
                          Submit Quote Request
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
