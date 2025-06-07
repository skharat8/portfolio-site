import React from "react";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";

import { Send, SendHorizontal } from "lucide-react";

import { cn, tw } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  message: string;
  "access-key": string;
};

function ContactForm() {
  const [status, setStatus] = React.useState("");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    subscribe,
    formState: { errors },
  } = useForm<FormData>();

  React.useEffect(() => {
    const callback = subscribe({
      formState: { values: true },
      name: "message",
      callback: () => {
        if (textAreaRef.current) {
          const scrollHeight = textAreaRef.current?.scrollHeight;
          textAreaRef.current.style.height = scrollHeight + "px";
        }
      },
    });

    return () => callback();
  }, [subscribe]);

  async function onSubmit(formData: FormData) {
    setStatus("sending");

    formData["access-key"] = "KEY";
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Form Submitted!");
      reset();
    } else {
      console.error(data);
      setStatus(data.message);
    }
  }

  const inputStyles = tw`outline-accent-red-600 h-6 rounded-sm bg-slate-400 px-2 text-slate-950
  placeholder:pt-1 focus-visible:outline-3`;
  const errorStyles = "text-left text-sm font-bold text-accent-red-600 my-1";
  const labelStyles = tw`font-bold`;

  return (
    <div
      className="mx-auto w-[min(50rem,95%)] rounded-md border-2 border-slate-500 bg-slate-800
        px-6 py-5 font-[Noto_Sans_Variable] text-slate-200"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h3 className="text-lg font-extrabold">Send Me a Message</h3>
        <p className="mb-1 text-slate-400 italic">
          Let's start a conversation. Fill out the form below and I'll get back
          to you as soon as possible.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="mr-auto flex flex-1 flex-col gap-2">
            <label className={labelStyles}>Name</label>
            <input
              {...register("name", { required: "Full name is required" })}
              type="text"
              placeholder="Your name"
              className={inputStyles}
            />
            {errors.name && (
              <p className={errorStyles}>{errors.name?.message}</p>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label className={labelStyles}>Email</label>
            <input
              {...register("email", { required: "Invalid email" })}
              type="email"
              autoComplete="email"
              placeholder="Your email"
              className={inputStyles}
            />
            {errors.email && (
              <p className={errorStyles}>{errors.email?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelStyles}>Message</label>
          <textarea
            {...register("message", { required: "Message cannot be empty" })}
            className={cn(inputStyles, "max-h-[30rem] min-h-10")}
            placeholder="Write your message here"
            ref={textAreaRef}
          ></textarea>
          {errors.message && (
            <p className={errorStyles}>{errors.message?.message}</p>
          )}
        </div>

        <button
          className="from-accent-red-500 to-accent-red-400 hover:from-accent-red-500/80
            hover:to-accent-red-400/80 text-accent-red-50 mt-1 flex w-full items-center
            justify-center gap-2 self-center rounded-sm bg-gradient-to-r py-2 pr-2 pl-4
            font-bold sm:w-[14rem]"
          type="submit"
        >
          Send Message
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
