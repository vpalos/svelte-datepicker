/** @typedef {typeof __propDef.props}  ViewProps */
/** @typedef {typeof __propDef.events}  ViewEvents */
/** @typedef {typeof __propDef.slots}  ViewSlots */
export default class View extends SvelteComponentTyped<{
    viewContextKey: any;
}, {
    chosen: any;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewProps = typeof __propDef.props;
export type ViewEvents = typeof __propDef.events;
export type ViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        viewContextKey: any;
    };
    events: {
        chosen: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
