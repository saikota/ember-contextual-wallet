import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | wallet-management', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:wallet-management');
    assert.ok(route);
  });
});
