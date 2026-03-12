import Phosphor from "@/components/Phosphor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { useState } from "react";
import { ConceptDrawer } from "@/components/ConceptDrawer";
import conceptMd from "./Concept.md?raw";
import sourceCode from "./index.tsx?raw";

type Data = {
    name: string;
    type: string;
    icon: string;
    children?: Data[];
}

type PropTypes = {
    data: Data,
    hideChildren: Boolean
    isRoot?: boolean
}

export const RecursiveDirectoryContainer = ({ data, hideChildren = false, isRoot = false }: PropTypes) => {
    const [hide, setHide] = useState(hideChildren)

    return <>
        <Card className="ml-2 w-full max-w-lg">
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <Phosphor name={data.icon} />
                    <p>{data.name}</p>
                </div>
                {data.children && (
                    <Button variant='ghost' onClick={() => setHide(prev => !prev)}>
                        <Phosphor name={hide ? 'CaretRight' : 'CaretDown'} />
                    </Button>
                )}
            </div>
            {data.children && !hide && data.children.map((child) => (
                <RecursiveDirectoryContainer key={child.name} data={child} hideChildren={hide} />
            ))}
        </Card>

        {isRoot && <ConceptDrawer conceptMd={conceptMd} code={sourceCode} />}
    </>
}
