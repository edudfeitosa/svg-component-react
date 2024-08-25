import { ColorIconTypes } from '@/data/enums/colorIcon.ts';

export const useColorIcon = () => {
    const colorSelected = (color: string) => {
        if (!Object.keys(ColorIconTypes).includes(color.toLowerCase())) {
            return ColorIconTypes.verde;
        }

        return ColorIconTypes[color.toLowerCase() as keyof typeof ColorIconTypes];
    }

    return { colorSelected };
}