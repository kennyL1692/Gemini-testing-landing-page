import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div
      id="global-toast-notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white rounded-xl shadow-2xl border border-zinc-700 animate-in slide-in-from-bottom-5 duration-300"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <p className="text-sm font-medium pr-2">{message}</p>
      <button
        onClick={onClose}
        className="p-1 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
