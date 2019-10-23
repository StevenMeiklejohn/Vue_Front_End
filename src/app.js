import Vue from 'vue';
import axios from 'axios'

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
    },
    methods: {
      saveNewItem: function(){

        this.items.push({
          name: this.newItem,
          isPurchased: false,
          price: this.newPrice
        });
        this.postNewItem();
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
      },
      postNewItem () {
        let payload = {
          name: this.newItem,
          isPurchased: false,
          price: this.newPrice
        }
        axios.post('http://jsonplaceholder.typicode.com/posts', payload)
        .then((response) => {console.log(response)})
        .catch((e) => {
          console.error(e)
        })
      }
    }
  });
});
