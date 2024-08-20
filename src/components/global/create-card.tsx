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
  workspace_name: z.string().min(2, {
    message: "Tên không gian làm việc.",
  }),
  website: z
    .string()
    .url({
      message: "Vui lòng nhập URL hợp lệ.",
    })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email({
      message: "Vui lòng nhập email hợp lệ.",
    })
    .optional()
    .or(z.literal("")),
  phone: z.string().min(10, {
    message: "Vui lòng nhập số điện thoại hợp lệ.",
  }),
  company: z
    .enum(["company", "organization"], {
      message: "Vui lòng chọn công ty hoặc tổ chức.",
    })
    .optional(),
  scale: z
    .enum(["lt50", "lt100", "gt100"], {
      message: "Vui lòng chọn quy mô công ty.",
    })
    .optional(),
  workspace_logo: z.instanceof(File, {
    message: "Vui lòng chọn logo hợp lệ.",
  }),
});

export default function CreateCard() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspace_name: "",
      website: "",
      email: "",
      phone: "",
      company: "company",
      scale: "lt50",
      workspace_logo: undefined,
    },
  });

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      form.setValue("workspace_logo", files[0]);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("workspace_name", values.workspace_name);
    formData.append("website", values.website || "");
    formData.append("email", values.email || "");
    formData.append("phone", values.phone);
    formData.append("company", values.company || "");
    formData.append("scale", values.scale || "");
    formData.append("workspace_logo", values.workspace_logo);

    // get accessToken from cookie
    try {
      const response = await axios.post(
        "https://dev.mys.tinasoft.com.vn/api/v1/companies",
        formData,
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
                {...form.register("workspace_name")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="Website"
                {...form.register("website", {
                  setValueAs: (value) => value || "",
                })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                {...form.register("email", {
                  setValueAs: (value) => value || "",
                })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                id="phone"
                placeholder="Số điện thoại"
                {...form.register("phone")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Công ty</Label>
              <Select {...form.register("company")}>
                <SelectTrigger id="company">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="company">Công ty</SelectItem>
                  <SelectItem value="organization">Tổ chức</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="scale">Quy mô</Label>
              <Select {...form.register("scale")}>
                <SelectTrigger id="scale">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="lt50">LT50</SelectItem>
                  <SelectItem value="lt100">LT100</SelectItem>
                  <SelectItem value="gt100">GT100</SelectItem>
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
