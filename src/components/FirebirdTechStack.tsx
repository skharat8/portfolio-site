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
    <div
      className={cn(
        `from-secondary-600 to-secondary-800 border-secondary-300 flex flex-col gap-6
        rounded-xl border-3 bg-gradient-to-br px-6 pt-4 pb-5 shadow-md`,
        className,
      )}
    >
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
    </div>
  );
}

export default FirebirdTechStack;
