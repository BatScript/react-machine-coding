import { PointerTrackerContainer } from '@/containers/pointer-tracker'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pointer-tracker/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PointerTrackerContainer />
}
