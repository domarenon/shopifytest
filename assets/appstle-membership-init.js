(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0622/0644/3673/t/4/assets/appstle-membership.js?v=1665672596");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2)",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount_with_comma_separator}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "danielo-gradi-store.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "Lib7lsNVW5zV",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/954826905\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"test-membership-plan-1\":[\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1078845407385\\\",\\\"discountMessage\\\":\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\",\\\"discountUrl\\\":\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"vip-test-code-1\\\",\\\"discountPercentage\\\":\\\"50.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1078845407385\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"vip-test-code-1\\\"}}]},\\\"createdAt\\\":\\\"2022-10-13T15:25:14Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"AllDiscountItems\\\",\\\"allItems\\\":true},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.5},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSavedSearches\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"50% off entire order\\\",\\\"startsAt\\\":\\\"2022-10-13T15:25:14Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\",\\\"title\\\":\\\"vip-test-code-1\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\"}]}}},\\\"membershipName\\\":\\\"Test Membership Plan 1\\\"}]\"]}",
        "membershipByCustomerTag": "{\"test-membership-plan-1\":[{\"id\":3433,\"shop\":\"danielo-gradi-store.myshopify.com\",\"groupName\":\"Test Membership Plan 1\",\"subscriptionId\":306380953,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":306380953,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":3,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":3,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"3 Months Membership Program\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/954826905\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":null,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/954826905\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"Test Membership Plan 1\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":7548740763801,\\\\\\\"title\\\\\\\":\\\\\\\"Test Membership Plan 1\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"test-membership-plan-1\\\",\\\"orderTag\\\":\\\"test-membership-plan-1\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"1078845407385\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"vip-test-code-1\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"50.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":{\\\\\\\"codeDiscountNode\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeNode\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/DiscountCodeNode\/1078845407385\\\\\\\",\\\\\\\"codeDiscount\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeBasic\\\\\\\",\\\\\\\"appliesOncePerCustomer\\\\\\\":false,\\\\\\\"asyncUsageCount\\\\\\\":0,\\\\\\\"codeCount\\\\\\\":1,\\\\\\\"codes\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCode\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"vip-test-code-1\\\\\\\"}}]},\\\\\\\"createdAt\\\\\\\":\\\\\\\"2022-10-13T15:25:14Z\\\\\\\",\\\\\\\"customerGets\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerGets\\\\\\\",\\\\\\\"items\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"AllDiscountItems\\\\\\\",\\\\\\\"allItems\\\\\\\":true},\\\\\\\"value\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountPercentage\\\\\\\",\\\\\\\"percentage\\\\\\\":0.5},\\\\\\\"appliesOnOneTimePurchase\\\\\\\":true,\\\\\\\"appliesOnSubscription\\\\\\\":true},\\\\\\\"customerSelection\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerSavedSearches\\\\\\\"},\\\\\\\"endsAt\\\\\\\":null,\\\\\\\"shortSummary\\\\\\\":\\\\\\\"50% off entire order\\\\\\\",\\\\\\\"startsAt\\\\\\\":\\\\\\\"2022-10-13T15:25:14Z\\\\\\\",\\\\\\\"status\\\\\\\":\\\\\\\"ACTIVE\\\\\\\",\\\\\\\"summary\\\\\\\":\\\\\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"vip-test-code-1\\\\\\\",\\\\\\\"usageLimit\\\\\\\":null,\\\\\\\"shareableUrls\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":null,\\\\\\\"targetType\\\\\\\":\\\\\\\"HOME\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Homepage\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\\\\\"}]}}},\\\\\\\"membershipName\\\\\\\":\\\\\\\"Test Membership Plan 1\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"7548740763801\",\"variantIds\":\"\",\"variantProductIds\":\"\",\"customerTag\":\"test-membership-plan-1\",\"orderTag\":\"test-membership-plan-1\",\"rulesJson\":\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1078845407385\\\",\\\"discountMessage\\\":\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\",\\\"discountUrl\\\":\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"vip-test-code-1\\\",\\\"discountPercentage\\\":\\\"50.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1078845407385\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"vip-test-code-1\\\"}}]},\\\"createdAt\\\":\\\"2022-10-13T15:25:14Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"AllDiscountItems\\\",\\\"allItems\\\":true},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.5},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSavedSearches\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"50% off entire order\\\",\\\"startsAt\\\":\\\"2022-10-13T15:25:14Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"50% off entire order \u2022 For Appstle - Test Membership Plan 1 customers\\\",\\\"title\\\":\\\"vip-test-code-1\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/danielo-gradi-store.myshopify.com\/discount\/vip-test-code-1\\\"}]}}},\\\"membershipName\\\":\\\"Test Membership Plan 1\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2278842892441\"}]}",
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
