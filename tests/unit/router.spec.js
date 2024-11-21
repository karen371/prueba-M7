import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import router from '@/router'
import store from '@/store'
import HomeView from '@/views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AboutView from '@/views/AboutView.vue'
import ContadorView from '@/views/ContadorView.vue'
import Contador from '@/components/Contador.vue'
/** 
 * En estas pruebas se utiliza el router ya existente en el proyecto,
 * por lo tanto se inyecta en el objeto `global` para que esté disponible
 * en los componentes durante la prueba.
 */

describe('validación de rutas en Vue Router', () =>{
    //prueba para homeView
    test('La ruta "/" esta asociada a HomeView', async() =>{
        const wrapper = mount(HomeView,{
            global:{
                plugins:[router],  // Se inyecta el router en los plugins globales
            }
        })
        //navegación por la ruta '/'
        await router.push('/')  // Agrega la ruta '/' a la pila de historial y navega a ella.
        await router.isReady() // Asegura que el router esté completamente listo después de cambiar la ruta.
        // Verifica que la vista HomeView se haya renderizado correctamente
        expect(wrapper.exists()).toBe(true)
        // Dado que HomeView incluye el componente HelloWorld, buscamos este componente
        const helloWorldComponent = wrapper.findComponent(HelloWorld)
        // Verifica que el componente HelloWorld esté presente dentro de la vista 
        expect(helloWorldComponent.exists()).toBe(true)
        // Verifica que el texto 'Welcome to Your Vue.js App' esté presente dentro del componente HelloWorld
        expect(helloWorldComponent.text()).toContain('Welcome to Your Vue.js App')
    })
    //prueba para aboutView
    test('La ruta "/about" esta asociada a AboutView', async()=>{
        const wrapper = mount(AboutView,{
            global:{
                plugins: [router], // Se inyecta el router en los plugins globales
            },
        })
        //navegación por la ruta '/about'
        await router.push('/about') // Agrega la ruta '/about' a la pila de historial y navega a ella.
        await router.isReady() // Asegura que el router esté completamente listo después de cambiar la ruta.
        // Verifica que la vista AboutView se haya renderizado correctamente
        expect(wrapper.exists()).toBe(true)
        // Verifica que el texto 'This is an about page' esté presente dentro de la AboutView
        expect(wrapper.find('h1').text()).toBe('This is an about page')
    })

    //prueba para ContadorView
    test('La ruta "/contador" esta asociada a ContadorView', async () =>{
        const wrapper = mount(ContadorView,{
            global: {
                plugins: [router, store] // Se inyecta el router y store en los plugins globales
            } //en este caso se debe inyectar store porque el componente Contador lo utiliza
        })
        //navegación por la ruta '/contador'
        await router.push('/contador') // Agrega la ruta '/contador' a la pila de historial y navega a ella.
        await router.isReady() // Asegura que el router esté completamente listo después de cambiar la ruta.
        // Verifica que la vista ContadorView se haya renderizado correctamente
        expect(wrapper.exists()).toBe(true)
         // Dado que ContadorView incluye el componente Contador, buscamos este componente
        const ContadorComponent = wrapper.findComponent(Contador)
        // Verifica que el componente Contador esté presente dentro de la vista 
        expect(ContadorComponent.exists()).toBe(true)
        // Verifica que el texto 'Contador' esté presente dentro del componente Contador
        expect(ContadorComponent.text()).toContain('Contador')
    })
})