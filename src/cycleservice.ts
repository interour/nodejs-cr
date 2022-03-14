/**
 * Cycle finder service.
 * 
 * Implementation goes here.
 */

export function cycleStubSync(): Array<string> {
  return ['hello', 'test', 'sync', 'response'];
}

export async function cycleStub(): Promise<Array<string>> {
  return ['hello', 'test', 'async', 'response'];
}
