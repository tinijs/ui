import {importComponents, Colors, Gradients, CommonGradients} from 'tinijs';
import {TiniButtonComponent, TiniButton} from '@tinijs/ui-bootstrap/components/button.react';
import {IconHeartFillComponent, IconHeartFill} from '@tinijs/bootstrap-icons/heart-fill.react';

importComponents([
  TiniButtonComponent,
  IconHeartFillComponent
]);

function App() {
  return (
    <div className="App">
      <h1>React</h1>

      <div className="buttons">
        <TiniButton scheme={Colors.Primary}>A Button</TiniButton>
        <TiniButton scheme={Colors.Success} hoverScheme={Gradients.Success}>A Button</TiniButton>
      </div>

      <div className="icons">
        <IconHeartFill scheme={CommonGradients.DiscoClub}></IconHeartFill>
      </div>
    </div>
  );
}

export default App;
