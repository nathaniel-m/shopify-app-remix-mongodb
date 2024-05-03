import { Banner, Layout, Page } from "@shopify/polaris";

import { authenticate } from "../lib/shopify.server";
import checkInitialSetup from "../middleware/checkInitialSetup.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  await checkInitialSetup(request);

  return null;
};

export default function Index() {
  return (
    <>
    <Page
      fullWidth
      title="Remongify | Badges"
      primaryAction={{ content: "Preview on Store" }}
      secondaryAction={{content: "Change Plan"}}
    >
      <Layout>
        <Layout.Section>
          {" "}
          <Banner title="Order archived" onDismiss={() => {}}>
            <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
          </Banner>
        </Layout.Section>
      </Layout>
    </Page>
  </>

  )

}







