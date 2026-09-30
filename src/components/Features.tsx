import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  GitPullRequest, 
  Lock, 
  Terminal, 
  Workflow, 
  CheckCircle2, 
  RefreshCw,
  Users,
  Database,
  KeyRound,
  FileCode2
} from 'lucide-react';

export const Features: React.FC = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<number>(0);

  const featureTabs = [
    {
      title: 'Kependaman Terendah (Pelayan Tempatan)',
      summary: 'Data disegerakkan merentasi seluruh Semenanjung dan Borneo dengan kependaman bawah 8 milisaat melalui hab pelayan Cyberjaya & Kuala Lumpur.',
      details: [
        'Algoritma penyelarasan deterministik CRDT bebas konflik',
        'Sokongan mod luar talian (offline-first) dengan storan peranti tempatan',
        'Penunjuk kursor dan status kehadiran langsung tanpa membebankan jalur lebar',
      ],
      tag: 'Prasarana Cyberjaya',
      stats: 'Kependaman purata 4ms di Lembah Klang',
    },
    {
      title: 'Automasi Alur Kerja & API',
      summary: 'Sambungkan repositori GitHub/GitLab, sistem invois, dan komunikasi Telegram/Slack terus ke papan tugasan.',
      details: [
        'Penyambung dwiarah natif untuk GitHub, GitLab, Jira, dan Telegram',
        'Pencetus bersyarat khas dengan pengesahan payload JSON segera',
        'Penjanaan automatik nota keluaran (release notes) daripada sprint siap',
      ],
      tag: 'Alat Pembangun',
      stats: '100+ penyambung natif',
    },
    {
      title: 'Keselamatan & Pematuhan Tempatan',
      summary: 'Patuh Akta Perlindungan Data Peribadi (PDPA 2010) Malaysia dan panduan RMIT Bank Negara Malaysia dengan penyulitan gred perbankan.',
      details: [
        'SSO SAML 2.0 & OIDC bersepadu dengan Okta, Google Workspace, & Azure',
        'Kebenaran berasaskan peranan (RBAC) terperinci pada tahap projek dan dokumen',
        'Penyulitan data penuh ketika rehat (AES-256) dan ketika transit (TLS 1.3)',
      ],
      tag: 'Pematuhan PDPA Malaysia',
      stats: 'Jaminan SLA 99.99%',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
            Engineered For Speed
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Built for modern engineering and product teams
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            A cohesive architecture combining effortless everyday usability with robust enterprise infrastructure.
          </p>
        </div>

        {/* Tabbed Feature Explorer (Interactive Asymmetric Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Feature Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {featureTabs.map((feat, index) => {
              const isSelected = activeFeatureTab === index;
              return (
                <div
                  key={feat.title}
                  id={`feature-tab-${index}`}
                  onClick={() => setActiveFeatureTab(index)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                      : 'bg-zinc-50/70 hover:bg-zinc-100/80 border-zinc-200/80 text-zinc-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {feat.tag}
                    </span>
                    <span className={`text-xs font-mono ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`}>
                      {feat.stats}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-zinc-900'}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-sm mt-1.5 leading-relaxed ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {feat.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Deep-Dive Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs relative overflow-hidden min-h-[400px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 text-white">
                      {activeFeatureTab === 0 && <Zap className="w-5 h-5" />}
                      {activeFeatureTab === 1 && <Workflow className="w-5 h-5" />}
                      {activeFeatureTab === 2 && <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-zinc-900">
                        {featureTabs[activeFeatureTab].title}
                      </h4>
                      <span className="text-xs text-zinc-500">Core architectural guarantees</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 bg-white border border-zinc-200 rounded-md text-zinc-700">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Detailed Checkpoints */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-center">
                  <div className="space-y-3">
                    {featureTabs[activeFeatureTab].details.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-zinc-200/80">
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Feature Visual Asset Graphic */}
                  <div className="relative rounded-xl overflow-hidden border border-zinc-200 aspect-4/3 bg-zinc-100 group shadow-xs">
                    {activeFeatureTab === 0 && (
                      <img
                        src="/src/assets/images/feature_sync_illustration_1790747877186.jpg"
                        alt="Zero latency distributed sync illustration"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {activeFeatureTab === 1 && (
                      <img
                        src="/src/assets/images/feature_pipeline_illustration_1790747890929.jpg"
                        alt="Automated CI/CD DevOps pipeline illustration"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {activeFeatureTab === 2 && (
                      <img
                        src="/src/assets/images/feature_security_illustration_1790747902914.jpg"
                        alt="Enterprise cybersecurity vault and encryption illustration"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-zinc-900/80 backdrop-blur-xs text-[10px] font-mono text-zinc-200 border border-zinc-700">
                      {activeFeatureTab === 0 ? 'SYNC MESH v3' : activeFeatureTab === 1 ? 'PIPELINE AGENT' : 'ZERO TRUST ENCRYPT'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code / Visual Blueprint snippet preview */}
              <div className="p-4 rounded-xl bg-zinc-900 text-zinc-200 font-mono text-xs overflow-x-auto border border-zinc-800">
                <div className="flex items-center justify-between text-zinc-400 pb-2 mb-2 border-b border-zinc-800 text-[11px]">
                  <span>configuration.config.ts</span>
                  <span>TypeScript</span>
                </div>
                {activeFeatureTab === 0 && (
                  <pre className="text-zinc-300">
{`const syncEngine = createWorkspaceSync({
  transport: 'websocket-tls',
  reconciliation: 'crdt-lww',
  offlinePersistence: true,
  maxBatchLatencyMs: 30
});`}
                  </pre>
                )}
                {activeFeatureTab === 1 && (
                  <pre className="text-zinc-300">
{`export default definePipeline({
  on: ['github.pull_request.merged'],
  filter: { branch: 'main' },
  actions: [updateSprintMetrics, broadcastReleaseNotes]
});`}
                  </pre>
                )}
                {activeFeatureTab === 2 && (
                  <pre className="text-zinc-300">
{`export const securityPolicy = {
  ssoProvider: 'saml-okta',
  mfaEnforcement: 'strict',
  auditLogging: { destination: 's3-immutable-vault' }
};`}
                  </pre>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* 3 Secondary Capability Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-200/70 flex items-center justify-center text-zinc-900 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 mb-2">CLI & API First</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Automate your workflows with comprehensive REST, GraphQL, and webhook APIs accompanied by an official CLI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-200/70 flex items-center justify-center text-zinc-900 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 mb-2">Data Portability</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Export all your organization's boards, documents, and historical metrics at any time in standard JSON or CSV formats.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-200/70 flex items-center justify-center text-zinc-900 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 mb-2">Multi-Team Isolation</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Segment workspaces into distinct teams, private projects, or public hubs with dedicated billing attribution.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
