'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Article({ markdown }: { markdown: string }) {
  return (
    <div
      className="prose prose-invert mt-10 max-w-none
        prose-headings:text-slate-100 prose-headings:tracking-tight
        prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-100
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent prose-code:before:content-[''] prose-code:after:content-['']
        prose-pre:border prose-pre:border-slate-800 prose-pre:bg-slate-900/80
        prose-blockquote:border-l-accent prose-blockquote:text-slate-400
        prose-img:rounded-lg prose-img:border prose-img:border-slate-800
        prose-hr:border-slate-800"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
