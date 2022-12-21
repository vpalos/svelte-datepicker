/** @typedef {typeof __propDef.props}  MonthProps */
/** @typedef {typeof __propDef.events}  MonthEvents */
/** @typedef {typeof __propDef.slots}  MonthSlots */
export default class Month extends SvelteComponentTyped<{
    viewContextKey: any;
    id: any;
}, {
    chosen: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MonthProps = typeof __propDef.props;
export type MonthEvents = typeof __propDef.events;
export type MonthSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        viewContextKey: any;
        id: any;
    };
    events: {
        chosen: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
