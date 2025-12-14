import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mockStats, mockContent } from "@/lib/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, Bot, Zap, Globe, ArrowUpRight, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const data = [
  { name: '00:00', organic: 4000, ai: 1400 },
  { name: '04:00', organic: 3000, ai: 900 },
  { name: '08:00', organic: 2000, ai: 4800 }, // Spike in AI content
  { name: '12:00', organic: 2780, ai: 3908 },
  { name: '16:00', organic: 1890, ai: 5800 },
  { name: '20:00', organic: 2390, ai: 4800 },
  { name: '23:59', organic: 3490, ai: 4300 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Painel de Controle</h1>
            <p className="text-muted-foreground">Vigilância em tempo real de vetores de desinformação e conteúdo gerado por IA.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-destructive">Nível de Ameaça Alto: Interferência Eleitoral</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Itens Escaneados</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.scannedItems.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Em 5 plataformas sociais
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-destructive shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fake News Detectadas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.fakeNewsDetected.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                2.8% do tráfego total
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gerado por IA (Deepfake)</CardTitle>
              <Bot className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.aiGeneratedContent.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Confiança Média: {mockStats.avgAiConfidence}%
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remoções Automáticas</CardTitle>
              <Zap className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.takedownsIssued}</div>
              <p className="text-xs text-muted-foreground">
                Enviado para APIs das plataformas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts & Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 shadow-sm">
            <CardHeader>
              <CardTitle>IA vs. Pico de Desinformação Orgânica</CardTitle>
              <CardDescription>Correlação entre atividade de bots e disseminação viral de fake news.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `${value}`} 
                  />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      borderColor: 'hsl(var(--border))', 
                      borderRadius: 'var(--radius)' 
                    }} 
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="organic" 
                    stackId="1"
                    stroke="hsl(var(--muted-foreground))" 
                    fill="url(#colorOrganic)" 
                    name="Disseminação Orgânica"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ai" 
                    stackId="1"
                    stroke="#a855f7" 
                    strokeWidth={2}
                    fill="url(#colorAi)" 
                    name="Atividade de IA/Bot"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-3 shadow-sm">
            <CardHeader>
              <CardTitle>Feed de Ameaças em Tempo Real</CardTitle>
              <CardDescription>Conteúdo viral sinalizado como sintético ou enganoso.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockContent.filter(c => c.fakeNewsScore > 50).slice(0, 5).map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-accent transition-colors cursor-pointer group">
                    <div className={cn(
                      "mt-1 p-1.5 rounded-full shrink-0",
                      item.aiProbability > 80 ? "bg-purple-500/10 text-purple-600" : "bg-destructive/10 text-destructive"
                    )}>
                      {item.aiProbability > 80 ? <Bot className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold leading-none truncate">{item.platform}</p>
                          {item.aiProbability > 80 && (
                            <span className="text-[10px] font-bold px-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                              IA: {item.aiProbability}%
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 text-xs">
                        {item.snippet}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-mono text-muted-foreground">{item.author}</span>
                        <div className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                           <Share2 className="h-3 w-3" />
                           Pontuação Viral: {item.viralityScore}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full py-2 text-sm text-primary bg-primary/5 hover:bg-primary/10 rounded-md font-medium flex items-center justify-center transition-colors">
                  Abrir Scanner <ArrowUpRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
