"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  email: z.email({ message: "Format email tidak valid." }),
  message: z.string().min(5, { message: "Pesan terlalu singkat." }),
});

type FormValues = z.infer<typeof formSchema>;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

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
    toast.success("Terima kasih! Pesanmu sudah terkirim 🙌");
    form.reset();
  };

  return (
    <section
      className="container py-10 sm:py-0 text-center space-y-8"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.1}
        className="text-sm sm:text-lg text-primary flex justify-center gap-2.5 items-center"
      >
        <div className="animate-shake-slow">💬</div>Hubungi Kami
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.2}
        className="text-[24px] sm:text-[40px] font-recoleta"
      >
        Kami Siap Mendengar Cerita dan Ide Anda
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.3}
        className="text-[12px] sm:text-sm opacity-70 max-w-[400px] mx-auto"
      >
        Punya pertanyaan, saran, atau ingin berkolaborasi? Kirimkan pesanmu
        melalui form di bawah ini.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.4}
        className="max-w-[500px] mx-auto text-left mb-7"
      >
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
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/70 focus:shadow-[0_0_15px_rgba(190,255,0,0.3)]"
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
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/70 focus:shadow-[0_0_15px_rgba(190,255,0,0.3)]"
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
                      className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/70 focus:shadow-[0_0_15px_rgba(190,255,0,0.3)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="w-full flex justify-center"
            >
              <Button
                type="submit"
                className="w-full transition-all duration-300 hover:scale-[1.02]"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  "Kirim Pesan"
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
