import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [],
    newItem: "",
    newPrice: 0
    },
    mounted(){
      this.fetchItems();
    }
    methods: {
      saveNewItem: function(){

        this.items.push({
          name: this.newItem,
          isPurchased: false,
          price: this.newPrice
        });
        this.newItem="";
        this.newPrice=0;
      },
      buyItem: function(index){
        this.items[index].isPurchased = true;
      },
      fetchItems(){
        let request = fetch("http://localhost:8080/items/")
        .then(response => response.json())
        .then(data => this.items = data)
      }
    }
  });
});
