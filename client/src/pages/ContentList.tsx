import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { mockContent } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { FileText, Image, Mic, Video, Filter, Download, Bot, AlertTriangle, CheckCircle2, Share2 } from "lucide-react";

export default function ContentList() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Content Scanner</h1>
            <p className="text-muted-foreground">Deep analysis of social feeds for AI manipulation and disinformation.</p>
          </div>
          <div className="flex gap-2">
             <button className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-md text-sm font-medium hover:bg-accent transition-colors">
              <Filter className="h-4 w-4" /> Filter Sources
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              <Download className="h-4 w-4" /> Export Evidence
            </button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm text-left">
                <thead className="[&_tr]:border-b bg-muted/30">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[100px]">ID</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px]">Platform</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Content Analysis</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px]">AI Probability</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px]">Fake News Score</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px]">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[100px]">Action</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {mockContent.map((item) => (
                    <tr key={item.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted group">
                      <td className="p-4 font-mono text-xs text-muted-foreground">{item.id.split('-')[1]}-{item.id.split('-')[2]}</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                           <span className="font-medium text-xs">{item.platform}</span>
                           <span className="text-[10px] text-muted-foreground">{item.type.replace('_', ' ')}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="font-medium text-sm line-clamp-1 max-w-[400px]">
                            {item.snippet}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Author: {item.author}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-orange-600">
                              <Share2 className="h-3 w-3" /> Viral Score: {item.viralityScore}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full border",
                            item.aiProbability > 80 ? "border-purple-200 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:border-purple-800 dark:text-purple-300" : 
                            item.aiProbability > 50 ? "border-orange-200 bg-orange-100 text-orange-700" :
                            "border-green-200 bg-green-100 text-green-700"
                          )}>
                            {item.aiProbability > 80 ? <Bot className="h-4 w-4" /> : <span className="text-xs font-bold">{item.aiProbability}%</span>}
                          </div>
                          {item.aiProbability > 80 && <span className="text-xs font-bold text-purple-600">High</span>}
                        </div>
                      </td>
                      <td className="p-4">
                         <div className="w-full max-w-[80px]">
                           <div className="flex justify-between text-[10px] mb-1">
                             <span className={item.fakeNewsScore > 80 ? "text-destructive font-bold" : "text-muted-foreground"}>
                               {item.fakeNewsScore}/100
                             </span>
                           </div>
                           <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                             <div 
                               className={cn("h-full rounded-full", item.fakeNewsScore > 80 ? "bg-destructive" : item.fakeNewsScore > 50 ? "bg-orange-500" : "bg-green-500")} 
                               style={{ width: `${item.fakeNewsScore}%` }}
                             />
                           </div>
                         </div>
                      </td>
                      <td className="p-4">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors",
                          item.status === 'takedown_issued' ? "border-destructive/20 bg-destructive/10 text-destructive" :
                          item.status === 'flagged_fake' ? "border-orange-500/20 bg-orange-500/10 text-orange-600" :
                          "border-green-500/20 bg-green-500/10 text-green-600"
                        )}>
                          {item.status === 'takedown_issued' && <AlertTriangle className="h-3 w-3" />}
                          {item.status === 'verified_real' && <CheckCircle2 className="h-3 w-3" />}
                          <span className="capitalize">{item.status.replace('_', ' ')}</span>
                        </div>
                      </td>
                      <td className="p-4">
                         <button className="text-primary hover:text-primary/80 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 rounded-md transition-colors">
                           Investigate
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
