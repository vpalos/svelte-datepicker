export function createStore(date: any, config: any): {
    increment: (segment: any) => void;
    decrement: (segment: any) => void;
    time: import("svelte/store").Writable<string>;
    set: (t: any) => void;
};
