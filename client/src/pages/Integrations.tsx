import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, CheckCircle2, ArrowRight } from "lucide-react";

const integrations = [
  {
    id: "instagram",
    name: "Instagram",
    category: "Social",
    description: "Scan images and reels for manipulated content and deepfakes automatically.",
    status: "Connected",
    icon: "📸"
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    category: "Social",
    description: "Real-time firehose monitoring for botnet clusters and trending misinformation.",
    status: "Available",
    icon: "✖️"
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "Video",
    description: "Frame-by-frame video analysis for face-swaps and synthetic audio overlay.",
    status: "Available",
    icon: "🎵"
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "CMS",
    description: "Plugin to verify article drafts before publishing. preventing accidental fake news.",
    status: "Coming Soon",
    icon: "📝"
  },
  {
    id: "slack",
    name: "Slack",
    category: "Notifications",
    description: "Receive critical security alerts directly in your Ops channel.",
    status: "Connected",
    icon: "💬"
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Enrich customer profiles with risk scores and social verification data.",
    status: "Available",
    icon: "☁️"
  }
];

export default function Integrations() {
  return (
    <Layout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Integrations Marketplace</h1>
            <p className="text-muted-foreground">Connect Risk Guardian to your existing stack.</p>
          </div>
          <div className="relative w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search integrations..." className="pl-9" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <Card key={item.id} className="flex flex-col hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between">
                   <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                     {item.icon}
                   </div>
                   {item.status === 'Connected' ? (
                     <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                       <CheckCircle2 className="mr-1 h-3 w-3" /> Installed
                     </Badge>
                   ) : item.status === 'Coming Soon' ? (
                     <Badge variant="outline" className="text-muted-foreground">Waitlist</Badge>
                   ) : (
                     <Badge variant="secondary">Available</Badge>
                   )}
                </div>
                <CardTitle className="mt-4">{item.name}</CardTitle>
                <CardDescription className="line-clamp-2 min-h-[40px]">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-0">
                <Button 
                  variant={item.status === 'Connected' ? "outline" : "default"} 
                  className="w-full"
                  disabled={item.status === 'Coming Soon'}
                >
                  {item.status === 'Connected' ? 'Configure' : item.status === 'Coming Soon' ? 'Notify Me' : 'Connect'}
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="flex flex-col items-center justify-center border-dashed p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer min-h-[250px]">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Plus className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Build your own</h3>
            <p className="text-sm text-muted-foreground mt-2 mb-4 max-w-[200px]">
              Use our Developer API to build custom connectors for your proprietary tools.
            </p>
            <Button variant="link" className="text-primary gap-1">
              View Documentation <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
