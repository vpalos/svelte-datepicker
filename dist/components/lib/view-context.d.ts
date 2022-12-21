export function createViewContext(isStart: any, mainContext: any): {
    isStart: any;
    date: any;
    view: typeof DateView;
    isDaytime: import("svelte/store").Readable<boolean>;
    displayedDate: any;
    monthView: import("svelte/store").Readable<{
        monthIndex: number;
        visibleMonth: any;
    }>;
};
import DateView from "../view/date-view/DateView.svelte";
