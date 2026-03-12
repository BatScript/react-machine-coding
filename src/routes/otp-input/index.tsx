import { OtpInputContainer } from '@/containers/otp-input'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/otp-input/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OtpInputContainer />
}
