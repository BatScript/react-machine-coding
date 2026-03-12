import { VirtualScrollingContainer } from '@/containers/virtual-scrolling'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/virtual-scroll/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <VirtualScrollingContainer />
    </div>
}
