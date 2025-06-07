import type { PropsWithChildren } from "react";

import { CloudUpload, Database, Gauge, TabletSmartphone } from "lucide-react";

type FirebirdFeatureItemProp = {
  title: string;
  icon: React.ReactNode;
};

function FirebirdFeatureItem({
  title,
  icon,
  children,
}: PropsWithChildren<FirebirdFeatureItemProp>) {
  return (
    <li className="flex flex-col gap-2 rounded-md p-2 font-[Noto_Sans_Variable]">
      {icon}
      <h3 className="text-accent-red-400 font-bold">{title}</h3>
      {children}
    </li>
  );
}

function FirebirdFeatures() {
  return (
    <ul
      className="grid grid-cols-[repeat(auto-fit,minmax(min(8rem,100%),1fr))] gap-4 p-4
        text-slate-50 lg:text-lg"
    >
      <FirebirdFeatureItem title="Full Stack" icon={<Database />}>
        RESTful API with NodeJS and Express for routing and a Postgres database
        managed via Prisma
      </FirebirdFeatureItem>

      <FirebirdFeatureItem title="Optimistic Updates" icon={<Gauge />}>
        Improve user experience by updating local state early when interacting
        with user posts
      </FirebirdFeatureItem>

      <FirebirdFeatureItem title="Remote State" icon={<CloudUpload />}>
        React Query for state management of asynchronous remote data
      </FirebirdFeatureItem>

      <FirebirdFeatureItem
        title="Responsive Design"
        icon={<TabletSmartphone />}
      >
        Adapts to different screen sizes with a stylish profile page and custom
        animations
      </FirebirdFeatureItem>
    </ul>
  );
}

export default FirebirdFeatures;
