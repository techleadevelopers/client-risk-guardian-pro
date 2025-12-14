import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Zap, Network, Globe } from "lucide-react"; // Removed Share2 from imports as it was only used in the old map
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import InteractiveMap from "@/components/InteractiveMap";

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
  { id: 'C-Alpha', source: 'Twitter/X Botnet #992', size: 45000, speed: 'Alta', status: 'Ativo' },
  { id: 'C-Beta', source: 'Telegram Group "Truth"', size: 12000, speed: 'Média', status: 'Contido' },
  { id: 'C-Gamma', source: 'Facebook Page "Freedom"', size: 8500, speed: 'Baixa', status: 'Monitorando' },
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
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Mapa de Viralidade</h1>
            <p className="text-muted-foreground">Visualize e rastreie os vetores de propagação de desinformação viral.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="global">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecionar Região" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Visão Global</SelectItem>
                <SelectItem value="na">América do Norte</SelectItem>
                <SelectItem value="eu">Europa</SelectItem>
                <SelectItem value="latam">América Latina</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="outline" className="h-9 px-3 flex gap-2 border-destructive/50 text-destructive bg-destructive/10">
              <Zap className="h-4 w-4" />
              Surto Ativo Detectado
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Main Map Visualization Area */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 h-full">
            <Card className="flex-1 bg-card/50 border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
              
              {/* Interactive Map */}
              <div className="absolute inset-0 z-10">
                <InteractiveMap />
              </div>

              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 rounded-md border text-xs font-mono pointer-events-none z-20">
                Densidade de Rede: 0.84 | R-Nought: 4.2
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6 h-64 shrink-0">
               <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Velocidade de Propagação</CardTitle>
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
                   <CardTitle className="text-sm">Clusters Ativos</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {clusters.map((cluster) => (
                      <div key={cluster.id} className="flex items-center justify-between p-3 hover:bg-accent/50 transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold">{cluster.id}</span>
                            <Badge variant="outline" className={cluster.status === 'Ativo' ? 'text-destructive border-destructive/30' : 'text-green-500 border-green-500/30'}>
                              {cluster.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground truncate max-w-[150px]">{cluster.source}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">{cluster.size.toLocaleString()}</div>
                          <div className="text-[10px] text-muted-foreground">Alcance</div>
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
                  Principais Disseminadores
                </CardTitle>
                <CardDescription>Contas com maior pontuação de impacto viral.</CardDescription>
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
                        <p className="text-xs text-muted-foreground">{spreader.platform} • {spreader.followers} seguidores</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4 pt-6 border-t border-border">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Ações de Contenção</h4>
                  <button className="w-full flex items-center justify-between p-3 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20 transition-colors">
                    <span className="text-sm font-medium">Isolar Cluster Alpha</span>
                    <Network className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-md bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors">
                    <span className="text-sm font-medium">Implantar Contra-Narrativa</span>
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
