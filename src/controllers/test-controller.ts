import Controller from './controller';
import TestServices from '../services/test-services';

const testServices = new TestServices();

class TestController extends Controller {
  constructor() {
    super(testServices);
  }
}

export default TestController;
