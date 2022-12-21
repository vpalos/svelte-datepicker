/** @typedef {typeof __propDef.props}  DateViewProps */
/** @typedef {typeof __propDef.events}  DateViewEvents */
/** @typedef {typeof __propDef.slots}  DateViewSlots */
export default class DateView extends SvelteComponentTyped<{
    viewContextKey: any;
}, {
    chosen: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DateViewProps = typeof __propDef.props;
export type DateViewEvents = typeof __propDef.events;
export type DateViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        viewContextKey: any;
    };
    events: {
        chosen: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
