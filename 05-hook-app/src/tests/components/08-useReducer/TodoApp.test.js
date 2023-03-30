import React from 'react';

import { shallow, mount } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {

  const wrapper = shallow( <TodoApp /> );
  Storage.prototype.setItem = jest.fn();

  test('debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('debe de agregar un TODO', () => {

    const wrapper = mount(<TodoApp />);
    //!enzyme no es compatible con la version  react 17 el mount no funciono ahh xd nab

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
    })

    expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )')

    expect(localStorage.setItem).toHaveBeenCalledTimes(2)

  });

});
