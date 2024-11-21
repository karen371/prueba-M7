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

  it('debe mostrar el valor inicial del contador como 0', () => {
    expect(wrapper.find('h2').text()).toBe('0')
  })

  it('debe incrementar el contador', async () => {
    await wrapper.find('#incrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('1')

    await wrapper.find('#incrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('2')
  })

  it('debe decrementar el contador', async () => {
    await wrapper.find('#decrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('1')

    await wrapper.find('#decrementar').trigger('click')
    expect(wrapper.find('h2').text()).toBe('0')
  })
})



