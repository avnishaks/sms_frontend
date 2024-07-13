"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "../ui/form";
import CustomForm, { FormFieldType } from '../CustomForm';
import { z } from "zod";
import { AdmissionForm } from "@/constants"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Student() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...AdmissionForm,
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form>
        <CustomForm
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          label="Full name"
          placeholder="Avnish Kumar"
          iconSrc=""
          iconAlt="user"
        />
        <CustomForm
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="cse.avnish@gmail.com"
          iconSrc=""
          iconAlt="email"
        />

        <CustomForm
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="7700801472"
        />
      </form>
    </Form>
  );
}
