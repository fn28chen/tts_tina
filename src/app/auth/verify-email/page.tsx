"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";

const formSchema = z.object({
  otp: z.string().min(4, {
    message: "Full Name must be 4 characters.",
  }),
});

export default function VerifyEmailForm() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Get email from cookies
  const email = Cookies.get("email");

  // 2. Define a submit handler.
  const onSubmit = async (
    { otp }: { otp: string },
  ) => {
    try {
      await axios.post("https://dev.mys.tinasoft.com.vn/api/v1/auth/verify-otp", { email, otp });
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <FormItem>
        <FormLabel htmlFor="otp">OTP</FormLabel>
        <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="OTP" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormMessage>{form.formState.errors.otp?.message}</FormMessage>
      </FormItem>
      <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
        Verify Email
      </Button>
    </Form>
  );
}
