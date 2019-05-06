import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
  .add("with text", () => <Button>Youpi tralala</Button>)
  .add("disabled", () => <Button isDisabled={true}>Youpi tralala</Button>);
