import { Status } from "~/components/atoms/author-avatar/index.tsx";
import { OFFLINE_GRADIENT, ONLINE_GRADIENT, BUSY_GRADIENT, IDLE_GRADIENT } from "./constants.ts";

export function getLinearGradient(status: Status): string[] {
    const mapping = {
        busy: BUSY_GRADIENT,
        offline: OFFLINE_GRADIENT,
        idle: IDLE_GRADIENT,
        online: ONLINE_GRADIENT,
    } as Record<Status, string[]>;

    return mapping[status];
};
