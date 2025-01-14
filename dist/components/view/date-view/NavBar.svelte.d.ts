/** @typedef {typeof __propDef.props}  NavBarProps */
/** @typedef {typeof __propDef.events}  NavBarEvents */
/** @typedef {typeof __propDef.slots}  NavBarSlots */
export default class NavBar extends SvelteComponentTyped<{
    viewContextKey: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NavBarProps = typeof __propDef.props;
export type NavBarEvents = typeof __propDef.events;
export type NavBarSlots = typeof __propDef.slots;
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
