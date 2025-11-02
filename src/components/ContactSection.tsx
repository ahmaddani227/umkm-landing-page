"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "..//components/ui/input";
import { Textarea } from "..//components/ui/textarea";
import { Button } from "..//components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  email: z.email({ message: "Format email tidak valid." }),
  message: z.string().min(5, { message: "Pesan terlalu singkat." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async () => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1800));

    setLoading(false);
    toast.success(
      "Terima kasih! Pesanmu sudah terkirim. Kami akan menghubungi kamu."
    );

    form.reset();
  };

  return (
    <section
      className="container py-10 sm:py-0 text-center space-y-8"
      id="contact"
    >
      <div className="text-sm sm:text-lg text-primary flex justify-center gap-2.5 items-center">
        <div className="animate-shake-slow">💬</div>Hubungi Kami
      </div>

      <h2 className="text-[24px] sm:text-[40px] font-recoleta">
        Kami Siap Mendengar Cerita dan Ide Anda
      </h2>

      <p className="text-[12px] sm:text-sm opacity-70 max-w-[400px] mx-auto">
        Punya pertanyaan, saran, atau ingin berkolaborasi? Kirimkan pesanmu
        melalui form di bawah ini.
      </p>

      <div className="max-w-[500px] mx-auto text-left">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 sm:space-y-7"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan nama lengkap kamu"
                      {...field}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="contoh@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tulis pesan kamu di sini..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                "Kirim Pesan"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
