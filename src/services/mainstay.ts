import { userGQLService, User } from './gql/user';
import { eventGQLService, EventFilter, Event, Location, Organizer, WebPageElement, ShallowEvent } from './gql/event';
import { ThingRegistry } from './thing-registry';
import { VoidPartial as Partial } from '@/utils/interfaces';
import _ from 'lodash';

export class MainStay {

    userService = userGQLService;
    eventService = eventGQLService;

    fileUploadUrl = '/api/files'


    registry = {
        events: new ThingRegistry<Event>('Event'),
        locations: new ThingRegistry<Location>('Location'),
        organizers: new ThingRegistry<Organizer>('Organizer')
    }

    user?: User;
    userPromise: Promise<User>;

    constructor() {
        this.registry.organizers.createView('Organization', (map) => Array.from(map.values()).filter((x) => x._type === 'Organization'));
        this.registry.organizers.createView('Person', (map) => Array.from(map.values()).filter((x) => x._type === 'Person'));

        this.registry.locations.createView('Place', (map) => Array.from(map.values()).filter((x) => x._type === 'Place'));
        this.registry.locations.createView('VirtualLocation', (map) => Array.from(map.values()).filter((x) => x._type === 'VirtualLocation'));

        this.userPromise = this.getUser();

        this.getLocations();
        this.getOrganizers();
    }

    async getUser() {
        try {
            this.user = await this.userService.whoami()!;
        } catch (err) {
            console.warn('User not logged in');
            // window.location.href = '/api/login';
            throw err;
        }

        return this.user as User;
    }

    async getEvents(filter: EventFilter = {}) {
        const events = await this.eventService.filterEvents(filter);

        for (const event of events) {
            if (_.isObject(event.location)) {
                event.location = this.registry.locations.index(event.location!);
            }
            if (_.isObject(event.organizer)) {
                event.organizer = this.registry.organizers.index(event.organizer!);
            }
        }

        const indexedEvents = this.registry.events.indexMultiple(events);

        return indexedEvents
    }

    async getEvent(id: string) {
        const event = await this.eventService.getEvent(id);

        if (_.isObject(event.location)) {
            event.location = this.registry.locations.index(event.location!);
        }
        if (_.isObject(event.organizer)) {
            event.organizer = this.registry.organizers.index(event.organizer!);
        }

        const indexedEvent = this.registry.events.index(event);

        return indexedEvent;
    }

    async getLocations() {
        const locations = await this.eventService.getLocations();

        const indexedLocations = this.registry.locations.indexMultiple(locations);

        return this.registry.locations.getView('all');
    }

    async getOrganizers() {
        const organizers = await this.eventService.getOrganizers();

        const indexedOrganizers = this.registry.organizers.indexMultiple(organizers);

        return this.registry.organizers.getView('all');
    }

    async createEvent(name: string) {
        const event = await this.eventService.createEvent(name);

        return this.registry.events.index(event);
    }

    async upsertLocation(location: Partial<Location>) {
        let result;
        if (location._type === 'VirtualLocation') {
            result = await this.eventService.upsertVirtualLocation(location);
        } else if (location._type === 'Place') {
            result = await this.eventService.upsertPlace(location);
        } else {
            throw new Error('Invalid Type to upsert location');
        }


        return this.registry.locations.index(result);
    }

    async upsertOrganizer(organizer: Partial<Organizer>) {
        let result;
        if (organizer._type === 'Organization') {
            result = await this.eventService.upsertOrganization(organizer);
        } else {
            result = await this.eventService.upsertPerson(organizer);
        }

        return this.registry.organizers.index(result);
    }


    async updateWebPage(webPage: WebPageElement) {
        const result = this.eventService.updateWebPageElement(webPage._id, webPage.text)

        return result;
    }

    async updateEvent(shallowEvent: ShallowEvent) {
        const event = await this.eventService.updateEvent(shallowEvent._id, _.omit(shallowEvent, '_id'))

        if (_.isObject(event.location)) {
            event.location = this.registry.locations.index(event.location!);
        }
        if (_.isObject(event.organizer)) {
            event.organizer = this.registry.organizers.index(event.organizer!);
        }

        return this.registry.events.index(event);
    }

    uploadFileBare(blobInfo: { blob: () => Blob, filename: () => string }, success: Function, failure: Function) {

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', '/api/files');

        xhr.onload = function () {
            var json;

            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }

            json = JSON.parse(xhr.responseText);

            if (!json?.data || typeof json.data.href != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }

            success(json.data.href);
        };

        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        xhr.send(formData);
    }

}


export const mainStay = new MainStay();
