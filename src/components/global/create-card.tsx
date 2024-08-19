import * as React from "react";

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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FileUpload } from "../ui/file-upload";

const formSchema = z.object({
  workspace: z.string().min(2, {
    message: "Tên không gian làm việc phải ít nhất 2 ký tự.",
  }),
  website: z.string().url({
    message: "Vui lòng nhập URL hợp lệ.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Vui lòng nhập số điện thoại hợp lệ.",
  }),
  company: z.enum(["company", "organization"], {
    message: "Vui lòng chọn công ty hoặc tổ chức.",
  }),
  scale: z.enum(["lt50", "lt100", "gt100"], {
    message: "Vui lòng chọn quy mô công ty.",
  }),
});

export default function CreateCard() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspace: "",
      website: "",
      email: "",
      phone: "",
      company: "company",
      scale: "lt50",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [files, setFiles] = React.useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <Card className="w-[300px] md:w-[600px]">
      <CardHeader>
        <CardTitle>Create workspace</CardTitle>
        <CardDescription>
          Deploy your new workspace in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4 grid-cols-1 md:grid-cols-2">
            <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
              <FileUpload onChange={handleFileUpload} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="workspace">Tên không gian làm việc</Label>
                <Input
                  id="workspace"
                  placeholder="Name of your project"
                  {...form.register("workspace")}
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  {...form.register("email")}
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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit" onClick={() => onSubmit(form.getValues())}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
