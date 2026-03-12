import { useEffect, useState } from 'react'
import { ConceptDrawer } from '@/components/ConceptDrawer'
import conceptMd from './Concept.md?raw'
import sourceCode from './index.tsx?raw'

export const PointerTrackerContainer = () => {
    const [coOrdinates, setCoOrdinates] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handler = (e: PointerEvent) => {
            setCoOrdinates({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('pointermove', handler)
        return () => window.removeEventListener('pointermove', handler)
    }, [])

    return <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-center mb-4 text-2xl font-bold'>Pointer Co-Ordinate Tracker</h1>
        <p className='text-center mb-4 text-muted-foreground text-sm'>Track the pointer movement and etch a circle around it</p>

        <div className='text-sm tabular-nums text-muted-foreground'>
            x: {coOrdinates.x} &nbsp; y: {coOrdinates.y}
        </div>

        <div
            className='pointer-events-none fixed rounded-full bg-blue-500 opacity-70'
            style={{ width: 24, height: 24, left: coOrdinates.x - 12, top: coOrdinates.y - 12 }}
        />

        <ConceptDrawer conceptMd={conceptMd} code={sourceCode} />
    </div>
}
