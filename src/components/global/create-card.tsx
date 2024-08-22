import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FileUpload } from "../ui/file-upload";
import axios from "axios";
import Cookies from "js-cookie";

const formSchema = z.object({
  displayName: z.string().min(2, {
    message: "Tên không gian làm việc.",
  }),
  website: z
    .string()
    .url({
      message: "Vui lòng nhập URL hợp lệ.",
    })
    .optional()
    .or(z.literal("")),
  contactEmail: z
    .string()
    .email({
      message: "Vui lòng nhập email hợp lệ.",
    })
    .optional()
    .or(z.literal("")),
  contactPhone: z.string().min(10, {
    message: "Vui lòng nhập số điện thoại hợp lệ.",
  }),
  category: z
    .number()
    .min(0, {
      message: "Vui lòng chọn công ty hoặc tổ chức.",
    })
    .optional(),
  memberSize: z
    .string()
    .refine((val) => ["LT50", "LT100", "GT100"].includes(val), {
      message: "Vui lòng chọn quy mô công ty.",
    })
    .optional(),
  photoFile: z.instanceof(File, {
    message: "Vui lòng chọn logo hợp lệ.",
  }).optional(),  
});

export default function CreateCard() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
      website: "",
      contactEmail: "",
      contactPhone: "",
      category: 0,
      memberSize: "LT50",
      photoFile: undefined,
    },
  });

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      form.setValue("photoFile", files[0]);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async ({
    photoFile,
    ...formData
  }: z.infer<typeof formSchema>) => {
    const workspaceFormData = {
      ...formData,
      photoFile: photoFile,
    };
    // get accessToken from cookie
    try {
      const response = await axios.post(
        "https://dev.mys.tinasoft.com.vn/api/v1/companies",
        workspaceFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error creating workspace:", error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Card className="w-[300px] md:w-[600px]">
      <CardHeader>
        <CardTitle>Create workspace</CardTitle>
        <CardDescription>
          Deploy your new workspace in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </CardContent>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="workspace">Tên không gian làm việc</Label>
              <Input
                id="workspace"
                placeholder="Name of your project"
                {...form.register("displayName")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="Website"
                {...form.register("website")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                {...form.register("contactEmail")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                id="phone"
                placeholder="Số điện thoại"
                {...form.register("contactPhone")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Công ty</Label>
              <Select {...form.register("category")}>
                <SelectTrigger id="company">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Công ty</SelectItem>
                  <SelectItem value="1">Tổ chức</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="memberSize">Quy mô</Label>
              <Select {...form.register("memberSize")}>
                <SelectTrigger id="memberSize">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="LT50">LT50</SelectItem>
                  <SelectItem value="LT100">LT100</SelectItem>
                  <SelectItem value="GT100">GT100</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-between top-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" disabled={isLoading}>
              {!isLoading ? "Create Workspace" : "Waiting..."}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
