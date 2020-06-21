import _ from "lodash";

export class ThingRegistry<T extends { _id: string }> {

    map = new Map<string, T>();

    dataViews = new Map<string, T[]>();
    viewFuncs = new Map<string, Function>();

    constructor(public type: string) {
        this.createView('all', (map)=> Array.from(map.values()));
    }

    index(thing: T, noRebuild: any = false): T {
        let indexedThing = this.map.get(thing._id);
        if (indexedThing) {
            return _.merge(indexedThing, thing);
        }

        indexedThing = thing;
        this.map.set(indexedThing._id, indexedThing);

        if (!noRebuild) {
            for (const x of this.dataViews.keys()) {
                this.rebuildView(x);
            }
        }

        return indexedThing;
    }

    indexMultiple(things: T[]) {
        if (!things.length) {
            return things;
        }
        const indexed = things.map((x)=> this.index(x, 'NO REBUILD'));
        for (const x of this.dataViews.keys()) {
            this.rebuildView(x);
        }
        return indexed;
    }

    getById(id: string) {
        return this.map.get(id);
    }

    get(thing: T) {
        return this.getById(thing._id);
    }

    getView(name?: string) {
        return this.dataViews.get(name || 'all');
    }

    createView(name: string, func: (map: Map<string, T>, origView?: T[]) => T[]) {
        this.viewFuncs.set(name, func);
        this.dataViews.set(name, []);

        return this.rebuildView(name);
    }

    rebuildView(name: string) {
        const viewFunc = this.viewFuncs.get(name);

        if (!viewFunc) {
            throw new Error('Unknown data view');
        }
        const origView = this.getView(name);

        const latestView = viewFunc(this.map, origView);

        if (!origView) {
            this.dataViews.set(name, latestView);

            return latestView;
        }

        if (latestView === origView) {
            return latestView;
        }

        const tmpView = Array.from(latestView as T[]);
        origView.length = 0;
        origView.push(...tmpView);

        return origView;
    }


}
