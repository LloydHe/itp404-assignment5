import Component from '@ember/component';
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    read(){
      this.get('onclick')();
    }
  }
});
