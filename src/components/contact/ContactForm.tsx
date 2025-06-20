import React, { useImperativeHandle } from "react";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";

import { LoaderCircle, RefreshCcw, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn, tw } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  access_key: string;
};

enum FormStatus {
  INITIAL = "initial",
  SENDING = "sending",
  SUCCESS = "success",
  ERROR = "error",
}

function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>(FormStatus.INITIAL);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    subscribe,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const { ref, ...rest } = register("message", {
    required: "Message cannot be empty",
  });

  useImperativeHandle(ref, () => textAreaRef.current);

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  React.useEffect(() => {
    setValue("subject", `Message from ${userName}`);
  }, [userName]);

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
    setStatus(FormStatus.SENDING);

    formData["access_key"] = "4c2a6e40-8a80-4366-8cf7-8ba0ddaf36b8";
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData, null, 2),
    });

    const data = await res.json();
    if (data.success) {
      setStatus(FormStatus.SUCCESS);
      clearErrors();
      reset();
    } else {
      setStatus(FormStatus.ERROR);
      toast.error("Sorry, something went wrong. Please try again later.", {
        style: {
          backgroundColor: "var(--color-accent-red-50)",
          color: "firebrick",
        },
      });

      console.error(data);
    }
  }

  const inputStyles = tw`outline-accent-red-300 h-6 rounded-sm bg-slate-400 px-2 text-slate-950
  placeholder:pt-1 focus-visible:outline-2`;
  const errorStyles = tw`text-accent-red-500 text-sm`;
  const labelStyles = tw`font-bold`;

  return (
    <div
      className="mx-auto w-[min(50rem,95%)] rounded-md border-2 border-slate-500 bg-slate-800
        px-6 py-5 font-[Noto_Sans_Variable] text-slate-200"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col ${errors.email ? "gap-2" : "gap-4"}`}
      >
        <h3 className="text-lg font-extrabold">Send Me a Message</h3>
        <p className="mb-1 text-slate-400 italic">
          Let's start a conversation. Fill out the form below and I'll get back
          to you as soon as possible.
        </p>

        <div className={`flex flex-wrap ${errors.name ? "gap-2" : "gap-4"}`}>
          <div className="mr-auto flex flex-1 flex-col gap-2">
            <label htmlFor="name" className={labelStyles}>
              Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              disabled={status === FormStatus.SENDING}
              className={inputStyles}
            />
            {errors.name && (
              <p className={errorStyles}>{errors.name?.message}</p>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            <input
              {...register("email", { required: "Please enter a valid email" })}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              disabled={status === FormStatus.SENDING}
              className={inputStyles}
            />
            {errors.email && (
              <p className={errorStyles}>{errors.email?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          <textarea
            {...rest}
            className={cn(
              inputStyles,
              "max-h-[40rem] min-h-10 sm:min-h-[15rem]",
            )}
            id="message"
            placeholder="Write your message here"
            disabled={status === FormStatus.SENDING}
            ref={textAreaRef}
          ></textarea>
          {errors.message && (
            <p className={errorStyles}>{errors.message?.message}</p>
          )}
        </div>

        <div className="flex-center mt-2 gap-3">
          <AnimatePresence>
            <motion.button
              className="from-accent-red-500 to-accent-red-400 hover:from-accent-red-500/80
                hover:to-accent-red-400/80 disabled:to-accent-red-400/80 text-accent-red-50
                disabled:from-accent-red-500/80 flex w-full items-center justify-center gap-2
                self-center rounded-sm bg-gradient-to-r py-2 pr-2 pl-4 font-bold
                disabled:cursor-default sm:w-[14rem]"
              type="submit"
              layout={true}
              disabled={
                status === FormStatus.SENDING || status === FormStatus.SUCCESS
              }
            >
              {status === FormStatus.SENDING && (
                <>
                  Send Message
                  <LoaderCircle
                    size={16}
                    className="animate-rotate-360 [animation-iteration-count:infinite]"
                  />
                </>
              )}
              {status === FormStatus.SUCCESS && <span>Successfully Sent!</span>}
              {(status === FormStatus.INITIAL ||
                status === FormStatus.ERROR) && (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </motion.button>
            {status === FormStatus.SUCCESS && (
              <motion.button
                onClick={() => setStatus(FormStatus.INITIAL)}
                className="rounded-md px-3 py-2 hover:bg-slate-700"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <RefreshCcw size={20} color="var(--color-slate-100)" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
