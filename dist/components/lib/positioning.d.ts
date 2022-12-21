export function getPosition(w: any, e: any, config: any): {
    fullscreen: boolean;
    top: number;
    left: number;
} | {
    top: number;
    left: number;
    fullscreen?: undefined;
};
