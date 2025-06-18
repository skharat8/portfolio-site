import { HiMiniRectangleStack } from "react-icons/hi2";

import { motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

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
} from "../technologies";
import TechStack from "./TechStack";
import TechStackItem from "./TechStackItem";

function FirebirdTechStack({ className }: { className?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(
        `via-secondary-300 relative flex flex-col gap-6 rounded-xl bg-gradient-to-br
        from-slate-600 to-slate-300 px-3 pt-7 pb-5 font-[Noto_Sans_Variable] shadow-md
        sm:px-6`,
        className,
      )}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : "15%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div
        className="border-secondary-700 bg-secondary-900 text-secondary-200 text-subheader absolute
          -top-4 right-0 left-0 mx-auto flex w-[fit-content] items-center gap-2 rounded-lg
          border-1 px-4 py-1 font-bold"
      >
        <HiMiniRectangleStack />
        Tech Stack
      </div>

      <TechStack title="Frontend">
        <TechStackItem icon={HTML5}>HTML5</TechStackItem>
        <TechStackItem icon={CSS}>CSS</TechStackItem>
        <TechStackItem icon={Tailwind}>Tailwind</TechStackItem>
        <TechStackItem icon={Zod}>Zod</TechStackItem>
        <TechStackItem icon={React}>React</TechStackItem>
        <TechStackItem icon={TypeScript}>TypeScript</TechStackItem>
        <TechStackItem icon={ReactRouter}>React Router</TechStackItem>
        <TechStackItem icon={ReactQuery}>React Query</TechStackItem>
        <TechStackItem icon={ReactHookForm}>Hook Form</TechStackItem>
      </TechStack>

      <TechStack title="Backend">
        <TechStackItem icon={NodeJS}>NodeJS</TechStackItem>
        <TechStackItem icon={Express}>Express</TechStackItem>
        <TechStackItem icon={Cloudinary}>Cloudinary</TechStackItem>
        <TechStackItem icon={Prisma}>Prisma</TechStackItem>
        <TechStackItem icon={JWT}>JWT</TechStackItem>
        <TechStackItem icon={Zod}>Zod</TechStackItem>
      </TechStack>
    </motion.div>
  );
}

export default FirebirdTechStack;
