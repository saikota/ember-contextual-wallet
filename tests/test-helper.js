import Application from 'ask-jeeves/app';
import config from 'ask-jeeves/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
