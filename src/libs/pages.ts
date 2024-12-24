import { PATH } from "./constants.ts";

type PageID = keyof typeof PATH;

interface PageInformation {
    href: string;
}

export function pageOf(pageId: PageID): PageInformation {
    const href = PATH[pageId];
    return {
        href,
    }
}