/** @typedef {typeof __propDef.props}  ChevronProps */
/** @typedef {typeof __propDef.events}  ChevronEvents */
/** @typedef {typeof __propDef.slots}  ChevronSlots */
export default class Chevron extends SvelteComponentTyped<{
    up?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ChevronProps = typeof __propDef.props;
export type ChevronEvents = typeof __propDef.events;
export type ChevronSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        up?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
