import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Play, 
  TrendingUp, 
  Sliders, 
  GitBranch, 
  Layers, 
  Check, 
  Plus, 
  Sparkles,
  RefreshCw,
  BellRing,
  Cpu,
  BarChart3,
  Filter
} from 'lucide-react';
import { WorkflowItem } from '../types';

interface InteractiveDemoProps {
  onPlanSelect?: (plan: string) => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ onPlanSelect }) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'analytics' | 'automation'>('pipeline');
  
  // Pipeline State
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [workflows, setWorkflows] = useState<WorkflowItem[]>([
    { id: '1', title: 'Integrasi gerbang pembayaran DuitNow QR & FPX', status: 'completed', assignee: 'Hafiz K. (KL)', timestamp: '10m lalu', tag: 'Fintech' },
    { id: '2', title: 'Migrasi pelayan aplikasi ke zon Cyberjaya DC-2', status: 'in-progress', assignee: 'Tan Wei Loon', timestamp: '25m lalu', tag: 'Cloud' },
    { id: '3', title: 'Pematuhan audit data tempatan mengikut Akta PDPA 2010', status: 'in-progress', assignee: 'Afiqah N.', timestamp: '1h lalu', tag: 'Security' },
    { id: '4', title: 'Integrasi modul e-Invois LHDN API 2.0', status: 'queued', assignee: 'Pravin R.', timestamp: '2h lalu', tag: 'TaxOps' },
    { id: '5', title: 'Ujian beban API sempena kempen jualan Mega 11.11 MY', status: 'queued', assignee: 'DevOps MY', timestamp: '3h lalu', tag: 'Infra' },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Analytics State
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Automation State
  const [automations, setAutomations] = useState([
    { id: 'a1', name: 'Auto-sync komit GitHub ke papan sprint pasukan', enabled: true, trigger: 'Git Push (Main)', actions: 'Kemaskini isu tiket & gerak status' },
    { id: 'a2', name: 'Makluman automatik keselamatan ke saluran Slack/Telegram', enabled: true, trigger: 'Amaran Kerentanan', actions: 'Hantar amaran ke bilik operasi kejuruteraan' },
    { id: 'a3', name: 'Pencetus webhook integrasi pembayaran FPX', enabled: false, trigger: 'FPX Webhook Callback', actions: 'Sahkan transaksi & hantar resit e-Invois' },
    { id: 'a4', name: 'Laporan mingguan prestasi sistem (Waktu Tempatan KL)', enabled: true, trigger: 'Isnin 9:00 pagi (MYT)', actions: 'Jana analitik PDF & e-mel pihak pengurusan' },
  ]);
  const [testRunLog, setTestRunLog] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const toggleTaskStatus = (id: string) => {
    setWorkflows((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus: 'completed' | 'in-progress' | 'queued' =
            item.status === 'completed'
              ? 'in-progress'
              : item.status === 'in-progress'
              ? 'queued'
              : 'completed';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    const newTask: WorkflowItem = {
      id: Date.now().toString(),
      title: newTaskInput.trim(),
      status: 'in-progress',
      assignee: 'You',
      timestamp: 'Just now',
      tag: 'General',
    };
    setWorkflows([newTask, ...workflows]);
    setNewTaskInput('');
  };

  const toggleAutomation = (id: string) => {
    setAutomations((prev) =>
      prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a))
    );
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTestRunLog('Initiating mock trigger event payload...');
    setTimeout(() => {
      setTestRunLog('Evaluating 3 enabled automation rules...');
    }, 600);
    setTimeout(() => {
      setTestRunLog('Dispatched: Webhook received, synced 4 items across boards. Status: 200 OK in 42ms');
      setIsSimulating(false);
    }, 1400);
  };

  const filteredTasks = workflows.filter((t) => {
    if (filterStatus === 'all') return true;
    return t.status === filterStatus;
  });

  return (
    <section id="demo" className="py-16 md:py-24 bg-zinc-100/70 border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
            Live Workspace Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Interact with the real system in real-time
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            Click tasks to toggle progress, switch modes, or test out active automation rules.
          </p>
        </div>

        {/* Workbench Frame */}
        <div
          id="interactive-demo-container"
          className="max-w-5xl mx-auto bg-white rounded-2xl border border-zinc-200/90 shadow-xl shadow-zinc-900/5 overflow-hidden transition-all"
        >
          {/* Top Window Bar */}
          <div className="bg-zinc-900 text-zinc-300 px-4 py-3.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline">
                cyberjaya-dc.nexus.my / hq-kl-sprint
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 bg-zinc-800 p-1 rounded-lg">
              <button
                id="demo-tab-pipeline"
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'pipeline'
                    ? 'bg-zinc-700 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Pipeline</span>
              </button>
              <button
                id="demo-tab-analytics"
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'analytics'
                    ? 'bg-zinc-700 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Analytics</span>
              </button>
              <button
                id="demo-tab-automation"
                onClick={() => setActiveTab('automation')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'automation'
                    ? 'bg-zinc-700 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Automations</span>
              </button>
            </div>
          </div>

          {/* Workbench Body */}
          <div className="p-5 sm:p-7 min-h-[420px] bg-white">
            
            {/* VIEW 1: PIPELINE */}
            {activeTab === 'pipeline' && (
              <div id="demo-pipeline-view" className="space-y-5 animate-in fade-in duration-200">
                {/* Control bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Filter className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-semibold text-zinc-500 uppercase">Filter:</span>
                    {(['all', 'completed', 'in-progress', 'queued'] as const).map((status) => (
                      <button
                        key={status}
                        id={`filter-btn-${status}`}
                        onClick={() => setFilterStatus(status)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                          filterStatus === status
                            ? 'bg-zinc-900 text-white'
                            : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                        }`}
                      >
                        {status.replace('-', ' ')}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs text-zinc-400">
                    Showing {filteredTasks.length} of {workflows.length} items
                  </span>
                </div>

                {/* Quick Add Task Form */}
                <form onSubmit={handleAddTask} className="flex gap-2">
                  <input
                    id="demo-add-task-input"
                    type="text"
                    placeholder="Type a new task and press Enter or Add..."
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-500 focus:bg-white transition-all"
                  />
                  <button
                    id="demo-add-task-btn"
                    type="submit"
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg inline-flex items-center gap-1.5 shrink-0 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Item</span>
                  </button>
                </form>

                {/* Interactive Task List */}
                <div className="space-y-2">
                  {filteredTasks.map((item) => (
                    <div
                      key={item.id}
                      id={`task-item-${item.id}`}
                      onClick={() => toggleTaskStatus(item.id)}
                      className={`group p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        item.status === 'completed'
                          ? 'bg-zinc-50/70 border-zinc-200 text-zinc-400'
                          : 'bg-white border-zinc-200/90 text-zinc-800 hover:border-zinc-400 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                            item.status === 'completed'
                              ? 'bg-zinc-900 border-zinc-900 text-white'
                              : item.status === 'in-progress'
                              ? 'border-amber-500 bg-amber-50 text-amber-600'
                              : 'border-zinc-300 bg-white group-hover:border-zinc-500'
                          }`}
                        >
                          {item.status === 'completed' && <Check className="w-3.5 h-3.5" />}
                          {item.status === 'in-progress' && <Clock className="w-3 h-3 animate-spin" />}
                        </div>
                        <span
                          className={`text-sm font-medium truncate ${
                            item.status === 'completed' ? 'line-through text-zinc-400' : 'text-zinc-800'
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 font-medium hidden sm:inline">
                          {item.tag}
                        </span>
                        <span className="text-xs text-zinc-500 hidden md:inline">{item.assignee}</span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-md font-medium uppercase tracking-wider ${
                            item.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : item.status === 'in-progress'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-zinc-100 text-zinc-600'
                          }`}
                        >
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-zinc-400 text-center pt-2">
                  Tip: Click any row to cycle its status (Completed &rarr; In Progress &rarr; Queued).
                </p>
              </div>
            )}

            {/* VIEW 2: ANALYTICS */}
            {activeTab === 'analytics' && (
              <div id="demo-analytics-view" className="space-y-6 animate-in fade-in duration-200">
                {/* Time range picker */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="text-sm font-semibold text-zinc-800">
                    Cycle Velocity & Deployment Stats
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
                    {(['7d', '30d', '90d'] as const).map((range) => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
                          timeRange === range ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-800'
                        }`}
                      >
                        {range.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-xs text-zinc-500 font-medium">Sprint Completion</span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-zinc-900">
                        {timeRange === '7d' ? '96.4%' : timeRange === '30d' ? '94.8%' : '92.1%'}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" />
                        +4.2%
                      </span>
                    </div>
                    <div className="mt-3 w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-zinc-900 h-full rounded-full transition-all duration-500" style={{ width: timeRange === '7d' ? '96%' : '94%' }} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-xs text-zinc-500 font-medium">Avg. Cycle Time</span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-zinc-900">
                        {timeRange === '7d' ? '1.8 days' : timeRange === '30d' ? '2.1 days' : '2.4 days'}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center">
                        -18% faster
                      </span>
                    </div>
                    <div className="mt-3 w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: '82%' }} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-xs text-zinc-500 font-medium">Automations Executed</span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-zinc-900">
                        {timeRange === '7d' ? '4,820' : timeRange === '30d' ? '18,940' : '56,200'}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500">99.98% ok</span>
                    </div>
                    <div className="mt-3 w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-zinc-900 h-full rounded-full transition-all duration-500" style={{ width: '99%' }} />
                    </div>
                  </div>
                </div>

                {/* Visual Distribution Bars */}
                <div className="p-4 rounded-xl border border-zinc-200 bg-white">
                  <div className="text-xs font-semibold text-zinc-700 mb-3">Workload Distribution by Domain</div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-zinc-600 mb-1">
                        <span>Core Engineering</span>
                        <span className="font-semibold text-zinc-900">45%</span>
                      </div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-zinc-900 h-full rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-zinc-600 mb-1">
                        <span>Design Systems & UI</span>
                        <span className="font-semibold text-zinc-900">30%</span>
                      </div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-zinc-700 h-full rounded-full" style={{ width: '30%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-zinc-600 mb-1">
                        <span>Infrastructure & SecOps</span>
                        <span className="font-semibold text-zinc-900">25%</span>
                      </div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-zinc-400 h-full rounded-full" style={{ width: '25%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: AUTOMATION */}
            {activeTab === 'automation' && (
              <div id="demo-automation-view" className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div>
                    <span className="text-sm font-semibold text-zinc-900 block">Trigger & Event Rules</span>
                    <span className="text-xs text-zinc-500">Toggle active rules to customize dispatch pipelines</span>
                  </div>
                  <button
                    id="demo-test-simulation-btn"
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isSimulating ? 'animate-pulse' : ''}`} />
                    <span>{isSimulating ? 'Simulating...' : 'Test Run Trigger'}</span>
                  </button>
                </div>

                {/* Simulation Output Log Box */}
                {testRunLog && (
                  <div className="p-3 bg-zinc-900 text-zinc-200 rounded-lg text-xs font-mono border border-zinc-800 flex items-start gap-2 animate-in fade-in duration-150">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">{testRunLog}</div>
                  </div>
                )}

                <div className="space-y-2.5">
                  {automations.map((rule) => (
                    <div
                      key={rule.id}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                        rule.enabled ? 'bg-zinc-50/50 border-zinc-200' : 'bg-white border-zinc-200 opacity-60'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-zinc-900 truncate">{rule.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-200 text-zinc-700 font-mono">
                            {rule.trigger}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5">{rule.actions}</p>
                      </div>

                      {/* Switch control */}
                      <button
                        type="button"
                        onClick={() => toggleAutomation(rule.id)}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 ${
                          rule.enabled ? 'bg-zinc-900 justify-end' : 'bg-zinc-200 justify-start'
                        }`}
                        aria-label={`Toggle ${rule.name}`}
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Workbench Footer Action */}
          <div className="bg-zinc-50 px-5 py-3.5 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Connected to 14 data sources & webhooks
            </span>
            <button
              onClick={() => onPlanSelect?.('Professional')}
              className="font-semibold text-zinc-900 hover:text-zinc-700 flex items-center gap-1 underline underline-offset-2"
            >
              Start building your workspace &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
