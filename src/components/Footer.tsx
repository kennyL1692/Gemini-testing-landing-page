import React from 'react';
import { Layers, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-zinc-900 flex items-center justify-center font-bold">
                <Layers className="w-4 h-4 text-zinc-950" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Nexus Malaysia</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                🇲🇾 MYR
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Platform ruang kerja tangkas untuk pasukan teknologi tempatan. Berpangkalan di Cyberjaya & Bangsar South, Kuala Lumpur.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300 font-medium">Pelayan Malaysia Beroperasi (99.99%)</span>
            </div>
          </div>

          {/* Col 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Col 2: Integrations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Integrations</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">GitHub Bridge</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">GitLab CI</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Slack Notifications</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Linear Sync</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">REST & GraphQL APIs</span></li>
            </ul>
          </div>

          {/* Col 3: Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">Documentation</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Security Whitepaper</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">SOC 2 Compliance</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Nexus Technologies Sdn. Bhd. (No. Pendaftaran SSM 202401029482). Hak Cipta Terpelihara.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Status Pelayan (Cyberjaya)</span>
            <span className="hover:text-zinc-300 cursor-pointer">Privasi & PDPA</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terma & Syarat</span>
            <span className="hover:text-zinc-300 cursor-pointer">e-Invois LHDN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
