import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Shield, Key, Bell, Users, Zap, Eye, Save } from "lucide-react";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">System Settings</h1>
          <p className="text-muted-foreground">Manage global configurations, API access, and detection thresholds.</p>
        </div>

        <Tabs defaultValue="detection" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="detection">Detection</TabsTrigger>
            <TabsTrigger value="api">API Access</TabsTrigger>
            <TabsTrigger value="notifications">Alerts</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="detection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Sensitivity Thresholds
                </CardTitle>
                <CardDescription>
                  Adjust how aggressive the AI should be when flagging content.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Fake News Confidence Threshold</label>
                      <p className="text-xs text-muted-foreground">Minimum score (0-100) to flag content as potential misinformation.</p>
                    </div>
                    <Badge variant="secondary" className="font-mono">75%</Badge>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-[60%]" />
                </div>
                
                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Deepfake Detection Strictness</label>
                      <p className="text-xs text-muted-foreground">Lower values increase sensitivity but may cause false positives.</p>
                    </div>
                    <Badge variant="secondary" className="font-mono">88%</Badge>
                  </div>
                  <Slider defaultValue={[88]} max={100} step={1} className="w-[60%]" />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Auto-Takedown for Critical Threats</label>
                    <p className="text-xs text-muted-foreground">Automatically issue takedowns for content with &gt;99% risk score.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Whitelisted Domains
                </CardTitle>
                <CardDescription>
                  Trusted sources that bypass the risk engine.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Enter domain (e.g., gov.br)" className="font-mono text-sm" />
                  <Button variant="secondary">Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['gov.br', 'who.int', 'un.org', 'reuters.com'].map(domain => (
                    <Badge key={domain} variant="outline" className="px-3 py-1 flex items-center gap-1">
                      {domain}
                      <button className="ml-1 text-muted-foreground hover:text-destructive">×</button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  API Keys
                </CardTitle>
                <CardDescription>
                  Manage authentication tokens for external integrations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-md border bg-muted/30 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">Production Key (v1)</p>
                      <p className="font-mono text-xs text-muted-foreground">rk_live_8374...9283</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Active</Badge>
                      <Button variant="ghost" size="sm">Roll Key</Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-md border bg-muted/30 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">Development Key</p>
                      <p className="font-mono text-xs text-muted-foreground">rk_test_1928...3821</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Test Mode</Badge>
                      <Button variant="ghost" size="sm">Roll Key</Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Generate New Key</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Alert Channels
                </CardTitle>
                <CardDescription>
                  Configure where critical alerts are sent.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Critical Alerts (Email)</label>
                    <p className="text-xs text-muted-foreground">Immediate notification for &gt;90% risk items.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Slack Integration</label>
                    <p className="text-xs text-muted-foreground">Post alerts to #security-ops.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Weekly Digest</label>
                    <p className="text-xs text-muted-foreground">Summary of blocked content and false positives.</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <div className="flex justify-end gap-4 pt-4">
             <Button variant="outline">Discard Changes</Button>
             <Button className="flex items-center gap-2">
               <Save className="h-4 w-4" /> Save Configuration
             </Button>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
