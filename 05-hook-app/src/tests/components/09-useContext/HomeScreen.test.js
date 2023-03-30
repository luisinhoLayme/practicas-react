import React from 'react';

import { shallow } from 'enzyme';
import HomeScreen from '../../../components/09-useContex/HomeScreen';
import { UserContext } from '../../../components/09-useContex/UserContext';

describe('Pruebas en <HomeScreen />', () => {

  const user = {
    name: 'Luisinho',
    email: 'luisinho@luisinho.com'
  }

  // este con mount xd no me funciona xd nab. ahh
  const wrapper = shallow(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

});
