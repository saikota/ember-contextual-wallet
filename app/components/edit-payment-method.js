import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class EditPaymentMethodComponent extends Component {

    creditCardComponentName = "Credit Card Component ";
    authCreditCardComponentName = " Auth Credit Card Component ";

    @action
    submitForm() {
        console.log(' i am in save the payment method');

        console.log(' On Success: i am going to call OnPaymentMethodUpdate');
    }

    @action 
    submitAuthForm() {

        console.log(' i am going to save the payment method');

        console.log(' on-Success-i am going to do Ask PaymentManager to Update the PaymentMethodUrn on PaymentIntent');

        console.log(' on-Success-i am going to make a call to paymentIntent to do the auth');

        console.log(' On Success: i am going to call OnPaymentIntentComplete');
    }
}
