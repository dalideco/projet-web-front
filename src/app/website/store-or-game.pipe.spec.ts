import { StoreOrGamePipe } from './store-or-game.pipe';

describe('StoreOrGamePipe', () => {
  it('create an instance', () => {
    const pipe = new StoreOrGamePipe();
    expect(pipe).toBeTruthy();
  });
});
