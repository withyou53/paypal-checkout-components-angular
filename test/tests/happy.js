
import paypal from 'src/index';

describe('paypal happy cases', () => {

    it('should work', () => {

        assert.ok(paypal.Checkout);
        assert.ok(paypal.Button);
    });
});
