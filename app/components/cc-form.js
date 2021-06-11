import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CcFormComponent extends Component {
  
  @action submitForm() {
      console.log(' i am in submit form of the credit-card')
  }
}
