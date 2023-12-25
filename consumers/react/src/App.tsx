import './App.css';
import {importComponents, Colors, Gradients, CommonGradients, Scales} from 'tinijs';

import {TiniGenericComponent, TiniGeneric} from '@tinijs/ui-bootstrap/components/generic.react';
import {TiniBoxComponent, TiniBox} from '@tinijs/ui-bootstrap/components/box.react';
import {TiniButtonComponent, TiniButton} from '@tinijs/ui-bootstrap/components/button.react';
import {IconHeartFillComponent, IconHeartFill} from '@tinijs/bootstrap-icons/heart-fill.react';

importComponents([
  TiniGenericComponent,
  TiniBoxComponent,
  TiniButtonComponent,
  IconHeartFillComponent,
]);

function App() {
  return (
    <main>
      <h1>React</h1>

      <section className="buttons">
        <TiniButton scheme={Colors.Primary}>Primary button</TiniButton>
        <TiniButton scheme={Colors.Success} hoverScheme={Gradients.Success}>Success button (gradient on hover)</TiniButton>
      </section>

      <section className="icons">
        <IconHeartFill scheme={CommonGradients.DiscoClub} scale={Scales.XXXL}></IconHeartFill>
      </section>

      <section className="style-deep">
        <TiniBox
          styledeep="
            .root {
              background: #eee;
              padding: 2rem;
              font-size: 1.5rem;
              border: 2px solid green;
            }
          "
        >
          Style deep
        </TiniBox>
      </section>

      <section className="components">
        <TiniGeneric
          display="flex"
          align-items="center"
          gap="1.5rem"
          width="var(--wide-ss)"
          padding="1rem 1.5rem"
          background="#fff"
          border-radius=".75rem"
          box-shadow="rgba(0, 0, 0, 0.2) 0px 5px 15px"
        >
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=250&amp;h=250&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Erin Lindford"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
            }}
          />
          <div>
            <TiniGeneric color="black" font-size="1.25rem" font-weight="500">
              Erin Lindford
            </TiniGeneric>
            <p style={{margin: 0, color: '#64748b'}}>Product Engineer</p>
            <TiniGeneric
              tag="button"
              background="none"
              margin-top=".5rem"
              padding=".25rem 1rem"
              font-size=".875rem"
              font-weight="600"
              line-height="1.25rem"
              color="#9333ea"
              border="1px solid #e9d5ff"
              border-radius="9999px"
              cursor="pointer"
              styledeep="
                .root:hover {
                  background: #9333ea;
                  color: #fff;
                }
                .root:focus {
                  outline: 2px solid #9333ea;
                  outline-offset: 2px;
                }
              "
            >
              Message
            </TiniGeneric>
          </div>
        </TiniGeneric>
      </section>

    </main>
  );
}

export default App;
