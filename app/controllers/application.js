import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search(e) {
      e.preventDefault();
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
