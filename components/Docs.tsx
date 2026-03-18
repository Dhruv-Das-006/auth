"use client";

import { FileText, Code2, Terminal, Lightbulb, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("javascript");

  const codeSnippets = {
    javascript: `// Install SDK: npm install @authly/sdk
import { Authly } from "@authly/sdk";

const auth = new Authly({ 
  clientId: "your-client-id" 
});

const { user, error } = await auth.loginWithPasskey();
if (user) console.log("Welcome!", user.name);`,
    python: `# Install: pip install authly-sdk
from authly import Client

client = Client(api_key="your-api-key")

user = client.verify_token(token)
print(f"User {user.id} authenticated")`,
    curl: `curl -X POST https://api.authly.com/v1/verify \\
  -H "Authorization: Bearer <API_KEY>" \\
  -d "token=<USER_TOKEN>"`
  };

  return (
    <section id="docs" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
              <Lightbulb size={14} />
              Developer First
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Built for developers, by developers</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Integrate secure authentication into your project in minutes. 
              Our documentation is thorough, our SDKs are typed, and our APIs 
              follow REST best practices.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Code2 className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Easy Integration</h4>
                  <p className="text-sm text-muted-foreground">Standardized hooks and methods for all modern frameworks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Terminal className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Powerful CLI</h4>
                  <p className="text-sm text-muted-foreground">Manage your auth environments directly from the terminal.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <FileText className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Well Documented</h4>
                  <p className="text-sm text-muted-foreground">Detailed guides for MFA, Passkeys, SSO, and more.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-xl shadow-primary/20">
              <CheckCircle2 size={20} />
              Read Full Documentation
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl rounded-[3rem] -z-10 group-hover:from-blue-500/30 transition-all duration-700" />
            
            <div className="bg-slate-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden scale-100 hover:scale-[1.02] transition-transform duration-500">
              <div className="flex border-b border-white/10">
                {["javascript", "python", "curl"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-xs font-mono font-bold transition-all ${
                      activeTab === tab 
                        ? "text-blue-400 border-b border-blue-400 bg-blue-400/5" 
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="p-8 font-mono text-sm overflow-x-auto min-h-[250px]">
                <pre className="text-slate-300 leading-relaxed whitespace-pre">
                  <code>{codeSnippets[activeTab as keyof typeof codeSnippets]}</code>
                </pre>
              </div>
              <div className="bg-slate-900/50 p-4 border-t border-white/10 flex justify-between items-center">
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                 </div>
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Terminal Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
