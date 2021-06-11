import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthCcFormComponent extends Component {
    @action submitForm() {
        console.log(' i am in submit form of the auth-credit-card')
    }
}

