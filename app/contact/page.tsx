"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Rocket,
  Globe,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
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
                Connect With Experts
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Strategic{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Partnerships
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leverage our digital expertise to transform your brand's online presence
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="max-w-6xl mx-auto"
            >
              <TabsList className="w-full mb-12 bg-gradient-to-br from-gray-50 to-blue-50 p-1 rounded-2xl backdrop-blur-sm border border-gray-200">
                <motion.div className="grid grid-cols-2 gap-2" initial={false}>
                  <TabsTrigger
                    value="general"
                    className="relative data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center"
                    >
                      <motion.span
                        animate={{ rotate: activeTab === "general" ? 15 : 0 }}
                        className="inline-block"
                      >
                        <Rocket className="h-6 w-6 mr-2 text-blue-600" />
                      </motion.span>
                      <span className="font-semibold text-gray-700">
                        General Inquiry
                      </span>
                    </motion.div>

                    {activeTab === "general" && (
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-200 rounded-xl"
                        layoutId="tabActiveState"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </TabsTrigger>

                  <TabsTrigger
                    value="specific"
                    className="relative data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center"
                    >
                      <motion.span
                        animate={{ rotate: activeTab === "specific" ? 15 : 0 }}
                        className="inline-block"
                      >
                        <Globe className="h-6 w-6 mr-2 text-cyan-500" />
                      </motion.span>
                      <span className="font-semibold text-gray-700">
                        Service Consultation
                      </span>
                    </motion.div>

                    {activeTab === "specific" && (
                      <motion.div
                        className="absolute inset-0 border-2 border-cyan-200 rounded-xl"
                        layoutId="tabActiveState"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </TabsTrigger>
                </motion.div>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="general" key="general">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                  >
                    {/* Form Section */}
                    <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                      <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                          >
                            Send Strategic Brief
                          </motion.h2>

                          <AnimatePresence>
                            {formSubmitted && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6"
                              >
                                Message received! Our strategists will respond
                                within 24 hours
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                              variants={itemVariants}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              <div className="space-y-2">
                                <Label className="text-gray-600">
                                  Your Name
                                </Label>
                                <Input
                                  className="rounded-lg h-12"
                                  placeholder="Johnathan Smith"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-600">
                                  Work Email
                                </Label>
                                <Input
                                  type="email"
                                  className="rounded-lg h-12"
                                  placeholder="john@company.com"
                                  required
                                />
                              </div>
                            </motion.div>

                            <motion.div
                              variants={itemVariants}
                              className="space-y-2"
                            >
                              <Label className="text-gray-600">
                                Project Overview
                              </Label>
                              <Textarea
                                className="rounded-lg min-h-[150px]"
                                placeholder="Describe your business goals and challenges..."
                                required
                              />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                              <Button
                                type="submit"
                                className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl text-lg"
                              >
                                <Send className="mr-2 h-5 w-5" />
                                Submit Brief
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      </CardContent>
                    </Card>

                    {/* Contact Channels */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                          Direct Channels
                        </h3>
                        <p className="text-gray-600 mb-8">
                          Connect directly with our executive team for
                          enterprise-level inquiries
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Card className="hover:shadow-lg transition-shadow border-0 rounded-xl">
                          <CardContent className="p-6 flex items-start">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                              <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">
                                Enterprise Solutions
                              </h3>
                              <p className="text-gray-600">
                                strategic@digimarkpro.com
                              </p>
                              <p className="text-gray-600">+1 (555) 234-5678</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Card className="hover:shadow-lg transition-shadow border-0 rounded-xl">
                          <CardContent className="p-6 flex items-start">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                              <Mail className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">
                                Media Inquiries
                              </h3>
                              <p className="text-gray-600">
                                pr@digimarkpro.com
                              </p>
                              <p className="text-gray-600">+1 (555) 234-5679</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Card className="hover:shadow-lg transition-shadow border-0 rounded-xl">
                          <CardContent className="p-6 flex items-start">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                              <MapPin className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">
                                Global Headquarters
                              </h3>
                              <p className="text-gray-600">
                                456 Innovation Boulevard
                              </p>
                              <p className="text-gray-600">
                                Tech Valley, TV 67890
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="specific" key="specific">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                  >
                    {/* Service Form */}
                    <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                      <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                          >
                            Service Consultation
                          </motion.h2>

                          <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                              variants={itemVariants}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              <div className="space-y-2">
                                <Label className="text-gray-600">
                                  Full Name
                                </Label>
                                <Input
                                  className="rounded-lg h-12"
                                  placeholder="Alex Johnson"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-600">
                                  Work Email
                                </Label>
                                <Input
                                  type="email"
                                  className="rounded-lg h-12"
                                  placeholder="alex@company.com"
                                  required
                                />
                              </div>
                            </motion.div>

                            <motion.div
                              variants={itemVariants}
                              className="space-y-2"
                            >
                              <Label className="text-gray-600">
                                Service Requirements
                              </Label>
                              <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                  "Brand Strategy",
                                  "Digital Advertising",
                                  "Content Production",
                                  "Data Analytics",
                                ].map((service) => (
                                  <div
                                    key={service}
                                    className="flex items-center space-x-3 bg-white p-4 rounded-xl border hover:border-blue-200 transition-all"
                                  >
                                    <RadioGroupItem
                                      value={service.toLowerCase()}
                                      id={service.toLowerCase()}
                                    />
                                    <Label
                                      htmlFor={service.toLowerCase()}
                                      className="font-normal text-gray-700"
                                    >
                                      {service}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                              <Button
                                type="submit"
                                className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl text-lg"
                              >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Request Consultation
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      </CardContent>
                    </Card>

                    {/* Success Metrics */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                          Why Partner With Us
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { metric: "250+", label: "Successful Campaigns" },
                            { metric: "98%", label: "Client Retention" },
                            { metric: "1.2B", label: "Revenue Generated" },
                            { metric: "50+", label: "Industry Awards" },
                          ].map((item, index) => (
                            <motion.div
                              key={item.label}
                              variants={itemVariants}
                              className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow"
                            >
                              <div className="text-3xl font-bold text-blue-600 mb-2">
                                {item.metric}
                              </div>
                              <div className="text-gray-600">{item.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Card className="border-0 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex items-center">
                              <div className="bg-white/10 p-3 rounded-xl mr-4">
                                <Phone className="h-8 w-8" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold mb-1">
                                  Priority Support
                                </h3>
                                <p className="text-blue-100">
                                  +1 (555) 234-5680
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Global Digital Innovation Centers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["North America", "Europe", "Asia Pacific", "Middle East"].map(
                (region) => (
                  <motion.div
                    key={region}
                    whileHover={{ y: -10 }}
                    className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all"
                  >
                    <Globe className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-xl font-semibold mb-2">{region}</h3>
                    <p className="text-gray-300">24/7 Strategic Support</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
