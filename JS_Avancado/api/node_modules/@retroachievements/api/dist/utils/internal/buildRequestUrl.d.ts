import type { AuthObject } from "../public/models";
export declare const buildRequestUrl: (baseUrl: string, endpointUrl: string, authObject: AuthObject, args?: Record<string, string | number>) => string;
