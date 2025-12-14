import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Copy, Key, Terminal, Code, Webhook, Activity, FileJson, Zap } from "lucide-react";

export default function Developer() {
  return (
    <Layout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Developer Platform</h1>
            <p className="text-muted-foreground">Manage your API integration, webhooks, and access documentation.</p>
          </div>
          <Button>
            <FileJson className="mr-2 h-4 w-4" /> Download OpenAPI Spec
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                API Usage (Last 30 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full flex items-end gap-1 pb-2">
                {[45, 60, 55, 70, 85, 80, 65, 75, 90, 85, 95, 100, 90, 80, 75, 60, 50, 65, 70, 85, 90, 95, 85, 75, 60, 55, 65, 70, 80, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm relative group"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-popover text-popover-foreground text-[10px] px-1.5 py-0.5 rounded border shadow-sm whitespace-nowrap">
                      {Math.floor(h * 1230)} reqs
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>May 15</span>
                <span>Total: 2.4M Requests</span>
                <span>Jun 14</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Quick Start</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Base URL</label>
                <div className="flex items-center gap-2 p-2 bg-muted rounded-md border border-border">
                  <code className="text-xs font-mono flex-1 text-primary">https://api.riskguardian.ai/v1</code>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">SDK Installation</label>
                <div className="flex items-center gap-2 p-2 bg-muted rounded-md border border-border">
                  <code className="text-xs font-mono flex-1">npm install @riskguardian/sdk</code>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="keys" className="space-y-6">
          <TabsList>
            <TabsTrigger value="keys" className="flex items-center gap-2"><Key className="h-4 w-4" /> API Keys</TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center gap-2"><Webhook className="h-4 w-4" /> Webhooks</TabsTrigger>
            <TabsTrigger value="playground" className="flex items-center gap-2"><Terminal className="h-4 w-4" /> Playground</TabsTrigger>
          </TabsList>

          <TabsContent value="keys" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active API Keys</CardTitle>
                    <CardDescription>Authentication tokens for your backend services.</CardDescription>
                  </div>
                  <Button size="sm"><Key className="mr-2 h-4 w-4" /> Create New Key</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Production Server A', prefix: 'rk_live_9283', created: '2024-01-15', lastUsed: 'Just now', scope: 'Full Access' },
                  { name: 'Staging Environment', prefix: 'rk_test_8273', created: '2024-03-22', lastUsed: '2 hours ago', scope: 'Read Only' },
                  { name: 'Mobile App Gateway', prefix: 'rk_live_1928', created: '2024-05-10', lastUsed: '5 mins ago', scope: 'Scan Only' },
                ].map((key, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{key.name}</p>
                          <Badge variant="outline" className="text-[10px]">{key.scope}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">{key.prefix}•••••••••••••</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Last used</p>
                        <p className="text-sm font-medium">{key.lastUsed}</p>
                      </div>
                      <Button variant="outline" size="sm">Roll Key</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Webhook Endpoints</CardTitle>
                    <CardDescription>Real-time event notifications for content takedowns and alerts.</CardDescription>
                  </div>
                  <Button size="sm"><Webhook className="mr-2 h-4 w-4" /> Add Endpoint</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Production Security Ops</p>
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">https://api.yourcorp.com/webhooks/risk-guardian</p>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">Success Rate</p>
                        <p className="text-sm font-medium text-green-500">99.8%</p>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </TabsContent>

           <TabsContent value="playground" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Request</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 bg-muted/30 p-0 font-mono text-sm relative">
                  <div className="absolute top-0 left-0 right-0 p-2 bg-muted border-b flex items-center gap-2">
                    <Badge>POST</Badge>
                    <span className="text-muted-foreground">/v1/content/analyze</span>
                  </div>
                  <textarea 
                    className="w-full h-full pt-12 p-4 bg-transparent border-none resize-none focus:ring-0"
                    defaultValue={`{
  "content": "Breaking: Aliens landed in Times Square!",
  "type": "text",
  "context": "social_media",
  "metadata": {
    "author_id": "user_123",
    "timestamp": "${new Date().toISOString()}"
  }
}`}
                  />
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Response</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 bg-black/90 p-4 font-mono text-sm text-green-400 overflow-auto">
                  <pre>{`{
  "id": "ana_8f92j39",
  "risk_score": 98,
  "verdict": "fake_news",
  "flags": [
    "fabrication",
    "sensationalism"
  ],
  "confidence": 0.99,
  "processing_time_ms": 42
}`}</pre>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button><Zap className="mr-2 h-4 w-4" /> Send Request</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
