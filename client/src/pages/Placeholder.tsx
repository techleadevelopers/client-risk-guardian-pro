import { Layout } from "@/components/layout/Layout";
import { Construction } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] space-y-4 text-center">
        <div className="p-4 rounded-full bg-muted">
          <Construction className="h-10 w-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground max-w-md">
            {description}
          </p>
        </div>
      </div>
    </Layout>
  );
}
