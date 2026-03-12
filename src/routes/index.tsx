import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col justify-center items-center h-screen w-screen'>
    <h1 className='text-center mb-4 text-2xl font-bold'>Machine Coding</h1>
    <p className='text-center mb-4'>List of all the machine coding problems</p>
    <ul className='flex flex-col justify-center items-center gap-2'>
      <li className='underline'><Link to="/directory">Directory</Link></li>
      <li className='underline'><Link to="/pointer-tracker">Pointer Tracker</Link></li>
      <li className='underline'><Link to="/otp-input">OTP Input</Link></li>
      {/* <li className='underline'><Link to="/pagination">Pagination</Link></li> */}
      <li className='underline'><Link to="/virtual-scroll">Virtual Scroll</Link></li>
      <li className='underline'><Link to="/drag-and-drop">Drag and Drop</Link></li>
    </ul>
  </div>
}
