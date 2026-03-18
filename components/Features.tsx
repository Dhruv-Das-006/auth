"use client";

import { Shield, Key, Fingerprint, Globe, Zap, Users, Lock, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Enterprise Security",
      description: "Robust security protocols including AES-256 encryption and periodic audits."
    },
    {
      icon: <Key className="w-6 h-6 text-blue-500" />,
      title: "Passkey Support",
      description: "Allow users to log in securely using biometric data without passwords."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-cyan-500" />,
      title: "Multi-factor Auth",
      description: "Extra layer of protection with SMS, email, and TOTP verification methods."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Instant Setup",
      description: "Integrate into your app in minutes with our high-level SDKs and hooks."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Global Infrastructure",
      description: "Low-latency authentication from anywhere in the world with edge delivery."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "User Management",
      description: "Powerful dashboard to manage users, roles, and permissions effortlessly."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powerfully Simple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need for <span className="text-primary italic">secure</span> auth
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Stop building authentication from scratch. We provide everything from 
            the database to the UI components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-card border rounded-3xl hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 glass rounded-[2rem] border overflow-hidden relative group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Zero-Trust Architecture
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every request is verified and cryptographically signed. 
                We never store your passwords in plain text, and we use argon2 hashing.
              </p>
              <ul className="space-y-4">
                {[
                  "No-PII storage options",
                  "Automatic session rotation",
                  "Real-time fraud detection",
                  "Compliance ready (SOC2, GDPR)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/80 rounded-2xl p-6 font-mono text-sm text-green-400 border border-white/10 shadow-3xl overflow-x-auto">
               <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                 <span>auth.config.ts</span>
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                 </div>
               </div>
               <div className="space-y-1">
                 <p><span className="text-purple-400">export const</span> authConfig = &#123;</p>
                 <p className="pl-4">  providers: [</p>
                 <p className="pl-8 text-blue-300">    Google(&#123; <span className="text-gray-400">clientId, clientSecret</span> &#125;),</p>
                 <p className="pl-8 text-blue-300">    GitHub(&#123; <span className="text-gray-400">clientId, clientSecret</span> &#125;),</p>
                 <p className="pl-8 text-blue-300">    Passkeys()</p>
                 <p className="pl-4">  ],</p>
                 <p className="pl-4">  mfa: <span className="text-yellow-300">"mandatory"</span>,</p>
                 <p>&#125;;</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
