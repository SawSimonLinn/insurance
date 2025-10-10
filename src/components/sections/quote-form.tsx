"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { handleQuoteRequest } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  birthday: z.date({
    required_error: "A date of birth is required.",
  }),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  insuranceType: z.enum(["Auto", "Home", "Commercial", "Life & Health"], { required_error: "Please select an insurance type." }),
  address: z.string().min(10, "Address must be at least 10 characters."),
});

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await handleQuoteRequest({
        ...values,
        birthday: values.birthday.toISOString(),
    });

    if (result.success) {
      toast({
        title: "Request Sent!",
        description: "Thank you for reaching out! Our team will contact you soon to discuss your coverage options.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.error || "There was a problem with your request. Please try again.",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Start Your Free Quote Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Birthday</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g. you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g. (555) 555-5555" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="insuranceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an insurance type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Auto">Auto Insurance</SelectItem>
                          <SelectItem value="Home">Home Insurance</SelectItem>
                          <SelectItem value="Commercial">Commercial Insurance</SelectItem>
                          <SelectItem value="Life & Health">Life & Health Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g. 123 Main St, Anytown, USA 12345"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Requesting...' : 'Request Quote'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
