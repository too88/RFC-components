import { PATH } from "./constants.ts";

type PageID = keyof typeof PATH;

interface IPageInformation {
    href: string;
}

export function pageOf(pageId: PageID): IPageInformation {
    const href = PATH[pageId];
    return {
        href,
    }
}