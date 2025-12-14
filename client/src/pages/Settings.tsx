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
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Configurações do Sistema</h1>
          <p className="text-muted-foreground">Gerencie configurações globais, acesso à API e limites de detecção.</p>
        </div>

        <Tabs defaultValue="detection" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="detection">Detecção</TabsTrigger>
            <TabsTrigger value="api">Acesso API</TabsTrigger>
            <TabsTrigger value="notifications">Alertas</TabsTrigger>
            <TabsTrigger value="team">Equipe</TabsTrigger>
          </TabsList>

          <TabsContent value="detection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Limiares de Sensibilidade
                </CardTitle>
                <CardDescription>
                  Ajuste quão agressiva a IA deve ser ao sinalizar conteúdo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Limiar de Confiança de Fake News</label>
                      <p className="text-xs text-muted-foreground">Pontuação mínima (0-100) para sinalizar conteúdo como potencial desinformação.</p>
                    </div>
                    <Badge variant="secondary" className="font-mono">75%</Badge>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-[60%]" />
                </div>
                
                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Rigor na Detecção de Deepfake</label>
                      <p className="text-xs text-muted-foreground">Valores menores aumentam a sensibilidade mas podem causar falsos positivos.</p>
                    </div>
                    <Badge variant="secondary" className="font-mono">88%</Badge>
                  </div>
                  <Slider defaultValue={[88]} max={100} step={1} className="w-[60%]" />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Remoção Automática para Ameaças Críticas</label>
                    <p className="text-xs text-muted-foreground">Emitir remoções automaticamente para conteúdo com risco &gt;99%.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Domínios na Lista Branca
                </CardTitle>
                <CardDescription>
                  Fontes confiáveis que ignoram o motor de risco.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Inserir domínio (ex: gov.br)" className="font-mono text-sm" />
                  <Button variant="secondary">Adicionar</Button>
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
                  Chaves API
                </CardTitle>
                <CardDescription>
                  Gerencie tokens de autenticação para integrações externas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-md border bg-muted/30 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">Chave de Produção (v1)</p>
                      <p className="font-mono text-xs text-muted-foreground">rk_live_8374...9283</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Ativa</Badge>
                      <Button variant="ghost" size="sm">Redefinir</Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-md border bg-muted/30 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">Chave de Desenvolvimento</p>
                      <p className="font-mono text-xs text-muted-foreground">rk_test_1928...3821</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Modo de Teste</Badge>
                      <Button variant="ghost" size="sm">Redefinir</Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Gerar Nova Chave</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Canais de Alerta
                </CardTitle>
                <CardDescription>
                  Configure onde alertas críticos são enviados.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Alertas Críticos (Email)</label>
                    <p className="text-xs text-muted-foreground">Notificação imediata para itens de risco &gt;90%.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Integração Slack</label>
                    <p className="text-xs text-muted-foreground">Postar alertas em #security-ops.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Resumo Semanal</label>
                    <p className="text-xs text-muted-foreground">Resumo de conteúdo bloqueado e falsos positivos.</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <div className="flex justify-end gap-4 pt-4">
             <Button variant="outline">Descartar Alterações</Button>
             <Button className="flex items-center gap-2">
               <Save className="h-4 w-4" /> Salvar Configuração
             </Button>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
