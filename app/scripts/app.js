var app = new Vue({
    el: '#app',
    data: {
        mesRepas: [
            { nom: "repas 1", ingredient: 'boeuf haché' },
            { nom: "repas 2", ingredient: 'boeuf haché' },
            { nom: "repas 3", ingredient: 'boeuf haché' }
        ],

        monRepas: {
            nom: '',
            ingredient: ''
        }
    },

    methods: {
        ajouterRepas: function(item) {
            this.$data.mesRepas.push(item);
        }
    }
});
