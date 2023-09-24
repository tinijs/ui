import {importComponents, Colors} from 'tinijs';

import {TiniButtonComponent, TiniButton} from '@tinijs/ui-bootstrap/components/button.js';

importComponents([
  TiniButtonComponent
]);

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <TiniButton scheme={Colors.Primary}>A Button</TiniButton>
    </div>
  );
}

export default App;
