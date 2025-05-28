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
  Vite,
  Zod,
} from "./technologies";

function FirebirdTechStack() {
  return (
    <div
      className="flex flex-col gap-8 rounded-md border-2 border-slate-400 bg-gradient-to-b
        from-slate-700 to-slate-800 px-2 pt-4 pb-6"
    >
      <TechStack title="Frontend">
        <TechStackItem icon={<HTML5 />}>HTML5</TechStackItem>
        <TechStackItem icon={<CSS />}>CSS</TechStackItem>
        <TechStackItem icon={<Tailwind />}>Tailwind</TechStackItem>
        <TechStackItem icon={<Zod />}>Zod</TechStackItem>
        <TechStackItem icon={<React />}>React</TechStackItem>
        <TechStackItem icon={<Vite />}>Vite</TechStackItem>
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
