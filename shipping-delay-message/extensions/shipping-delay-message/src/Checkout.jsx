import {
  reactExtension,
  BlockStack,
  Banner,
  Text,
  useApi,
  useMetafields,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const { lines } = useApi();

  return (
    <BlockStack>
      {lines.current.map((line) => {
        const metafields = useMetafields({
          ownerType: "PRODUCT",
          ownerId: line.merchandise.product.id,
          namespace: "custom",
          key: "shipping_delay_message",
        });

        console.log(
          `Metafields for product ${line.merchandise.product.id}:`,
          metafields
        );

        let metafieldValue;
        if (Array.isArray(metafields) && metafields.length > 0) {
          metafieldValue = metafields[0].value;
        } else {
          metafieldValue = "No shipping delay message.";
        }

        return (
          <Banner key={line.id} title="Shipping Delay">
            <Text>{metafieldValue}</Text>
          </Banner>
        );
      })}
    </BlockStack>
  );
}
