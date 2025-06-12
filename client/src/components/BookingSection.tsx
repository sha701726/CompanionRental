import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertBooking } from "@shared/schema";

export default function BookingSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    duration: "",
    message: "",
    agreedToTerms: false
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description: "Thank you for your booking request! I'll get back to you within 2 hours via WhatsApp or email.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        duration: "",
        message: "",
        agreedToTerms: false
      });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your booking. Please try again or contact me directly.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions before booking.",
        variant: "destructive",
      });
      return;
    }

    const bookingData: InsertBooking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      message: formData.message,
    };

    bookingMutation.mutate(bookingData);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nitin! I'm interested in booking a hangout session. Can we chat about the details?");
    window.open(`https://wa.me/917017267400?text=${message}`, '_blank');
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Hang Out?</h2>
          <p className="text-xl text-slate-600">Book your perfect companion experience today!</p>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 7017267400"
                />
              </div>
              <div>
                <Label htmlFor="service">Type of Hangout *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Hangout</SelectItem>
                    <SelectItem value="in-person">In-Person Meetup</SelectItem>
                    <SelectItem value="creative">Creative Session</SelectItem>
                    <SelectItem value="tech">Tech Help & Guidance</SelectItem>
                    <SelectItem value="conversation">Fun Conversations</SelectItem>
                    <SelectItem value="custom">Custom Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="date">Preferred Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time *</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration *</Label>
                <Select
                  value={formData.duration}
                  onValueChange={(value) => setFormData({ ...formData, duration: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Hour</SelectItem>
                    <SelectItem value="1.5">1.5 Hours</SelectItem>
                    <SelectItem value="2">2 Hours</SelectItem>
                    <SelectItem value="3">3 Hours</SelectItem>
                    <SelectItem value="4">Half Day (4 Hours)</SelectItem>
                    <SelectItem value="6">3/4 Day (6 Hours)</SelectItem>
                    <SelectItem value="8">Full Day (8 Hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Tell me about what you're looking for</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your expectations, topics you'd like to discuss, or anything specific you have in mind..."
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                required
              />
              <Label htmlFor="terms" className="text-sm text-slate-700">
                I agree that all interactions will be professional and respectful. I understand the boundaries and safety guidelines. *
              </Label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 px-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {bookingMutation.isPending ? "Submitting..." : "🎉 Book My Hangout Experience!"}
              </Button>
              <Button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 bg-accent hover:bg-accent/90 text-white py-4 px-6 text-lg transition-all"
              >
                💬 Quick WhatsApp Chat
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Typically respond within 2 hours • Advance booking recommended • Flexible rescheduling available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
