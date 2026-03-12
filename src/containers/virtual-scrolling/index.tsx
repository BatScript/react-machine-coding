import { Card } from "@/components/ui/card"
import { LIST_DATA } from "@/data/virtual-scroll"
import { useEffect, useRef, useState } from "react"
import { ConceptDrawer } from "@/components/ConceptDrawer"
import conceptMd from "./Concept.md?raw"
import sourceCode from "./index.tsx?raw"


export const VirtualScrollingContainer = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const itemHeight = 40
    const containerHeight = 400
    const buffer = 2

    const [windowLength, setWindowLength] = useState({
        start: 0, end: Math.floor(containerHeight / itemHeight) + buffer
    })

    useEffect(() => {
        const el = containerRef.current
        const handler = (e: Event) => {
            setWindowLength(() => {
                const target = e?.target as HTMLDivElement
                return ({
                    start: Math.floor(target.scrollTop / itemHeight),
                    end: Math.floor(target.scrollTop / itemHeight) + Math.floor(containerHeight / itemHeight) + buffer
                })
            })
        }

        el?.addEventListener('scroll', handler)

        return () => el?.removeEventListener('scroll', handler)

    }, [itemHeight, containerHeight])
    return <div className="flex items-center justify-center w-screen h-screen">
        <div>
            <h1 className="text-2xl text-center mb-4">Virtual Scroll</h1>
            <Card id="itemContainer" ref={containerRef} style={{ height: containerHeight }} className="overflow-y-scroll w-100">
                <div style={{ height: LIST_DATA.length * itemHeight, position: 'relative' }}>
                    <div style={{ transform: `translateY(${windowLength.start * itemHeight}px)` }}>
                        {LIST_DATA.slice(windowLength.start, windowLength.end).map((item) => (<Card style={{ height: itemHeight }}>{item.name}</Card>))}
                    </div>
                </div>
            </Card>
            <p className="mt-4 text-center">Visible Elements are :  {windowLength.start} - {windowLength.end}</p>
        </div>
        <ConceptDrawer conceptMd={conceptMd} code={sourceCode} />
    </div>
}