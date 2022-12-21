/** @typedef {typeof __propDef.props}  WeekProps */
/** @typedef {typeof __propDef.events}  WeekEvents */
/** @typedef {typeof __propDef.slots}  WeekSlots */
export default class Week extends SvelteComponentTyped<{
    viewContextKey: any;
    days: any;
    direction: any;
}, {
    chosen: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type WeekProps = typeof __propDef.props;
export type WeekEvents = typeof __propDef.events;
export type WeekSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        viewContextKey: any;
        days: any;
        direction: any;
    };
    events: {
        chosen: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
