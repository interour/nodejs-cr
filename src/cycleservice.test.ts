import * as CycleService from './cycleservice';

describe('src/cycleservice', () => {
  describe('positive test scaffolding', () => {
    describe('#cycleStubSync', () => {
      it('should properly synchronously execute and return a value', () => {
        const result = CycleService.cycleStubSync();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(4);
        expect(result).toEqual(expect.arrayContaining([
          'hello', 'test', 'sync', 'response',
        ]));
      });
    });
    describe('#cycleStub', () => {
      it('should properly asynchronously execute and return a value', async () => {
        const result = await CycleService.cycleStub();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(4);
        expect(result).toEqual(expect.arrayContaining([
          'hello', 'test', 'async', 'response',
        ]));
      });
    });
  });
});
