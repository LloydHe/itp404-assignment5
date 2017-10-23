import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search: function() {
      let reddit = this.get('subreddit');
      this.transitionToRoute('subreddits', reddit);
    }
  }
});
