export interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metrics?: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'pricing' | 'integration' | 'security';
  question: string;
  answer: string;
}

export interface DemoMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface WorkflowItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'queued';
  assignee: string;
  timestamp: string;
  tag: string;
}
