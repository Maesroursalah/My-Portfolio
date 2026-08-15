import React, { useState } from 'react';
import { ExternalLink, RefreshCw, Monitor, Smartphone, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

interface LivePreviewViewProps {
  url: string;
  title: string;
}

export const LivePreviewView: React.FC<LivePreviewViewProps> = ({ url, title }) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [key, setKey] = useState(0);
  const [iframeError, setIframeError] = useState(false);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
    setIframeError(false);
  };

  return (
    <div className="space-y-4">
      {/* Header Bar with Control Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#1A0E0D] border border-[#572A26] text-[#fff8f0]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-display font-bold text-rose-200 uppercase tracking-wider">
            LIVE INTERACTIVE PREVIEW
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#381B19] text-[#D68379] font-mono border border-[#572A26]">
            Live Web App
          </span>
        </div>

        {/* Viewport Toggles & Actions */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-xl bg-[#251110] border border-[#572A26]">
            <button
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-display flex items-center gap-1.5 transition-all ${
                device === 'desktop'
                  ? 'bg-[#381B19] text-[#D68379] font-bold shadow-sm'
                  : 'text-rose-300/70 hover:text-rose-100'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-display flex items-center gap-1.5 transition-all ${
                device === 'mobile'
                  ? 'bg-[#381B19] text-[#D68379] font-bold shadow-sm'
                  : 'text-rose-300/70 hover:text-rose-100'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          <button
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-[#251110] border border-[#572A26] text-rose-300 hover:text-[#D68379] hover:border-[#D68379] transition-all"
            title="Reload Frame"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-display font-bold text-xs flex items-center gap-1.5 hover:brightness-110 transition-all shadow-md"
            data-cursor="OPEN"
          >
            <span>Open Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Iframe Frame Box */}
      <div className="relative w-full rounded-2xl bg-[#0F0706] border border-[#572A26] overflow-hidden flex justify-center items-center py-4 px-2 min-h-[500px]">
        <div
          className={`transition-all duration-300 w-full ${
            device === 'mobile'
              ? 'max-w-[395px] h-[720px] rounded-[36px] border-[8px] border-[#251110] shadow-2xl overflow-hidden'
              : 'w-full h-[650px] rounded-b-xl'
          }`}
        >
          {!iframeError ? (
            <iframe
              key={key}
              src={url}
              title={`Live View - ${title}`}
              className="w-full h-full bg-[#0F0706] border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onError={() => setIframeError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-[#150B0A]">
              <Sparkles className="w-12 h-12 text-[#D68379]" />
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">Direct Live Web View</h4>
              <p className="text-sm text-rose-200/80 max-w-md">
                Experience the live ZAPHYRE luxury platform at {url} directly in a new window.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-display font-bold text-sm inline-flex items-center gap-2"
              >
                <span>Launch {url}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
