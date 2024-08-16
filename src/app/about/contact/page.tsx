"use client";
import LayoutComponents from "@/components/ui/layout-components";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

import ubuntu from "../../../../public/img/Ubuntu.png";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Họ và tên",
  }),
  phone: z.string().min(8, {
    message: "Số điện thoại",
  }),
  email: z.string().min(8, {
    message: "Email",
  }),
  text: z.string().min(10, {
    message: "Lời nhắn",
  }),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <LayoutComponents className="bg-white dark:bg-neutral-900 h-full">
      <div className="grid grid-cols-12 gap-4 mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="col-span-6">
          <Image
            src={ubuntu}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your text here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </LayoutComponents>
  );
}
