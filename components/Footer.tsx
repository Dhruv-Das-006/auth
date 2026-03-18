"use client";

import { ShieldCheck, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12 lg:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 border-b pb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">Authly</span>
            </div>
            <p className="max-w-xs text-muted-foreground leading-relaxed mb-6">
              Built with security first in mind. We provide the tools you need to build 
              secure, scalable, and modern authentication experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border rounded-full hover:bg-secondary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 border rounded-full hover:bg-secondary transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 border rounded-full hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Authly Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
