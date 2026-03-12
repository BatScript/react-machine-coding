import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import Phosphor from '@/components/Phosphor'
import { MermaidChart } from '@/components/MermaidChart'

type Props = {
  conceptMd: string
  code: string
}

export const ConceptDrawer = ({ conceptMd, code }: Props) => {
  const [tab, setTab] = useState<'info' | 'code'>('info')

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className='fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity'
          aria-label='Open concept drawer'
        >
          <Phosphor name='BookOpenText' size={20} />
        </button>
      </DrawerTrigger>

      <DrawerContent className='h-[70vh] flex flex-col'>
        {/* Tab bar */}
        <div className='flex items-center gap-1 px-4 pt-2 pb-0 border-b shrink-0'>
          <button
            onClick={() => setTab('info')}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === 'info'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Phosphor name='Info' size={15} />
            Theory
          </button>
          <button
            onClick={() => setTab('code')}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === 'code'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Phosphor name='Code' size={15} />
            Code
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-4'>
          {tab === 'info' ? (
            <div className='prose prose-sm dark:prose-invert max-w-none'>
              <ReactMarkdown
                components={{
                  code({ className, children }) {
                    const lang = /language-(\w+)/.exec(className ?? '')?.[1]
                    if (lang === 'mermaid') return <MermaidChart chart={String(children).trim()} />
                    return <code className={className}>{children}</code>
                  }
                }}
              >{conceptMd}</ReactMarkdown>
            </div>
          ) : (
            <SyntaxHighlighter
              language='tsx'
              style={oneDark}
              customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.78rem' }}
              wrapLongLines
            >
              {code}
            </SyntaxHighlighter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
