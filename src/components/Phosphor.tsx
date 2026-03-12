import * as Icons from "@phosphor-icons/react";

interface PhosphorProps {
    name: string;
    size?: number;
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
    color?: string;
    className?: string;
}

export default function Phosphor({ name, size = 24, weight = "regular", color, className }: PhosphorProps) {
    const Icon = Icons[name as keyof typeof Icons] as React.ElementType | undefined;

    if (!Icon) {
        console.warn(`Phosphor icon "${name}" not found.`);
        return null;
    }

    return <Icon size={size} weight={weight} color={color} className={className} />;
}
