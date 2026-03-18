"use client";

import { ArrowRight, ChevronRight, Github, Star } from "lucide-react";
import toast from "react-hot-toast";

export default function Hero() {
  const handleGetStarted = () => {
    toast.success("Welcome aboard! Let's get started.", {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-20 -right-4 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-secondary/50 text-xs font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span>New: Support for Passkeys & WebAuthn</span>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Authentication for the <br />
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-brand-accent">Modern Web</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Beautifully designed, secure, and incredibly easy to integrate. 
          The complete authentication platform for your next big idea.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <button 
            onClick={handleGetStarted}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 border rounded-full font-semibold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2">
            <Github className="w-5 h-5" />
            Star on GitHub
          </button>
        </div>
        
        <div className="mt-20 relative animate-in fade-in zoom-in duration-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-2xl -z-10" />
          <div className="bg-card/50 border rounded-2xl p-4 shadow-2xl backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-1.5 mb-4 border-b pb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 text-xs text-muted-foreground font-mono">dashboard.authly.com</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px] sm:h-[400px]">
              <div className="md:col-span-2 bg-background/50 rounded-xl border border-dashed border-muted p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
                <p className="text-sm text-muted-foreground">Encryption at rest, MFA, and automated threat detection built-in.</p>
              </div>
              <div className="space-y-4">
                <div className="h-1/2 bg-background/50 rounded-xl border border-dashed border-muted p-4 flex items-center justify-center">
                   <div className="space-y-2 w-full">
                     <div className="h-2 w-3/4 bg-muted rounded animate-pulse" />
                     <div className="h-2 w-1/2 bg-muted rounded animate-pulse" />
                     <div className="h-2 w-5/6 bg-muted rounded animate-pulse" />
                   </div>
                </div>
                <div className="h-1/2 bg-background/50 rounded-xl border border-dashed border-muted p-4 flex items-center justify-center">
                   <div className="flex gap-2">
                     <div className="w-8 h-8 rounded-lg bg-primary/20" />
                     <div className="w-8 h-8 rounded-lg bg-blue-400/20" />
                     <div className="w-8 h-8 rounded-lg bg-cyan-400/20" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
