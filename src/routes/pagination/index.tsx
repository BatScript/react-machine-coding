import { PaginationContainer } from '@/containers/pagination'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagination/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <PaginationContainer />
}
