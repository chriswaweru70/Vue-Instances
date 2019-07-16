var one = new Vue({
    el: '#vue-app-one',
    data: {
        name: 'Chris Kamau Waweru',
    },
    methods: {
        changeNameFRank: function () {
            two.name = "gigigigii"
        }
    },
    computed: {
        greeting: function () {
            return "Hello" + " " + this.name
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        name: "Frank Mwangi Waweru"
    },
    methods: {
        changeName: function () {
            one.name = 'Jane NJoKI MAWANGI'
        }
    },
    computed: {
        greeting: function () {
            return "Hey" + " " + this.name
        }
    }
});