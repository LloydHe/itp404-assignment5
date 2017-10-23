import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      let reddit = this.get('subreddit');
      this.transitionToRoute('subreddits', reddit);
    }
  }
});
