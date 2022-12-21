/** @typedef {typeof __propDef.props}  PopoverProps */
/** @typedef {typeof __propDef.events}  PopoverEvents */
/** @typedef {typeof __propDef.slots}  PopoverSlots */
export default class Popover extends SvelteComponentTyped<{
    trigger: any;
    close?: (() => void) | undefined;
}, {
    closed: CustomEvent<any>;
    opened: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    trigger: {};
    contents: {};
}> {
    get close(): () => void;
}
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        trigger: any;
        close?: (() => void) | undefined;
    };
    events: {
        closed: CustomEvent<any>;
        opened: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
        contents: {};
    };
};
export {};
