import mermaid from 'mermaid'
import { useEffect, useId, useRef } from 'react'

mermaid.initialize({ startOnLoad: false, theme: 'dark' })

export const MermaidChart = ({ chart }: { chart: string }) => {
    const id = useId().replace(/:/g, '')
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return
        mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
            if (ref.current) ref.current.innerHTML = svg
        })
    }, [chart, id])

    return <div ref={ref} className='my-4 flex justify-center' />
}
