/**
 * Created by vphrase on 14/12/16.
 */
Vue.component('story',{
    template:'#template-story-raw',
    props:['story'],
    methods:{
        upvoteStory:function (story) {
            story.upvotes++;
            this.$http.patch('http://localhost:8000/story/'+story.id+'/',story)
        },
        updateStory:function (story) {
            this.$http.patch('http://localhost:8000/story/'+story.id+'/',story)
            story.editing=false
        },
        deleteStory:function (story) {
            this.$parent.stories.$remove(story);
            this.$http.delete('http://localhost:8000/story/'+story.id+'/')
        },
        editStory:function (story) {
            story.editing=true;
        },

        storeStory:function (story) {
            this.$http.post('http://localhost:8000/story/',story).then(function () {
                Vue.set(story,'id',response.data.id);
                story.editing=false;

                //or we as did before
                //vm.stories=response.data
            })
        }

    }

});


var vm=new Vue({
    el: '.container',
    data: {
        stories: []
    },
    ready: function () {
        //GET REQUEST
        this.fetchStory()
    },
    methods: {
        createStory: function () {
            var newStory = {
                'plot': '',
                'upvotes': 0,
                'editing': true
            };
            this.stories.push(newStory)
        },
        fetchStory: function () {
            this.$http.get('http://localhost:8000/story/').then(function (response) {
                var storiesReady = response.data.map(function (story) {
                    story.editing = false;
                    return story
                });
                this.$set('stories',response.storiesReady)

            })
        }
    }
});