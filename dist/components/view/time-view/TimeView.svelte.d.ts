/** @typedef {typeof __propDef.props}  TimeViewProps */
/** @typedef {typeof __propDef.events}  TimeViewEvents */
/** @typedef {typeof __propDef.slots}  TimeViewSlots */
export default class TimeView extends SvelteComponentTyped<{
    viewContextKey: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TimeViewProps = typeof __propDef.props;
export type TimeViewEvents = typeof __propDef.events;
export type TimeViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        viewContextKey: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
