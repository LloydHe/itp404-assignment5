import Component from '@ember/component';
import Ember from 'ember';

export default Ember.Component.extend({
    thumbnail: Ember.computed('subreddit.data.thumbnail', function() {
        if(this.get('subreddit.data.thumbnail') === ''
        || this.get('subreddit.data.thumbnail') === 'default'
        || this.get('subreddit.data.thumbnail') === 'self') {
            return false;
        }
          return true;
      }),

  actions: {
    changeScore(s) {
      this.set('subreddit.data.score', s);
    }
  }
});
