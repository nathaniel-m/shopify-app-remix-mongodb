const shopQuery = `query {
    shop {
        id
        name
        myshopifyDomain
        email
        plan{
            displayName
            partnerDevelopment
            shopifyPlus
        }
        primaryDomain {
            url
            sslEnabled
        }
        ianaTimezone
        timezoneAbbreviation
        unitSystem
        weightUnit
        currencyCode
    }
  }
`;

export default shopQuery;
