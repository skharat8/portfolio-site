import { HiMiniRectangleStack } from "react-icons/hi2";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import TechStack from "./TechStack";
import TechStackItem from "./TechStackItem";
import {
  CSS,
  Cloudinary,
  Express,
  HTML5,
  JWT,
  NodeJS,
  Prisma,
  React,
  ReactHookForm,
  ReactQuery,
  ReactRouter,
  Tailwind,
  TypeScript,
  Zod,
} from "./technologies";

function FirebirdTechStack({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        `to-secondary-600 border-secondary-300 relative flex flex-col gap-6 rounded-xl
        border-3 bg-gradient-to-br from-slate-700 px-6 pt-7 pb-5
        font-[Noto_Sans_Variable] shadow-md`,
        className,
      )}
      initial={{ opacity: 0, y: "15%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div
        className="border-secondary-700 bg-secondary-900 text-secondary-200 absolute -top-5 right-0
          left-0 mx-auto flex w-[fit-content] items-center gap-2 rounded-lg border-4 px-5
          py-2 text-xl font-bold"
      >
        <HiMiniRectangleStack />
        Tech Stack
      </div>

      <TechStack title="Frontend">
        <TechStackItem icon={<HTML5 />}>HTML5</TechStackItem>
        <TechStackItem icon={<CSS />}>CSS</TechStackItem>
        <TechStackItem icon={<Tailwind />}>Tailwind</TechStackItem>
        <TechStackItem icon={<Zod />}>Zod</TechStackItem>
        <TechStackItem icon={<React />}>React</TechStackItem>
        <TechStackItem icon={<TypeScript />}>TypeScript</TechStackItem>
        <TechStackItem icon={<ReactRouter />}>React Router</TechStackItem>
        <TechStackItem icon={<ReactQuery />}>React Query</TechStackItem>
        <TechStackItem icon={<ReactHookForm />}>Hook Form</TechStackItem>
      </TechStack>

      <TechStack title="Backend">
        <TechStackItem icon={<NodeJS />}>NodeJS</TechStackItem>
        <TechStackItem icon={<Express />}>Express</TechStackItem>
        <TechStackItem icon={<Cloudinary />}>Cloudinary</TechStackItem>
        <TechStackItem icon={<Prisma />}>Prisma</TechStackItem>
        <TechStackItem icon={<JWT />}>JWT</TechStackItem>
        <TechStackItem icon={<Zod />}>Zod</TechStackItem>
      </TechStack>
    </motion.div>
  );
}

export default FirebirdTechStack;
