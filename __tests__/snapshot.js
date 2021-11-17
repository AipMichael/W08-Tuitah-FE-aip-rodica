import renderer from 'react-test-renderer';
import Home from '../pages';

describe("", () => {
  describe("", () => {
    test("Then it renders homepage unchanged", () => {
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot(); 

    })
  })
})