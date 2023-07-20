'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
    return (
        <ReactMarkdown
            className="prose max-w-none"
            remarkPlugins={[remarkGfm]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={vscDarkPlus}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...props}>{children}</code>
                    );
                },
                img: (image) => (
                    <Image
                        className="object-cover w-full max-h-60"
                        src={image.src || ''}
                        alt={image.alt || ''}
                        width={500}
                        height={300}
                    />
                )
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
