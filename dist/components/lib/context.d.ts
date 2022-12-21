export const contextKey: {};
export function setup(given: any, config: any): {
    months: {
        month: any;
        year: any;
        weeks: any[];
    }[];
    component: import("svelte/store").Writable<string>;
    today: dayjs.Dayjs;
    selectedStartDate: import("svelte/store").Writable<any>;
    selectedEndDate: import("svelte/store").Writable<any>;
    leftCalendarDate: import("svelte/store").Writable<any>;
    rightCalendarDate: import("svelte/store").Writable<any>;
    config: any;
    shouldShakeDate: import("svelte/store").Writable<boolean>;
    isOpen: import("svelte/store").Writable<boolean>;
    isClosing: import("svelte/store").Writable<boolean>;
    highlighted: import("svelte/store").Writable<dayjs.Dayjs>;
    formatter: import("svelte/store").Readable<{
        formattedSelected: any;
        formattedSelectedEnd: any;
        formattedCombined: any;
    }>;
    isDateChosen: import("svelte/store").Writable<boolean>;
    resetView: () => void;
    isSelectingFirstDate: import("svelte/store").Writable<boolean>;
};
import { dayjs } from "./date-utils.js";
