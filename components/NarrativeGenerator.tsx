
import React, { useState } from 'react';
import { generateStorySpark } from '../services/gemini';

const NarrativeGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [spark, setSpark] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!keywords.trim()) return;
    setLoading(true);
    const result = await generateStorySpark(keywords);
    setSpark(result);
    setLoading(false);
  };

  return (
    <section className="bg-background-dark py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
          <span>AI Creative Partner</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ignite a Narrative Spark</h2>
        <p className="text-medium-grey-text mb-10 max-w-2xl mx-auto">
          Need a starting point for your next visual masterpiece? Input a few keywords, and let's craft a cinematic premise together.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-12">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. Noir, rain, neon, betrayal"
            className="flex-1 h-12 px-6 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-opacity-80 transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <span className="animate-pulse">Consulting the Muse...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">bolt</span>
                Generate
              </>
            )}
          </button>
        </div>

        {spark && (
          <div className="p-8 rounded-xl bg-surface-navy border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
              {spark}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NarrativeGenerator;
