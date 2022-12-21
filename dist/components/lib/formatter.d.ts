export function createFormatter(selectedStartDate: any, selectedEndDate: any, config: any): {
    formatter: import("svelte/store").Readable<{
        formattedSelected: any;
        formattedSelectedEnd: any;
        formattedCombined: any;
    }>;
};
