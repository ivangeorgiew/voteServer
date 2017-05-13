import { createStore } from 'redux';
import { expect } from 'chai';
import { reducer } from '../server/reducer';




describe('Testing server', () => {

  /* TRY REDUX STORE */
  it('works with store from Redux', () => {
    const store = createStore(reducer);

    expect(store.getState()).to.eql({});

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Transpotting', '28 days']
    });

    expect(store.getState()).to.eql({
      entries: ['Transpotting', '28 days']
    });
  });
});
