Vue.component('category-item', {
  props: ['category'],
  template: `
  <li>
    <span class="category-title">
      {{ category.text }}
    </span>
    <ul>
      <li v-for="item in category.itens">
        <span class="item">
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
          <i class="check fa fa-check-circle"></i>
        </span>
      </li>
    </ul>
  </li>`
});

var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { id: 0, 
        text: 'LANCHE', 
        itens: [
          {
            id: 0,
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
            id: 0,
            name: 'Coca-Cola', 
            description: 'Latinha de 175mL',
            img: '/images/cocacola.png'
          }, 
          {
            id: 1,
            name: 'Guaraná',
            img: '/images/guarana.png'
          }, 
          {
            id: 2,
            name: 'Suco de Laranja', 
            img: '/images/maguary.png'
          }
        ]
      },
      { id: 2, 
        text: 'OUTROS', 
        itens: [
          {
            id: 0,
            name: 'Fone de Ouvido', 
            img: '/images/fone.png'
          }, 
          {
            id: 1,
            name: 'Cobertor', 
            img: '/images/cobertor.png'
          }
        ] 
      }
    ]
  }
})

var selectedItens = 0;

$(function() {
  $('.item').click(function(){
    var $this = $(this);
    var $check = $this.find(".check");
    $check.css("visibility", "visible");
    $("footer").css("display", "flex");
    $("footer").css("display", "-webkit-flex");
    selectedItens ++;
    $('footer').html(selectedItens +
                      ` itens
                      <button id="btn-confirm" class="btn btn-success">
                        Confirmar Pedido <i class="fa fa-chevron-right"></i>
                      </button>`
                    );
  });
});