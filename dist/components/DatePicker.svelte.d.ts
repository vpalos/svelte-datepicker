/** @typedef {typeof __propDef.props}  DatePickerProps */
/** @typedef {typeof __propDef.events}  DatePickerEvents */
/** @typedef {typeof __propDef.slots}  DatePickerSlots */
export default class DatePicker extends SvelteComponentTyped<{
    selected: any;
    format?: string | undefined;
    start?: dayjs.Dayjs | undefined;
    end?: dayjs.Dayjs | undefined;
    selectableCallback?: null | undefined;
    range?: boolean | undefined;
    trigger?: null | undefined;
    continueText?: string | undefined;
    time?: boolean | undefined;
    placeholder?: string | undefined;
    styling?: CalendarStyle | undefined;
    closeOnFocusLoss?: boolean | undefined;
    morning?: number | undefined;
    night?: number | undefined;
    minuteStep?: number | undefined;
}, {
    close: CustomEvent<any>;
    open: CustomEvent<any>;
    'range-selected': CustomEvent<any>;
    'date-selected': CustomEvent<any>;
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        formatted: any;
    };
}> {
}
export type DatePickerProps = typeof __propDef.props;
export type DatePickerEvents = typeof __propDef.events;
export type DatePickerSlots = typeof __propDef.slots;
import { dayjs } from "./lib/date-utils";
import { CalendarStyle } from "../calendar-style.js";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        selected: any;
        format?: string | undefined;
        start?: dayjs.Dayjs | undefined;
        end?: dayjs.Dayjs | undefined;
        selectableCallback?: null | undefined;
        range?: boolean | undefined;
        trigger?: null | undefined;
        continueText?: string | undefined;
        time?: boolean | undefined;
        placeholder?: string | undefined;
        styling?: CalendarStyle | undefined;
        closeOnFocusLoss?: boolean | undefined;
        morning?: number | undefined;
        night?: number | undefined;
        minuteStep?: number | undefined;
    };
    events: {
        close: CustomEvent<any>;
        open: CustomEvent<any>;
        'range-selected': CustomEvent<any>;
        'date-selected': CustomEvent<any>;
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            formatted: any;
        };
    };
};
export {};
