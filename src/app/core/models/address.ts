import { GeoLocation } from "./geo-location";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}
