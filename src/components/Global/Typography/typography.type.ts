import { CSSProperties } from "styled-components";

export type TypographyProps = Partial<CSSProperties> & {
    color?: string;
    size?: number;
    children?: React.ReactNode;
};
