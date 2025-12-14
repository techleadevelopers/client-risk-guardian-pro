import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Globe, Bot, Mic2, Video, Eye, BrainCircuit } from "lucide-react";

const aiModels = [
  {
    id: "MOD-TXT-001",
    name: "LLM Hallucination Detector v4",
    description: "Detects text patterns typical of GPT-4, Claude, and Llama generated misinformation.",
    accuracy: "99.2%",
    type: "Text Analysis",
    status: true,
    icon: BrainCircuit
  },
  {
    id: "MOD-VID-002",
    name: "Deepfake Vision (Lip-Sync)",
    description: "Analyzes phoneme-viseme mismatch to detect AI-generated talking heads.",
    accuracy: "98.5%",
    type: "Video Forensics",
    status: true,
    icon: Video
  },
  {
    id: "MOD-AUD-001",
    name: "Voice Cloning Sentinel",
    description: "Identifies synthetic audio artifacts and lack of natural breathing patterns.",
    accuracy: "97.8%",
    type: "Audio Forensics",
    status: true,
    icon: Mic2
  },
  {
    id: "MOD-IMG-003",
    name: "Diffusion Artifact Scanner",
    description: "Detects invisible watermarks and pixel inconsistencies from Midjourney/DALL-E.",
    accuracy: "96.4%",
    type: "Image Forensics",
    status: true,
    icon: Eye
  },
  {
    id: "MOD-BOT-005",
    name: "Social Botnet Cluster Analysis",
    description: "Identifies coordinated inauthentic behavior (CIB) across social platforms.",
    accuracy: "94.1%",
    type: "Network Analysis",
    status: false,
    icon: Bot
  }
];

export default function Compliance() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">AI Detection Models</h1>
            <p className="text-muted-foreground">Configure the active neural networks used for fake news classification.</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            <BrainCircuit className="h-4 w-4" /> Train New Model
          </button>
        </div>

        <div className="grid gap-6">
          {aiModels.map((model) => (
            <Card key={model.id} className="transition-all hover:shadow-md border-l-4 border-l-transparent hover:border-l-primary group">
              <CardContent className="p-6 flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <model.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{model.name}</h3>
                      <Badge variant="outline" className="font-mono text-xs">
                        {model.id}
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200">
                        Accuracy: {model.accuracy}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                      {model.description}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5 font-medium">
                        {model.type}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right mr-4">
                    <span className="block text-sm font-medium">Model Status</span>
                    <span className={model.status ? "text-xs text-green-600 font-medium" : "text-xs text-muted-foreground"}>
                      {model.status ? "Active" : "Offline"}
                    </span>
                  </div>
                  <Switch checked={model.status} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
