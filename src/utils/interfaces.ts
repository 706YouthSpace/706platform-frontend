export type VoidPartial<T> = {
    [P in keyof T]?: T[P] | null;
};
