/**
 * Database abstraction layer
 * 
 * To be implemented by concrete data providers
 */

/**
 * Represents a 3D point in space, where `x,y` are the horizontal axes and
 * `altitude` is the vertical axis
 */
export interface Location {
  /* x (longitudinal) value */
  x: number;
  /* y (latitudinal) value */
  y: number;
  /* vertical (orthogonal to the xy plane) value */
  altitude: number;
}

/**
 * Type of road
 */
export type RoadType = 'asphalt' | 'gravel' | 'dirt' | 'singletrack';

/**
 * Type of Location for filtering
 */
export type LocationType = 'city' | 'village' | 'all';

/**
 * Filter parameter for searching Locations
 */
export interface LocationFilterParams {
  region?: string;
  locType?: LocationType;
}

/**
 * Filter parameter for searching Roads
 */
export interface RoadFilterParams {
  roadTypes: RoadType[];
}

export function fetchLocationSync(_filter: LocationFilterParams): Record<string, Location> {
  throw new Error('Not Implemented');
}

export async function fetchLocation(_filter: LocationFilterParams): Promise<Record<string, Location>> {
  throw new Error('Not Implemented');
}

export function fetchRoadsSync(_filter: RoadFilterParams): Array<Record<string, string>> {
  throw new Error('Not Implemented');
}

export function fetchRoads(_filter: RoadFilterParams): Array<Record<string, string>> {
  throw new Error('Not Implemented');
}
