import { mount } from '@vue/test-utils'
import Contador from '@/components/Contador.vue'
import store from '@/store'

describe('Contador.vue', () => {
  let wrapper

  beforeEach(() => {
    // Monta el componente con el store real
    wrapper = mount(Contador, {
      global: {
        plugins: [store] // Usa el store real de Vuex
      }
    })
  })

  test('debe mostrar el valor inicial del contador como 0', () => {
    /*busca el elemento h2 dentro del componente y extrae el elemento contenido dentro de este
    y con EXPECT compara un valor esperado con un valor real y con el TOBE valida que el texto sea 
    string 0 */
    expect(wrapper.find('h2').text()).toBe('0')
  })

  test('debe incrementar el contador', async () => {
    /*Se busca el botón con el ID #incrementar usando wrapper.find('#incrementar')
      y se simula un clic en el botón usando .trigger('click')
    */
    await wrapper.find('#incrementar').trigger('click')
    /*Se verifica que después del primer clic el texto del h2 sea 1*/
    expect(wrapper.find('h2').text()).toBe('1')
    /**Se vuelven a seguir los pasos anteriores para una verificacion de resultados*/
    await wrapper.find('#incrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('2')
  })

  test('debe decrementar el contador', async () => {
    /*Se busca el botón con el ID #incrementar usando wrapper.find('#decrementar')
      y se simula un clic en el botón usando .trigger('click')
    */
    await wrapper.find('#decrementar').trigger('click')
    /*Se verifica que después del primer clic el texto del h2 sea 1 debido a que el contador ya estaba en 2*/
    expect(wrapper.find('h2').text()).toBe('1')
    /**Se vuelven a seguir los pasos anteriores para una verificacion de resultados*/
    await wrapper.find('#decrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('0')
  })
})



