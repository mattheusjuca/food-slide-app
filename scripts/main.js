Vue.component('category-item', {
  props: ['category'],
  template: '<li>{{ category.text }} <ul><li v-for="item in category.itens"> {{ item.name }} </li></ul></li>'
})

var app7 = new Vue({
  el: '#app',
  data: {
    categories: [
      { id: 0, text: 'Lanche', itens: [{name: 'Sanduíche de Peito de Peru'}] },
      { id: 1, text: 'Bebida', itens: [{name: 'Coca-Cola'}, {name: 'Guaraná'}, {name: 'Suco de Laranja'}]},
      { id: 2, text: 'Outros', itens: [{name: 'Fone de Ouvido'}, {name: 'Cobertor'}] }
    ]
  }
})