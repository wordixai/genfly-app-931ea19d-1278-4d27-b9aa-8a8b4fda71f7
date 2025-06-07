import { ExternalLink } from "lucide-react";

const FeatureCards = () => {
  return (
    <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        <a className="h-full" href="#">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="absolute inset-0">
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                </div>
                <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i}
                      className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out" 
                      style={{
                        animation: `float${i % 10} 4s ease-in-out infinite ${i * 150}ms`,
                        opacity: 0.85,
                        ...(i % 5 === 1 || i % 5 === 2 || i % 5 === 3 || i % 5 === 4 ? { transform: 'translateX(36px)' } : {})
                      }}
                    >
                      <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                        <div className="overflow-hidden rounded-full">
                          <div className="h-full w-full flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">{i % 10}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  One API for Any Model
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access all major models through a single, unified interface. OpenAI SDK works out of the box.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline">
                Browse all
                <ExternalLink className="ml-1 inline-block w-4" />
              </span>
            </div>
          </div>
        </a>

        <a href="#" className="h-full">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
                  <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
                    anthropic/claude-3.7-sonnet
                  </div>
                  <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" className="text-muted-foreground/60">
                    <title>Model routing visualization</title>
                    <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
                  </svg>
                  <div className="flex justify-between w-full">
                    {['G', 'A', 'B'].map((letter, i) => (
                      <div key={i} className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                        <div className="overflow-hidden rounded-full">
                          <div className="h-full w-full flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{letter}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Higher Availability
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline">
                Learn more
                <ExternalLink className="ml-1 inline-block w-4" />
              </span>
            </div>
          </div>
        </a>

        <a href="#" className="h-full">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-0 z-10">
                  <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20"></div>
                  <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20"></div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-full h-20 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-lg opacity-60 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Performance Graph</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Price and Performance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline">
                Learn more
                <ExternalLink className="ml-1 inline-block w-4" />
              </span>
            </div>
          </div>
        </a>

        <a href="#" className="h-full">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-52">
                  <div className="flex justify-between items-end w-full px-[45px] -mb-2">
                    <div className="size-4 text-muted-foreground">🔒</div>
                    <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                      <div className="size-5 text-green-9">✓</div>
                    </div>
                    <div className="size-4 text-muted-foreground">🔒</div>
                  </div>
                  <div className="size-32 text-muted-foreground/60 flex items-center justify-center border border-muted-foreground/20 rounded-full">
                    <span className="text-4xl">🛡️</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Custom Data Policies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline">
                View docs
                <ExternalLink className="ml-1 inline-block w-4" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export { FeatureCards };