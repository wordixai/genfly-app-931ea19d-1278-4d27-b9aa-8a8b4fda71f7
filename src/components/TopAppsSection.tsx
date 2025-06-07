import { BarChart3, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopAppsSection = () => {
  const apps = [
    { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "29.2B", favicon: "C" },
    { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "23.8B", favicon: "R" },
    { rank: 3, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "10.2B", favicon: "K" },
    { rank: 4, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "6.17B", favicon: "L" },
    { rank: 5, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.5B", favicon: "S" },
    { rank: 6, name: "Chub AI", description: "GenAI for everyone", tokens: "4.13B", favicon: "C" },
    { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "2.02B", favicon: "H" },
    { rank: 8, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.5B", favicon: "O" },
    { rank: 9, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.43B", favicon: "I" },
    { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "1.05B", favicon: "S" }
  ];

  const rightColumnApps = [
    { rank: 11, name: "Quack", description: "Design and interact with characters", tokens: "996M", favicon: "Q" },
    { rank: 12, name: "RolePlai - Ai Chat", description: "", tokens: "917M", favicon: "R", badge: "new" },
    { rank: 13, name: "Kortix AI", description: "", tokens: "833M", favicon: "K", badge: "new" },
    { rank: 14, name: "Caveduck", description: "AI character chat", tokens: "813M", favicon: "C" },
    { rank: 15, name: "Open WebUI", description: "Extensible, self-hosted AI interface", tokens: "700M", favicon: "O" },
    { rank: 16, name: "Jupi", description: "Roleplay & fantasy chat", tokens: "632M", favicon: "J" },
    { rank: 17, name: "Khui AI", description: "", tokens: "609M", favicon: "K", badge: "new" },
    { rank: 18, name: "Linkd", description: "", tokens: "595M", favicon: "L", badge: "new" },
    { rank: 19, name: "Aider", description: "AI pair programming in your terminal", tokens: "580M", favicon: "A" },
    { rank: 20, name: "novelcrafter", description: "Your personal novel writing toolbox. Plan, write and tinker with your story.", tokens: "580M", favicon: "N" }
  ];

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
            Largest public apps{" "}
            <a href="#" className="text-primary hover:underline">
              opting into
            </a>{" "}
            usage tracking on OpenRouter
          </p>
        </div>
        <div className="group relative">
          <Button
            variant="outline"
            className="gap-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-9 px-4 border rounded-full text-sm pl-4 pr-2"
          >
            Today
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        <div className="flex flex-col space-y-5">
          {apps.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{app.favicon}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer">
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">{app.description}</div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-5">
          {rightColumnApps.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5 bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{app.favicon}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer">
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">
                  {app.badge && <span className="text-primary">{app.badge}</span>}
                  {app.description && !app.badge && app.description}
                </div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TopAppsSection };