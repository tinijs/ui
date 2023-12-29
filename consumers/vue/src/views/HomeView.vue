<script setup lang="ts">
import {registerComponents} from 'tinijs';

import {TiniGenericComponent} from '@tinijs/ui-bootstrap/components/generic';
import {TiniGenericUnscopedComponent} from '@tinijs/ui-bootstrap/components/generic-unscoped';
import {TiniBoxComponent} from '@tinijs/ui-bootstrap/components/box';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

registerComponents([
  TiniGenericComponent,
  TiniGenericUnscopedComponent,
  TiniBoxComponent,
  TiniButtonComponent,
  IconHeartFillComponent,
]);
</script>

<template>
  <main>

    <h1>Vue</h1>

    <section class="buttons">
      <tini-button scheme="primary">Primary button</tini-button>
      <tini-button scheme="success" hover:scheme="gradient-success">Success button (gradient on hover)</tini-button>
    </section>

    <section class="icons">
      <icon-heart-fill scheme="gradient-disco-club" scale="xxxl"></icon-heart-fill>
    </section>
  
    <section class="style-deep">
      <tini-box
        styleDeep="
          .root {
            background: #eee;
            padding: 2rem;
            font-size: 1.5rem;
            border: 2px solid green;
          }
        "
      >
        Style deep
      </tini-box>
    </section>

    <section class="components">
      <tini-generic-unscoped
        name="my-component"
        style="
          display: flex;
          justify-content: center;
          padding: 1rem;
        "
        margin-bottom="2rem"
        background="#ccc"
        border="2px solid green"
        border-radius=".5rem"
        styleDeep="
          .root:hover {
            background: #a69836;
          }
          .root::before {
            content: 'Unscoped';
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            background: #333;
            color: #fff;
            border-radius: 50%;
          }
          @media (min-width: md) {
            .root {
              border-color: blue;
            }
          }
        "
      ></tini-generic-unscoped>

      <tini-generic
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
          style="
            width: 100px;
            height: 100px;
            border-radius: 50%;
          "
        />
        <div>
          <tini-generic color="black" font-size="1.25rem" font-weight="500">
            Erin Lindford
          </tini-generic>
          <p style="margin: 0; color: #64748b">Product Engineer</p>
          <tini-generic
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
            styleDeep="
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
          </tini-generic>
        </div>
      </tini-generic>
    </section>

  </main>
</template>

<style scoped>
main {
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

section {
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #ccc;
}
</style>