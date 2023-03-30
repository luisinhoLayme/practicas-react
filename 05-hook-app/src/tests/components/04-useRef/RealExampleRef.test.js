import { shallow } from 'enzyme';
import React from 'react';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef', () => {

  const wrapper = shallow( <RealExampleRef /> );

  test('debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {

    const boton = wrapper.find('button')
    boton.simulate('click')

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  });

});
