import { shallowMount, mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe("Componente Child.vue", () => {
  test("Debe emitir el evento 'send-text' con el texto ingresado", async () => {
    const wrapper = mount(Child);

    // Encontramos el input y escribimos algo en él
    const input = wrapper.find("#input");
    await input.setValue("Texto desde el hijo");

    // Simulamos el clic en el botón
    const button = wrapper.find("#enviar");
    await button.trigger("click");

    // Aserción: Verificar que se emitió el evento con el texto correcto
    expect(wrapper.emitted("send-text")).toBeTruthy();
    expect(wrapper.emitted("send-text")[0]).toEqual(["Texto desde el hijo"]);

    // Aserción adicional: Verificar que el campo de texto se vacía después del envío
    expect(wrapper.find("#input").element.value).toBe("");
  });
});

describe("Componente Parent.vue", () => {
    test("Debe manejar el evento 'send-text' y actualizar el texto recibido", async () => {
      const wrapper = mount(Parent);
  
      // Encontramos el componente hijo
      const child = wrapper.findComponent({ name: "Child" });
  
      // Simulamos la emisión del evento desde el hijo
      const text = "Texto recibido del hijo";
      child.vm.$emit("send-text", text);
  
      // Aserción: Verificar que el texto fue actualizado en el estado del padre
      await wrapper.vm.$nextTick(); // Esperamos que Vue actualice el DOM
      expect(wrapper.find("#recivido").text()).toContain(text);
    });
});
