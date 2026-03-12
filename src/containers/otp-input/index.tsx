import { useRef } from 'react';
import { Input } from '@/components/ui/input'
import { ConceptDrawer } from '@/components/ConceptDrawer'
import conceptMd from './Concept.md?raw'
import sourceCode from './index.tsx?raw'

export const OtpInputContainer = () => {
    const INPUT_COUNT = 4;
    const refs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value && index + 1 < INPUT_COUNT) {
            refs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            refs.current[index - 1]?.focus()
        }
    }

    return <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-2xl font-bold mb-4'>OTP Input</h1>
        <p className='text-center mb-6 text-muted-foreground text-sm'>Enter the OTP</p>

        <div className='flex gap-2'>
            {Array.from({ length: INPUT_COUNT }).map((_, index) => (
                <Input
                    key={index}
                    ref={el => { refs.current[index] = el }}
                    autoFocus={index === 0}
                    maxLength={1}
                    className='w-10 h-10 text-center text-lg'
                    onChange={e => handleChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(index, e)}
                />
            ))}
        </div>

        <ConceptDrawer conceptMd={conceptMd} code={sourceCode} />
    </div>
}
