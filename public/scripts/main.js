Vue.component('category-item', {
  props: ['category'],
  template: `
  <li>
    <span class="category-title">
      {{ category.text }}
    </span>
    <ul>
      <li v-for="item in category.itens">
        <div class="item-simbol">
          <img :src="item.img"/>
        </div>
        <div>
          <strong>
            {{ item.name }}
          </strong>
          <br />
          {{item.description}}
        </div>
        <span class="check">
          Check
        </span>
      </li>
    </ul>
  </li>`
})

var app7 = new Vue({
  el: '#app',
  data: {
    categories: [
      { id: 0, 
        text: 'LANCHE', 
        itens: [
          {
            name: 'Sanduíche de Peito de Peru',
            description: 'Sanduíche de peito de peru servido com queijo prato no pão com gergelim',
            img: '/images/sanduiche.png'
          }
        ] 
      },
      { id: 1, 
        text: 'BEBIDA', 
        itens: [
          {
            name: 'Coca-Cola', 
            description: 'Latinha de 175mL',
            img: '/images/cocacola.png'
          }, 
          {
            name: 'Guaraná',
            img: '/images/guarana.png'
          }, 
          {
            name: 'Suco de Laranja', 
            img: '/images/maguary.png'
          }
        ]
      },
      { id: 2, 
        text: 'OUTROS', 
        itens: [
          {
            name: 'Fone de Ouvido', 
            img: '/images/fone.png'
          }, 
          {
            name: 'Cobertor', 
            img: '/images/cobertor.png'
          }
        ] 
      }
    ]
  }
})