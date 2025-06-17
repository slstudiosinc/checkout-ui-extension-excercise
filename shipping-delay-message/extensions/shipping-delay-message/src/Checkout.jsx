import {
  reactExtension,
  Banner,
  BlockStack,
  Text
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {

  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <Banner title="shipping-delay-message">
          Shipping Delay Message goes here
      </Banner>
    </BlockStack>
  );
}
