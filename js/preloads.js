
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.D-3tW6RD.js","/cdn/shopifycloud/checkout-web/assets/c1/app.B5KAWuJn.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.C8LOAE--.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.By3piXsa.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.XxtwFDK3.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.CcmobX7Z.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.D4nzWsLl.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.CtVfFbNY.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.COdpm6RK.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.DBEhSVDf.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.B0sjUsCC.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.IJIgUXn8.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.Bc1LvuO-.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CFjLTOnd.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DWtQcgX4.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.Bh-VmzV6.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptions.C3vRjAWp.js","/cdn/shopifycloud/checkout-web/assets/c1/usePreselectSpi.B4CS7VqE.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.DJpry0nM.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.C4r3tdmA.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.DaqzvaoP.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index.BmryH_Cp.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BraboIgt.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Dzi9bJuK.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.wnYOUDCT.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DFiUrb6l.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DYH7B_vD.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BD02NT8N.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.CZ33y7Va.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DjnS_Dr1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptions.PpwvcyQt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0775/8846/3868/files/Checkout_logo_1_x320.png?v=1762285791"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  