"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns/format"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

const meetingTypes = [
  {
    id: "discovery",
    title: "Discovery Call",
    description: "A 30-minute introduction to understand your needs and how we can help.",
    icon: "🔍",
  },
  {
    id: "consultation",
    title: "Marketing Consultation",
    description: "A 60-minute deep dive into your marketing strategy and opportunities.",
    icon: "📊",
  },
  {
    id: "project",
    title: "Project Discussion",
    description: "A 45-minute session to discuss a specific project or campaign.",
    icon: "📝",
  },
]

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedMeetingType, setSelectedMeetingType] = useState<string>("discovery")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Meeting</h1>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation with our digital marketing experts to discuss your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-700">Meeting Scheduled!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for scheduling a meeting with us. We've sent a confirmation email with all the details. We
                look forward to speaking with you!
              </p>
              <Button onClick={() => (window.location.href = "/")} className="bg-blue-600 hover:bg-blue-700">
                Return to Home
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Calendar Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Select a Date & Time</h2>

                    <div className="mb-6">
                      <Label className="mb-2 block">Meeting Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable weekends and past dates
                              const day = date.getDay()
                              const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
                              return day === 0 || day === 6 || isPastDate
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="mb-6">
                      <Label className="mb-2 block">Available Time Slots</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className={cn(
                              "justify-center",
                              selectedTime === time ? "bg-blue-600 hover:bg-blue-700" : "",
                            )}
                            onClick={() => setSelectedTime(time)}
                            disabled={!date}
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label className="mb-2 block">Meeting Type</Label>
                      <RadioGroup value={selectedMeetingType} onValueChange={setSelectedMeetingType}>
                        <div className="space-y-3">
                          {meetingTypes.map((type) => (
                            <div
                              key={type.id}
                              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                selectedMeetingType === type.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300"
                              }`}
                              onClick={() => setSelectedMeetingType(type.id)}
                            >
                              <div className="flex items-start">
                                <div className="text-2xl mr-3">{type.icon}</div>
                                <div className="flex-1">
                                  <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                                  <Label htmlFor={type.id} className="text-lg font-semibold cursor-pointer">
                                    {type.title}
                                  </Label>
                                  <p className="text-gray-600 text-sm">{type.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Your Information</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        <Input id="company" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website</Label>
                        <Input id="website" type="url" placeholder="https://" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">What would you like to discuss?</Label>
                        <Textarea
                          id="message"
                          placeholder="Please share any specific topics or questions you'd like to cover in our meeting..."
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                        disabled={!date || !selectedTime}
                      >
                        Schedule Meeting
                      </Button>

                      {(!date || !selectedTime) && (
                        <p className="text-sm text-center text-gray-500">
                          Please select a date and time to schedule your meeting.
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Why Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Why Schedule a Meeting With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our free consultations are designed to provide value and insights for your business, with no obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Advice",
                description: "Get personalized recommendations from our experienced digital marketing specialists.",
                icon: "🧠",
              },
              {
                title: "Clear Strategy",
                description: "Understand the best approach for your specific business goals and target audience.",
                icon: "🎯",
              },
              {
                title: "No Obligation",
                description: "Our consultations are completely free with no pressure to purchase services.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
