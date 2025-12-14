import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Share2, Users, Globe, Zap, Network, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const propagationData = [
  { time: '0m', reach: 0 },
  { time: '10m', reach: 120 },
  { time: '20m', reach: 850 },
  { time: '30m', reach: 4500 },
  { time: '40m', reach: 12000 },
  { time: '50m', reach: 45000 },
  { time: '60m', reach: 120000 },
];

const clusters = [
  { id: 'C-Alpha', source: 'Twitter/X Botnet #992', size: 45000, speed: 'High', status: 'Active' },
  { id: 'C-Beta', source: 'Telegram Group "Truth"', size: 12000, speed: 'Medium', status: 'Contained' },
  { id: 'C-Gamma', source: 'Facebook Page "Freedom"', size: 8500, speed: 'Low', status: 'Monitoring' },
];

const topSpreaders = [
  { handle: '@TruthSeeker_99', platform: 'Twitter', impact: 98, followers: '1.2M' },
  { handle: '@PatriotVoice', platform: 'Gab', impact: 85, followers: '450K' },
  { handle: 'Freedom Fighters Group', platform: 'Facebook', impact: 72, followers: '890K' },
];

export default function ViralityMap() {
  return (
    <Layout>
      <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
        <div className="flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Virality Map</h1>
            <p className="text-muted-foreground">Visualize and track the propagation vectors of viral misinformation.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="global">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global View</SelectItem>
                <SelectItem value="na">North America</SelectItem>
                <SelectItem value="eu">Europe</SelectItem>
                <SelectItem value="latam">LatAm</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="outline" className="h-9 px-3 flex gap-2 border-destructive/50 text-destructive bg-destructive/10">
              <Zap className="h-4 w-4" />
              Live Outbreak Detected
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Main Map Visualization Area */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 h-full">
            <Card className="flex-1 bg-card/50 border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
              
              {/* Mock Network Graph Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-3xl max-h-[500px] p-10">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-destructive/80 shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-pulse z-20 flex items-center justify-center">
                    <Share2 className="h-4 w-4 text-white" />
                  </div>

                  {/* Connecting Lines & Nodes - CSS Art for Mockup */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
                    <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
                    <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
                    
                    {/* Secondary Connections */}
                    <line x1="20%" y1="30%" x2="10%" y2="10%" stroke="currentColor" strokeWidth="0.5" className="text-destructive/50" />
                    <line x1="20%" y1="30%" x2="15%" y2="40%" stroke="currentColor" strokeWidth="0.5" className="text-destructive/50" />
                    <line x1="80%" y1="20%" x2="90%" y2="15%" stroke="currentColor" strokeWidth="0.5" className="text-destructive/50" />
                  </svg>

                  {/* Satellite Nodes */}
                  <div className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10" />
                  <div className="absolute top-[20%] right-[20%] w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10" />
                  <div className="absolute bottom-[20%] right-[30%] w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10" />
                  <div className="absolute bottom-[30%] left-[30%] w-3 h-3 rounded-full bg-green-500/50 z-10" />
                  
                  {/* Floating Labels */}
                  <div className="absolute top-[25%] left-[15%] text-xs font-mono text-orange-400">Cluster Alpha</div>
                  <div className="absolute top-[15%] right-[15%] text-xs font-mono text-orange-400">Cluster Beta</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 rounded-md border text-xs font-mono">
                Network Density: 0.84 | R-Nought: 4.2
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6 h-64 shrink-0">
               <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Propagation Velocity</CardTitle>
                </CardHeader>
                <CardContent className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={propagationData}>
                      <defs>
                        <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                      <XAxis dataKey="time" stroke="#888" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '4px', border: '1px solid hsl(var(--border))' }}
                      />
                      <Area type="monotone" dataKey="reach" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorReach)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                   <CardTitle className="text-sm">Active Clusters</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {clusters.map((cluster) => (
                      <div key={cluster.id} className="flex items-center justify-between p-3 hover:bg-accent/50 transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold">{cluster.id}</span>
                            <Badge variant="outline" className={cluster.status === 'Active' ? 'text-destructive border-destructive/30' : 'text-green-500 border-green-500/30'}>
                              {cluster.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground truncate max-w-[150px]">{cluster.source}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">{cluster.size.toLocaleString()}</div>
                          <div className="text-[10px] text-muted-foreground">Reach</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Top Spreaders
                </CardTitle>
                <CardDescription>Accounts with highest viral impact score.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSpreaders.map((spreader, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
                        {spreader.handle[1]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">{spreader.handle}</p>
                          <span className="text-xs font-bold text-destructive">{spreader.impact}/100</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{spreader.platform} • {spreader.followers} followers</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4 pt-6 border-t border-border">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Containment Actions</h4>
                  <button className="w-full flex items-center justify-between p-3 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20 transition-colors">
                    <span className="text-sm font-medium">Isolate Cluster Alpha</span>
                    <Network className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-md bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors">
                    <span className="text-sm font-medium">Deploy Counter-Narrative</span>
                    <Globe className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
