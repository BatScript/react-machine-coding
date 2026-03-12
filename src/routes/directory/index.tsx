import { RecursiveDirectoryContainer } from '@/containers/directory'
import { DIRECTORY_DATA } from '@/data/directory'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/directory/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-center mb-4 text-2xl font-bold'>A Recursive Directory Tree</h1>
        <RecursiveDirectoryContainer data={DIRECTORY_DATA} hideChildren={false} isRoot />
    </div>
}
