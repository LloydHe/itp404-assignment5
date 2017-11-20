import Component from '@ember/component';
import Ember from 'ember';

export default Ember.Component.extend({
    updated: 0,
    upClicked: Ember.computed('updated', function() {
        return this.get('updated') < 1;
    }),


    downClicked: Ember.computed('updated', function() {
    return this.get('updated') > -1;
    }),

    actions: {
        increment() {
            let val = this.get('score') + 1;
            this.set('updated', this.get('updated') + 1);
            this.get('onvote')(val);
            console.log("vote incremented: " + val);
        },

        decrement() {
            let val = this.get('score') - 1;
            this.set('updated', this.get('updated') - 1);
            this.get('onvote')(val);
            console.log("vote decremented: " + val);
        }
    }
});
