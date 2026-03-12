import { Card } from "@/components/ui/card"

export const DragAndDropContainer = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center 2-screen h-screen">
            <Card className="flex flex-row gap-2 p-2">
                <Card className="w-20 h-20 bg-blue-500" />
                <Card className="w-20 h-20 bg-cyan-500" />
                <Card className="w-20 h-20 bg-green-500" />
                <Card className="w-20 h-20 bg-pink-500" />
            </Card>
            <Card className="w-100 h-100 border-1 border-dashed" />
        </div>
    )
}