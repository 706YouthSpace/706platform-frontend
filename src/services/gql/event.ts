
import { AppGraphQLService } from './base';
import { VoidPartial as Partial } from '@/utils/interfaces';
import _ from 'lodash';

export interface Location {
    _id: string;
    name: string;
    disambiguatingDescription?: string;
    identifier?: string;
    image?: string;
    address?: string;
    _type: string;
}

export interface Offer {
    _id: string;
    price: number;
    priceCurrency: string;
    name: string;
}

export interface Organizer {
    _id: string;
    image?: string;
    name: string;
    _type: string;
}

export interface WebPageElement {
    _id: string;
    text: string;
}

export interface Event {
    _id: string;
    name: string;
    description?: string;
    image?: string;
    startDate: Date;
    endDate: Date;
    identifier?: string;
    location?: Location;
    maximumAttendeeCapacity?: number;
    offers?: Offer[];
    organizer?: Organizer;
    mainEntityOfPage: WebPageElement;
    tags: string[];
}

export interface ShallowEvent {
    _id: string;
    name: string;
    description?: string;
    image?: string;
    startDate: Date;
    endDate: Date;
    identifier?: string;
    location?: string;
    maximumAttendeeCapacity?: number;
    offers?: string[];
    organizer?: string;
    mainEntityOfPage: string;
    tags: string[];
}

export interface EventFilter {
    organizers?: string[],
    tags?: string[],
    locations?: string[],
    after?: Date,
    before?: Date,
    owner?: string
}


export class EventGQLService extends AppGraphQLService {
    async getOffersByOwner(ownerId: string) {
        const result = await this.query(`
        query($ownerId: String!){
            offers: getOffersByOwner(ownerId: $ownerId) {
               _id
               price
               priceCurrency
               name
            }
           }`, { ownerId });

        return result.offers;
    }

    async getWebPageElement(id: string) {
        const result = await this.query(`
        query($id: String!) {
            webpage: getWebPageElement(id: $id) {
                _id
                text
            }
        }
        `, { id });

        return result.webpage;
    }

    async getEvent(id: string) {
        const result = await this.query(`
        query($id: String!){
            event: getEvent(id: $id) {
                _id
                name
                description
                image
                startDate
                endDate
                identifier
                location {
                    _id
                    name
                    identifier
                    disambiguatingDescription
                }
                maximumAttendeeCapacity
                offers {
                    _id
                    name
                    price
                    priceCurrency
                }
                organizer {
                    _id
                    name
                    image
                }
                mainEntityOfPage {
                    _id
                    text
                }
                tags
            }
        }`, { id });

        return result.event;
    }

    async getOffer(id: string) {
        const result = await this.query(`
        query($id: String!){
            offer: getOffer(id: $id) {
                _id
                name
                price
                priceCurrency
            }
        }`, { id });

        return result.offer;
    }

    async getLocation(id: string) {
        const result = await this.query(`
        query($id: String!){
            location: getLocation(id: $id) {
                _id
                name
                disambiguatingDescription
                identifier
                image
            }
        }`, { id });

        return result.location;
    }

    async getOrganizer(id: string) {
        const result = await this.query(`
        query($id: String!){
            organizer: getOrganizer(id: $id) {
                _id
                name
                image
            }
        }`, { id });

        return result.organizer;
    }

    async getOwnOrganizers() {
        const result = await this.query(`
        query {
            organizers: getOwnOrganizers {
                _id
                name
                image
                _type
            }
        }`);

        return result.organizers;
    }

    async getLocations() {
        const result = await this.query(`
        query{
            locations: getLocations {
                _id
                name
                image
                address
                _type
                identifier
                disambiguatingDescription
            }
        }`);

        return result.locations;
    }

    async getOrganizers() {
        const result = await this.query(`
        query{
            organizers: getOrganizers {
                _id
                name
                image
                _type
            }
        }`);

        return result.organizers;
    }


    async filterEvents(filter: Partial<EventFilter>) {
        const result = await this.query(`
        query($filter: EventFilterParam){
            events: filterEvents(filter: $filter) {
                _id
                name
                description
                image
                startDate
                endDate
                identifier
                location {
                    _id
                    name
                    identifier
                    disambiguatingDescription
                    image
                }
                maximumAttendeeCapacity
                offers {
                    _id
                    name
                    price
                    priceCurrency
                }
                organizer {
                    _id
                    name
                    image
                }
                mainEntityOfPage {
                    _id
                    text
                }
                tags
            }
        }`, { filter });

        return result.events as Event[];
    }


    async createEvent(name: string) {
        const result = await this.query(`
            mutation($name: String!) {
                event: createEvent(name: $name) {
                    _id
                    name
                    description
                    image
                    startDate
                    endDate
                    identifier
                    location {
                        _id
                        name
                        identifier
                        disambiguatingDescription
                        image
                    }
                    maximumAttendeeCapacity
                    offers {
                        _id
                        name
                        price
                        priceCurrency
                    }
                    organizer {
                        _id
                        name
                        image
                    }
                    mainEntityOfPage {
                        _id
                        text
                    }
                    tags
                }
            }
        `, { name });

        return result.event;
    }

    async updateEvent(id: string, shallowEvent: Partial<ShallowEvent>) {
        const result = await this.query(`
            mutation(
                $id: String!,
                $shallowEvent: ShallowEvent!
            ) {
                event: updateEvent(id: $id, partialEvent: $shallowEvent) {
                    _id
                    name
                    description
                    image
                    startDate
                    endDate
                    identifier
                    location {
                        _id
                        name
                        identifier
                        disambiguatingDescription
                        image
                    }
                    maximumAttendeeCapacity
                    offers {
                        _id
                        name
                        price
                        priceCurrency
                    }
                    organizer {
                        _id
                        name
                        image
                    }
                    mainEntityOfPage {
                        _id
                        text
                    }
                    tags
                }
            }
        `, { id, shallowEvent });

        return result.event as Event;
    }

    async updateWebPageElement(id: string, text: string) {

        const result = await this.query(`
        mutation($id: String!, $text: String!){
            result: updateWebPageElement(id: $id, text: $text) {
                _id
                text
            }
        }`, { id, text });

        return result;
    }

    async upsertVirtualLocation(location: Partial<Location>) {
        const qParam: any = {
            id: '',
            location: {}
        };
        if (location._id) {
            qParam.id = location._id;
        }

        qParam.location = _.omit(location, '_id')

        const result = await this.query(`
        mutation($id: String, $location: PartialLocation) {
            location: upsertVirtualLocation(id: $id, partialVirtualLocation: $location) {
                _id
                name
                disambiguatingDescription
                identifier
            }
        }`, qParam);


        return result.location;
    }

    async upsertPlace(location: Partial<Location>) {
        const qParam: any = {
            id: '',
            location: {}
        };
        if (location._id) {
            qParam.id = location._id;
        }

        qParam.location = _.omit(location, ['_id', '_type'])

        const result = await this.query(`
        mutation($id: String, $location: PartialLocation) {
            location: upsertPlace(id: $id, partialPlace: $location) {
                _id
                name
                disambiguatingDescription
                address
            }
        }`, qParam);


        return result.location;
    }

    async upsertOffer(eventId: string, offer: Partial<Offer>) {
        const qParam: any = {
            id: '',
            offer: {},
            owner: eventId
        };
        if (offer._id) {
            qParam.id = offer._id;
        }

        qParam.offer = _.omit(offer, '_id')

        const result = await this.query(`
        mutation($id: String, $offer: PartialOffer) {
            offer: upsertOffer(id: $id, partialOffer: $offer, owner: $owner) {
                _id
                price
                priceCurrency
                name
            }
        }`, qParam);


        return result.offer;
    }

    async upsertOrganization(organization: Partial<Organizer>) {
        const qParam: any = {
            id: '',
            organization: {}
        };
        if (organization._id) {
            qParam.id = organization._id;
        }

        qParam.organization = _.omit(organization, '_id')

        const result = await this.query(`
        mutation($id: String, $organization: PartialOrganizer){
            organization: upsertOrganization(id: $id, partialOrganization: $organization) {
                _id
                name
                image
                _type
            }
        }`, qParam);


        return result.organization;
    }

    async upsertPerson(person: Partial<Organizer>) {
        const qParam: any = {
            id: '',
            person: {}
        };
        if (person._id) {
            qParam.id = person._id;
        }

        qParam.person = _.omit(person, '_id')

        const result = await this.query(`
        mutation($id: String, $person: PartialOrganizer) {
            person: upsertPerson(id: $id, partialPerson: $person) {
                _id
                name
                image
                _type
            }
        }`, qParam);


        return result.person;
    }
}

export const eventGQLService = new EventGQLService();
