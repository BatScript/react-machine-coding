import { DragAndDropContainer } from '@/containers/drag-and-drop'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drag-and-drop/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div><DragAndDropContainer /></div>
}
