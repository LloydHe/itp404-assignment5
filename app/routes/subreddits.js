import Route from '@ember/routing/route';

export default Route.extend({

  reddit: Ember.inject.service(),
    model(params) {
        return this.get('reddit').findAllForSubreddit(params.subreddit);
    }
});
