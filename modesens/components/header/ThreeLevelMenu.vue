<template>
  <div>
    <ul class="d-flex nav-pc-menu">
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(1)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a href="/">{{ $t('WOMEN') }}</a>
        <ul
          v-if="firstLevelIndex===1"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/clothing/">{{ $t('CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/clothing/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-WomenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/"
                      data-ga-click="headerNavClothing-WomenCloth">{{ $t('ALL CLOTHING') }}</a></li>
                    <li><a
                      href="/product/women/clothing/beachwear/"
                      data-ga-click="headerNavClothing-WomenBeachwear">{{ $t('BEACHWEAR') }}</a></li>
                    <li><a
                      href="/product/women/clothing/dresses/"
                      data-ga-click="headerNavClothing-WomenDress">{{ $t('DRESSES') }}</a></li>
                    <li><a
                      href="/product/women/clothing/tops/"
                      data-ga-click="headerNavClothing-WomenTops">{{ $t('TOPS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/skirts/"
                      data-ga-click="headerNavClothing-WomenSkirts">{{ $t('SKIRTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jeans/"
                      data-ga-click="headerNavClothing-WomenJeans">{{ $t('JEANS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/pants/"
                      data-ga-click="headerNavClothing-WomenPants">{{ $t('PANTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jumpsuits/"
                      data-ga-click="headerNavClothing-WomenJumpsuits">{{ $t('JUMPSUITS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/shorts/"
                      data-ga-click="headerNavClothing-WomenShorts">{{ $t('SHORTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/coats/"
                      data-ga-click="headerNavClothing-WomenCoats">{{ $t('COATS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jackets/"
                      data-ga-click="headerNavClothing-WomenJackets">{{ $t('JACKETS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/knitwear/"
                      data-ga-click="headerNavClothing-WomenKnitwear">{{ $t('KNITWEAR') }}</a></li>
                    <li><a
                      href="/product/women/clothing/lingerie/"
                      data-ga-click="headerNavClothing-WomenLingerie">{{ $t('LINGERIE') }}</a></li>
                    <li><a
                      href="/product/women/clothing/hosiery/"
                      data-ga-click="headerNavClothing-WomenHosiery">{{ $t('HOSIERY') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/clothing/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavClothing-WomenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a href="/collection/modesens-fab-fur-and-shearling-409220/">{{ $t('FUR/SHEARLING') }}</a></li>
                    <li><a href="/collection/modesens-sweater-weather-410014/">{{ $t('SWEATERS ') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-puffed-up-414558/">{{ $t('PUFFER/OVERSIZED OUTERWEAR') }}</a></li>
                    <li><a href="/collection/modesens-denim-for-days-415377/">{{ $t('DENIM ') }}</a></li>
                    <li><a href="/collection/modesens-transition-to-cooler-weather-396218/">{{ $t('OUTFIT MAKING LAYERS') }}</a></li>
                    <li><a href="/collection/modesens-up-our-sleeve%E2%80%94unique-sleeves-collection-385192/">{{ $t('SPECIAL SLEEVES') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/acne-studios-women/">ACNE STUDIOS</a></li>
                    <li><a href="/saint-laurent-women-clothing/">SAINT LAURENT</a></li>
                    <li><a href="/gucci-women-clothing/">GUCCI</a></li>
                    <li><a href="dolce-%2526-gabbana-women-clothing/">DOLCE & GABBANA</a></li>
                    <li><a href="/prada-women-clothing/">PRADA</a></li>
                    <li><a href="/givenchy-women-clothing/">GIVENCHY</a></li>
                    <li><a href="/vetements-women-clothing/">VETEMENTS</a></li>
                    <li><a href="/alexander-mcqueen-women-accessories/">ALEXANDER MCQUEEN</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="product/women/clothing/jackets/#page=1&category=c&subcategory=Jackets%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_f_j.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(1)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/bags/">{{ $t('BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/bags/?orderby=-found_datetime"
                      data-ga-click="headerNavBags-WomenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/bags/"
                      data-ga-click="headerNavBags-WomenAll">{{ $t('ALL BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/backpacks/"
                      data-ga-click="headerNavBags-WomenBackpacks">{{ $t('BACKPACKS') }}</a></li>
                    <li><a
                      href="/product/women/bags/clutches/"
                      data-ga-click="headerNavBags-WomenClutches">{{ $t('CLUTCHES') }}</a></li>
                    <li><a
                      href="/product/women/bags/satchels/"
                      data-ga-click="headerNavBags-WomenSatchels">{{ $t('SATCHELS') }}</a></li>
                    <li><a
                      href="/product/women/bags/totes/"
                      data-ga-click="headerNavBags-WomenTotes">{{ $t('TOTES') }}</a></li>
                    <li><a
                      href="/product/women/bags/crossbody%20bags/"
                      data-ga-click="headerNavBags-WomenCrossbody">{{ $t('CROSSBODY BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/shoulder%20bags/"
                      data-ga-click="headerNavBags-WomenShoulder">{{ $t('SHOULDER BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/travel%20bags/"
                      data-ga-click="headerNavBags-WomenTravel">{{ $t('TRAVEL BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/baby%20bags/"
                      data-ga-click="headerNavBags-WomenBaby">{{ $t('BABY BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/belt%20bags/"
                      data-ga-click="headerNavBags-WomenBelt">{{ $t('BELT BAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/wallets/"
                      data-ga-click="headerNavBags-Wallet">{{ $t('WALLETS') }}</a></li>
                    <li><a
                      href="/product/women/bags/bag%20accessories/"
                      data-ga-click="headerNavBags-WomenBagAccessories">{{ $t('BAG ACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/bags/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavBags-WomenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-hands-free-393706/">{{ $t('BELT BAGS ') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('DATE NIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('LOGO MANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-women-bags/">GUCCI</a></li>
                    <li><a href="/saint-laurent-women-bags/">SAINT LAURENT</a></li>
                    <li><a href="/chlo%c3%89-women-bags/">CHLOÉ</a></li>
                    <li><a href="/prada-women-bags/">PRADA</a></li>
                    <li><a href="/miu-miu-women-bags/">MIU MIU</a></li>
                    <li><a href="/j.w.anderson-women-bags/">J.W.ANDERSON </a></li>
                    <li><a href="/loewe-women-bags/">LOEWE</a></li>
                    <li><a href="/fendi-women-bags/">FENDI</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('BELT BAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/bags/belt%20bags/#page=1&category=b&subcategory=Belt%20Bags%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_f_b.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(2)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/shoes/">{{ $t('SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/shoes/?orderby=-found_datetime"
                      data-ga-click="headerNavShoes-WomenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/"
                      data-ga-click="headerNavShoes-WomenAll">{{ $t('ALL SHOES') }}</a></li>
                    <li><a
                      href="/product/women/shoes/boots/"
                      data-ga-click="headerNavShoes-WomenBoots">{{ $t('BOOTS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/flats/"
                      data-ga-click="headerNavShoes-WomenFlats">{{ $t('FLATS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/pumps/"
                      data-ga-click="headerNavShoes-WomenPumps">{{ $t('PUMPS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/sandals/"
                      data-ga-click="headerNavShoes-WomenSandals">{{ $t('SANDALS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/sneakers/"
                      data-ga-click="headerNavShoes-WomenSneakers">{{ $t('SNEAKERS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/loafers/"
                      data-ga-click="headerNavShoes-WomenLoafers">{{ $t('LOAFERS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/platforms/"
                      data-ga-click="headerNavShoes-WomenPlatforms">{{ $t('PLATFORMS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/wedges/"
                      data-ga-click="headerNavShoes-WomenWedges">{{ $t('WEDGES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/shoes/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavShoes-WomenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-the-season%2527s-newest-trainers-388623/">{{ $t('NEW SEASON TRAINERS') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('DATE NIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('LOGO MANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/christian-louboutin-women-shoes/">CHRISTIAN LOUBOUTIN</a></li>
                    <li><a href="/nicholas-kirkwood-women-shoes/">NICHOLAS KIRKWOOD</a></li>
                    <li><a href="/gianvito-rossi-women-shoes/">GIANVITO ROSSI</a></li>
                    <li><a href="/roger-vivier-women-shoes/">ROGER VIVIER</a></li>
                    <li><a href="/rene-caovilla-women-shoes/">RENE CAOVILLA</a></li>
                    <li><a href="/manolo-blahnik-women-shoes/">MANOLO BLAHNIK</a></li>
                    <li><a href="/aquazzura-women-shoes/">AQUAZZURA</a></li>
                    <li><a href="/jimmy-choo-women-shoes/">JIMMY CHOO</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('PUMPS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/shoes/pumps/#page=1&category=s&subcategory=Pumps%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_f_s.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(3)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/accessories/">{{ $t('ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/accessories/?orderby=-found_datetime"
                      data-ga-click="headerNavAccessories-WomenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/"
                      data-ga-click="headerNavAccessories-WomenAll">{{ $t('ALL ACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/jewelry/"
                      data-ga-click="headerNavAccessories-WomenJewelry">{{ $t('JEWELRY') }}</a></li>
                    <li><a
                      href="/product/women/accessories/watches/"
                      data-ga-click="headerNavAccessories-WomenWatch">{{ $t('WATCHES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/sunglasses/"
                      data-ga-click="headerNavAccessories-WomenSunglasses">{{ $t('SUNGLASSES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/opticals/"
                      data-ga-click="headerNavAccessories-WomenOpticals">{{ $t('OPTICALS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/hats/"
                      data-ga-click="headerNavAccessories-WomenHat">{{ $t('HATS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/belts/"
                      data-ga-click="headerNavAccessories-WomenBelt">{{ $t('BELTS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/gloves/"
                      data-ga-click="headerNavAccessories-WomenGlove">{{ $t('GLOVES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/scarves/"
                      data-ga-click="headerNavAccessories-WomenScarf">{{ $t('SCARVES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/wallets/"
                      data-ga-click="headerNavAccessories-WomenWallet">{{ $t('WALLETS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/keychains/"
                      data-ga-click="headerNavAccessories-WomenKeychain">{{ $t('KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/tie/"
                      data-ga-click="headerNavAccessories-WomenTie">{{ $t('TIE') }}</a></li>
                    <li><a
                      href="/product/women/accessories/homeware/"
                      data-ga-click="headerNavAccessories-WomenHomeware">{{ $t('HOMEWARE') }}</a></li>
                    <li><a
                      href="/product/women/accessories/technology/"
                      data-ga-click="headerNavAccessories-WomenTech">{{ $t('TECHONLOGY') }}</a></li>
                    <li><a
                      href="/product/women/accessories/hair%20accessories/"
                      data-ga-click="headerNavAccessories-WomenHair">{{ $t('HAIR ACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/sport%20accessories/"
                      data-ga-click="headerNavAccessories-WomenSport">{{ $t('SPORT ACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/bag%20accessories/"
                      data-ga-click="headerNavAccessories-WomenBagAccessories">{{ $t('BAG ACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/accessories/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavAccessories-WomenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-24-karat-magic-398873/">{{ $t('DAYTIME BLING') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('DATE NIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('LOGO MANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/dolce-%2526-gabbana-women-accessories/">DOLCE & GABBANA</a></li>
                    <li><a href="/gucci-women-accessories/">GUCCI</a></li>
                    <li><a href="/miu-miu-women-accessories/">MIU MIU</a></li>
                    <li><a href="/lanvin-women-accessories/">LANVIN</a></li>
                    <li><a href="/saint-laurent-women-accessories/">SAINT LAURENT</a></li>
                    <li><a href="/fendi-women-accessories/">FENDI</a></li>
                    <li><a href="/alexander-mcqueen-women-accessories/">ALEXANDER MCQUEEN</a></li>
                    <li><a href="/loewe-women-accessories/">LOEWE</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('JEWELRY') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/accessories/jewelry/#page=1&category=a">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_f_jy.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li v-if="$i18n.country==='cn'">
            <a
              v-b-modal.noticemodal1
              href="javascript:;">{{ $t('BEAUTY') }}</a>
          </li>
          <li
            v-else
            class="dropdown"
            @mouseover="changeSecondLevelIndex(4)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/beauty/">{{ $t('BEAUTY') }}</a>
            <ul
              v-if="secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/beauty/?orderby=-found_datetime"
                      data-ga-click="headerNavBeauty-WomenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/"
                      data-ga-click="headerNavBeauty-WomenAllbeauty">{{ $t('ALL BEAUTY') }}</a></li>
                    <li><a
                      href="/product/women/beauty/bath & body/"
                      data-ga-click="headerNavBeauty-WomenBath">{{ $t('BATH & BODY') }}</a></li>
                    <li><a
                      href="/product/women/beauty/beauty sets/"
                      data-ga-click="headerNavBeauty-WomenSets">{{ $t('BEAUTY SETS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/cosmetics cases/"
                      data-ga-click="headerNavBeauty-WomenCosmentics">{{ $t('COSMETICS CASES') }}</a></li>
                    <li><a
                      href="/product/women/beauty/fragrance/"
                      data-ga-click="headerNavBeauty-WomenFragrace">{{ $t('FRAGRANCE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/haircare/"
                      data-ga-click="headerNavBeauty-WomenHaircare">{{ $t('HAIRCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/makeup/"
                      data-ga-click="headerNavBeauty-WomenMakeup">{{ $t('MAKEUP') }}</a></li>
                    <li><a
                      href="/product/women/beauty/nails/"
                      data-ga-click="headerNavBeauty-WomenNails">{{ $t('NAILS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/skincare/"
                      data-ga-click="headerNavBeauty-WomenSkincare">{{ $t('SKINCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/suncare/"
                      data-ga-click="headerNavBeauty-WomenSun">{{ $t('SUNCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/toothcare/"
                      data-ga-click="headerNavBeauty-WomenTooth">{{ $t('TOOTHCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/tools & devices/"
                      data-ga-click="headerNavBeauty-WomenTools">{{ $t('TOOLS & DEVICES') }}</a></li>
                    <li><a
                      href="/product/women/beauty/wellness/"
                      data-ga-click="headerNavBeauty-WomenWellness">{{ $t('WELLNESS') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/beauty/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavBeauty-WomenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/dolce-%2526-gabbana-women-beauty/">DOLCE & GABBANA</a></li>
                    <li><a href="/gucci-women-beauty/">GUCCI</a></li>
                    <li><a href="/miu-miu-women-beauty/">MIU MIU</a></li>
                    <li><a href="/lanvin-women-beauty/">LANVIN</a></li>
                    <li><a href="/saint-laurent-women-beauty/">SAINT LAURENT</a></li>
                    <li><a href="/fendi-women-beauty/">FENDI</a></li>
                    <li><a href="/alexander-mcqueen-women-beauty/">ALEXANDER MCQUEEN</a></li>
                    <li><a href="/loewe-women-beauty/">LOEWE</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('SKINCARE') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/beauty/skincare/#page=1&category=e&subcategory=Skincare%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_f_ski.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(5)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/sale/?orderby=-betterprice_time">{{ $t('SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/women/clothing/">{{ $t('CLOTHING') }}</a></li>
                    <li><a href="/product/women/bags/">{{ $t('BAGS') }}</a></li>
                    <li><a href="/product/women/shoes/">{{ $t('SHOES') }}</a></li>
                    <li><a href="/product/women/bags/bag%20accessories/">{{ $t('ACCESSORIES') }}</a></li>
                    <li><a href="/product/women/beauty/">{{ $t('BEAUTY') }}</a></li>
                  </ul>
                  <div><a
                    target="_blank"
                    href="/product/women/sale/">{{ $t('SHOP ALL SALE') }}></a></div>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-women/">{{ $t('GUCCI') }}</a></li>
                    <li><a href="/saint-laurent-women/">{{ $t('SAINT LAURENT') }}</a></li>
                    <li><a href="/valentino-women/">{{ $t('VALENTINO') }}</a></li>
                    <li><a href="/dolce-%2526-gabbana-women/">{{ $t('DOLCE & GABBANA') }}</a></li>
                    <li><a href="/balenciaga-women-bags/">{{ $t('BALENCIAGA') }}</a></li>
                    <li><a href="/burberry-women/">{{ $t('BURBERRY') }}</a></li>
                    <li><a href="/prada-women/">{{ $t('PRADA') }}</a></li>
                    <li><a href="/givenchy-women/">{{ $t('GIVENCHY') }}</a></li>
                    <li><a href="/off-white-women-clothing/">{{ $t('OFF-WHITE') }}</a></li>
                    <li><a href="/acne-studios-women/">{{ $t('ACNE STUDIOS') }}</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div class="women_jackets">{{ $t('nav.WOMENSJACKETS') }}</div>
                  <div><a href="/product/women/clothing/jackets/?orderby=-betterprice_time"><img
                    class="lazyload"
                    data-src="https://mds0.com/static/img/20180905SALE.png"></a></div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(2)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a href="/">{{ $t('MEN') }}</a>
        <ul
          v-if="firstLevelIndex===2"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/clothing/"
              data-ga-click="headerNavClothing-Open">{{ $t('CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/clothing/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-MenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/"
                      data-ga-click="headerNavClothing-MenCloth">{{ $t('ALL CLOTHING') }}</a></li>
                    <li><a
                      href="/product/men/clothing/beachwear/"
                      data-ga-click="headerNavClothing-MenBeachwear">{{ $t('BEACHWEAR') }}</a></li>
                    <li><a
                      href="/product/men/clothing/tops/"
                      data-ga-click="headerNavClothing-MenTops">{{ $t('TOPS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/jeans/"
                      data-ga-click="headerNavClothing-MenJeans">{{ $t('JEANS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/pants/"
                      data-ga-click="headerNavClothing-MenPants">{{ $t('PANTS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/shorts/"
                      data-ga-click="headerNavClothing-MenShorts">{{ $t('SHORTS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/coats/"
                      data-ga-click="headerNavClothing-MenCoats">{{ $t('COATS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/jackets/"
                      data-ga-click="headerNavClothing-MenJackets">{{ $t('JACKETS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/knitwear/"
                      data-ga-click="headerNavClothing-MenKnitwear">{{ $t('KNITWEAR') }}</a></li>
                    <li><a
                      href="/product/men/clothing/suits/"
                      data-ga-click="headerNavClothing-MenSuits">{{ $t('SUITS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/underwear%20%26%20socks/"
                      data-ga-click="headerNavClothing-MenUnderwear">{{ $t('UNDERWEAR & SOCKS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/loungewear/"
                      data-ga-click="headerNavClothing-MenLoungewear">{{ $t('LOUNGEWEAR') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/men/clothing/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavClothing-MenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-fab-fur-and-shearling-409219/">{{ $t('FUR/SHEARLING') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-puffed-up-414557/">{{ $t('PUFFER/OVERSIZED OUTERWEAR') }}</a></li>
                    <li><a href="/collection/modesens-sweater-weather-410013/">{{ $t('SWEATERS ') }}</a></li>
                    <li><a href="/collection/modesens-top-this%E2%80%94-fresh-picksfor-the-new-season-385217/">{{ $t('NEW SEASON SHIRTS') }}</a></li>
                    <li><a href="/collection/modesens-laidback-pants%E2%80%94on-trend-trousers%2C-track-pants-and-joggers-380121/">{{ $t('EASY PANTS') }}</a></li>
                    <li><a href="/collection/modesens-denim-on-denim%E2%80%94hottest-denim-pieces-373887/">{{ $t('DENIM  ') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-men-clothing/">GUCCI</a></li>
                    <li><a href="/givenchy-men-clothing/">GIVENCHY</a></li>
                    <li><a href="/saint-laurent-men-clothing/">SAINT LAURENT</a></li>
                    <li><a href="/dolce-%2526-gabbana-men-clothing/">DOLCE &amp; GABBANA</a></li>
                    <li><a href="/valentino-men-clothing/">VALENTINO</a></li>
                    <li><a href="/neil-barrett-men-clothing/">NEIL BARRETT</a></li>
                    <li><a href="/alexander-mcqueen-men-clothing/">ALEXANDER MCQUEEN</a></li>
                    <li><a href="/thom-browne-men-clothing/">THOM BROWNE</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/clothing/jackets/#page=1&category=c&subcategory=Jackets%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_m_j.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(1)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/bags/"
              data-ga-click="headerNavBags-Open">{{ $t('BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/bags/?orderby=-found_datetime"
                      data-ga-click="headerNavBags-MenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/bags/"
                      data-ga-click="headerNavBags-MenAll">{{ $t('ALL BAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/backpacks/"
                      data-ga-click="headerNavBags-MenBackpacks">{{ $t('BACKPACKS') }}</a></li>
                    <li><a
                      href="/product/men/bags/satchels/"
                      data-ga-click="headerNavBags-MenSatchels">{{ $t('SATCHELS') }}</a></li>
                    <li><a
                      href="/product/men/bags/totes/"
                      data-ga-click="headerNavBags-MenTotes">{{ $t('TOTES') }}</a></li>
                    <li><a
                      href="/product/men/bags/crossbody%20bags/"
                      data-ga-click="headerNavBags-MenCrossbody">{{ $t('CROSSBODY BAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/shoulder%20bags/"
                      data-ga-click="headerNavBags-MenShoulder">{{ $t('SHOULDER BAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/travel%20bags/"
                      data-ga-click="headerNavBags-MenTravel">{{ $t('TRAVEL BAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/belt%20bags/"
                      data-ga-click="headerNavBags-MenBelt">{{ $t('BELT BAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/wallets/"
                      data-ga-click="headerNavBags-Wallet">{{ $t('WALLETS') }}</a></li>
                    <li><a
                      href="/product/men/bags/keychain/"
                      data-ga-click="headerNavBags-MenKeychain">{{ $t('KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/men/bags/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavBags-MenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-hands-free-393705/">{{ $t('BELT BAG') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('LOGO MANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('DATE NIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/burberry-men-bags/">BURBERRY</a></li>
                    <li><a href="/bottega-veneta-men-bags/">BOTTEGA VENETA</a></li>
                    <li><a href="/givenchy-men-bags/">GIVENCHY</a></li>
                    <li><a href="/saint-laurent-men-bags/">SAINT LAURENT</a></li>
                    <li><a href="/kenzo-men-bags/">KENZO</a></li>
                    <li><a href="/versace-men-bags/">VERSACE</a></li>
                    <li><a href="/mcm-men-bags/">MCM</a></li>
                    <li><a href="/salvatore-ferragamo-men-bags/">SALVATORE FERRAGAMO</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('BELT BAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/bags/belt%20bags/#page=1&category=b&subcategory=Belt%20Bags%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_m_b.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(2)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/shoes/"
              data-ga-click="headerNavShoes-Open">{{ $t('SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/shoes/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-MenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/"
                      data-ga-click="headerNavShoes-MenAll">{{ $t('ALL SHOES') }}</a></li>
                    <li><a
                      href="/product/men/shoes/boots/"
                      data-ga-click="headerNavShoes-MenBoots">{{ $t('BOOTS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/brogues/"
                      data-ga-click="headerNavShoes-MenBrogues">{{ $t('BROGUES') }}</a></li>
                    <li><a
                      href="/product/men/shoes/loafers/"
                      data-ga-click="headerNavShoes-MenLoafers">{{ $t('LOAFERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/oxford/"
                      data-ga-click="headerNavShoes-MenOxford">{{ $t('OXFORD') }}</a></li>
                    <li><a
                      href="/product/men/shoes/slippers/"
                      data-ga-click="headerNavShoes-MenSlippers">{{ $t('SLIPPERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sandals/"
                      data-ga-click="headerNavShoes-MenSandals">{{ $t('SANDALS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sneakers/"
                      data-ga-click="headerNavShoes-MenSneakers">{{ $t('SNEAKERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavShoes-MenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-you%2527ll-get-a-kick-out-of-this%E2%80%94the-season%2527s-newest-trainers-388618/">{{ $t('NEW SEASON TRAINERS') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('LOGO MANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('DATE NIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/prada-men-shoes/">PRADA</a></li>
                    <li><a href="/givenchy-men-shoes/">GIVENCHY</a></li>
                    <li><a href="/gucci-men-shoes/">GUCCI</a></li>
                    <li><a href="/saint-laurent-men-shoes/">SAINT LAURENT</a></li>
                    <li><a href="/tod%2527s-men-shoes/">TOD'S</a></li>
                    <li><a href="/valentino-men-shoes/">VALENTINO</a></li>
                    <li><a href="/balenciaga-men-shoes/">BALENCIAGA</a></li>
                    <li><a href="/church%2527s-men-shoes/">CHURCH'S</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('SNEAKERS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/shoes/sneakers/#page=1&category=s&subcategory=Sneakers%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_m_s.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(3)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/accessories/"
              data-ga-click="headerNavAccessories-Open">{{ $t('ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/accessories/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-New Arrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/"
                      data-ga-click="headerNavAccessories-MenAll">{{ $t('ALL ACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/jewelry/"
                      data-ga-click="headerNavAccessories-MenJewelry">{{ $t('JEWELRY') }}</a></li>
                    <li><a
                      href="/product/men/accessories/watches/"
                      data-ga-click="headerNavAccessories-MenWatch">{{ $t('WATCHES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/sunglasses/"
                      data-ga-click="headerNavAccessories-MenSunglasses">{{ $t('SUNGLASSES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/opticals/"
                      data-ga-click="headerNavAccessories-MenOpticals">{{ $t('OPTICALS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/belts/"
                      data-ga-click="headerNavAccessories-MenBelt">{{ $t('BELTS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/hats/"
                      data-ga-click="headerNavAccessories-MenHat">{{ $t('HATS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/tie/"
                      data-ga-click="headerNavAccessories-MenTie">{{ $t('TIE') }}</a></li>
                    <li><a
                      href="/product/men/accessories/wallets/"
                      data-ga-click="headerNavAccessories-MenWallet">{{ $t('WALLETS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/keychains/"
                      data-ga-click="headerNavAccessories-MenKeychain">{{ $t('KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/gloves/"
                      data-ga-click="headerNavAccessories-MenGloves">{{ $t('GLOVES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/scarves/"
                      data-ga-click="headerNavAccessories-MenScarf">{{ $t('SCARVES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/technology/"
                      data-ga-click="headerNavAccessories-MenTech">{{ $t('TECHONLOGY') }}</a></li>
                    <li><a
                      href="/product/men/accessories/bag%20accessories/"
                      data-ga-click="headerNavAccessories-MenBagAccessories">{{ $t('BAG ACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavAccessories-MenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('SHOP BY COLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-finishing-touches-398872/">{{ $t('MENS ACCESSORIES') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('LOGO MANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('PATTY LOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('DATE NIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/fendi-men-accessories/">FENDI</a></li>
                    <li><a href="/gucci-men-accessories/">GUCCI</a></li>
                    <li><a href="/bottega-veneta-men-accessories/">BOTTEGA VENETA</a></li>
                    <li><a href="/loewe-men-accessories/">LOEWE</a></li>
                    <li><a href="/dsquared2-men-accessories/">DESQUARED2</a></li>
                    <li><a href="/alexander-mcqueen-men-accessories/">ALEXANDER MCQUEEN</a></li>
                    <li><a href="/paul-smith-men-accessories/">PAUL SMITH</a></li>
                    <li><a href="/burberry-men-accessories/">BURBERRY</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('HATS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/accessories/hats/#page=1&category=a&subcategory=Hats%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_m_h.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li v-if="$i18n.country==='cn'">
            <a
              v-b-modal.noticemodal1
              href="javascript:;">{{ $t('GROOMING') }}</a>
          </li>
          <li
            v-else
            @mouseover="changeSecondLevelIndex(4)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/grooming/"
              data-ga-click="headerNavAccessories-Open">{{ $t('GROOMING') }}</a>
            <ul
              v-if="secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/grooming/?orderby=-found_datetime"
                      data-ga-click="headerNavBeauty-MenNewArrivals">{{ $t('NEW ARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/grooming/"
                      data-ga-click="headerNavBeauty-MenAll">{{ $t('ALL GROOMING') }}</a></li>
                    <li><a
                      href="/product/men/grooming/bath & body/"
                      data-ga-click="headerNavBeauty-MenBath & Body">{{ $t('BATH & BODY') }}</a></li>
                    <li><a
                      href="/product/men/grooming/fragrance/"
                      data-ga-click="headerNavBeauty-MenFragrance">{{ $t('FRAGRANCE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/haircare/"
                      data-ga-click="headerNavBeauty-MenHaircare">{{ $t('HAIRCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/shave/"
                      data-ga-click="headerNavBeauty-MenShave">{{ $t('SHAVE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/skincare/"
                      data-ga-click="headerNavBeauty-MenSkincare">{{ $t('SKINCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/suncare/"
                      data-ga-click="headerNavBeauty-MenSuncare">{{ $t('SUNCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/toothcare/"
                      data-ga-click="headerNavBeauty-MenToothcare">{{ $t('TOOTHCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/tools & devices/"
                      data-ga-click="headerNavBeauty-MenTools & Devices">{{ $t('TOOLS & DEVICES') }}</a></li>
                    <li><a
                      href="/product/men/grooming/wellness/"
                      data-ga-click="headerNavBeauty-MenWellness">{{ $t('WELLNESS') }}</a></li>
                    <li><a
                      href="/product/men/grooming/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavBeauty-MenSale">{{ $t('SALE') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/dolce-%2526-gabbana-men-grooming/">DOLCE & GABBANA</a></li>
                    <li><a href="/gucci-men-grooming/">GUCCI</a></li>
                    <li><a href="/aesop-men-grooming/">AESOP</a></li>
                    <li><a href="/lanvin-men-grooming/">LANVIN</a></li>
                    <li><a href="/saint-laurent-men-grooming/">SAINT LAURENT</a></li>
                    <li><a href="/fendi-men-grooming/">FENDI</a></li>
                    <li><a href="/alexander-mcqueen-men-grooming/">ALEXANDER MCQUEEN</a></li>
                    <li><a href="/loewe-men-grooming/">LOEWE</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div>{{ $t('FRAGRANCE') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/grooming/#page=1&category=e&subcategory=Fragrance%3B">
                      <img
                        class="lazyload"
                        data-src="https://mds0.com/static/img/20180930navi_m_ski.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(5)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              href="/product/men/sale/?orderby=-betterprice_time"
              data-ga-click="headerNavSale-Open">{{ $t('SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/men/clothing/">{{ $t('CLOTHING') }}</a></li>
                    <li><a href="/product/men/bags/">{{ $t('BAGS') }}</a></li>
                    <li><a href="/product/men/shoes/">{{ $t('SHOES') }}</a></li>
                    <li><a href="/product/men/bags/bag%20accessories/">{{ $t('ACCESSORIES') }}</a></li>
                    <li><a href="/product/men/grooming/">{{ $t('GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/men/sale/">{{ $t('SHOP ALL SALE') }}></a></div>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-men/">{{ $t('GUCCI') }}</a></li>
                    <li><a href="/saint-laurent-men/">{{ $t('SAINT LAURENT') }}</a></li>
                    <li><a href="/valentino-men/">{{ $t('VALENTINO') }}</a></li>
                    <li><a href="/balenciaga-men-bags/">{{ $t('BALENCIAGA') }}</a></li>
                    <li><a href="/burberry-men/">{{ $t('BURBERRY') }}</a></li>
                    <li><a href="/vetements-men-clothing/">{{ $t('VETEMENTS') }}</a></li>
                    <li><a href="/givenchy-men/">{{ $t('GIVENCHY') }}</a></li>
                    <li><a href="/off-white-men-clothing/">{{ $t('OFF-WHITE') }}</a></li>
                    <li><a href="/acne-studios-men/">{{ $t('ACNE STUDIOS') }}</a></li>
                    <li><a href="/alexander-mcqueen-men/">{{ $t('ALEXANDERMCQUEEN') }}</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div class="women_jackets">{{ $t('MENSJACKETS') }}</div>
                  <div><a href="/product/men/clothing/jackets/?orderby=-betterprice_time">
                    <img
                      class="lazyload"
                      data-src="https://mds0.com/static/img/20180905SALE.png">
                  </a></div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(3)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a href="/">{{ $t('OFFERS') }}</a>
        <ul
          v-if="firstLevelIndex===3"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/coupons/">{{ $t('COUPONS') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="coupons_left">
                  <div class="coupons_list"/>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/coupons/">{{ $t('VIEW ALL COUPONS') }}></a></div>
                </div>
                <div class="coupons_right">
                  <div class="menucategory-title">{{ $t('FEATURED OFFER') }}</div>
                  <div class="coupons_first"/>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(1)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/women/sale/">{{ $t('WOMENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/women/clothing/">{{ $t('CLOTHING') }}</a></li>
                    <li><a href="/product/women/bags/">{{ $t('BAGS') }}</a></li>
                    <li><a href="/product/women/shoes/">{{ $t('SHOES') }}</a></li>
                    <li><a href="/product/women/bags/bag%20accessories/">{{ $t('ACCESSORIES') }}</a></li>
                    <li><a href="/product/women/beauty/">{{ $t('BEAUTY') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/women/sale/">{{ $t('SHOP ALL SALE') }}></a></div>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-women/">{{ $t('GUCCI') }}</a></li>
                    <li><a href="/saint-laurent-women/">{{ $t('SAINT LAURENT') }}</a></li>
                    <li><a href="/valentino-women/">{{ $t('VALENTINO') }}</a></li>
                    <li><a href="/dolce-%2526-gabbana-women/">{{ $t('DOLCE & GABBANA') }}</a></li>
                    <li><a href="/balenciaga-women-bags/">{{ $t('BALENCIAGA') }}</a></li>
                    <li><a href="/burberry-women/">{{ $t('BURBERRY') }}</a></li>
                    <li><a href="/prada-women/">{{ $t('PRADA') }}</a></li>
                    <li><a href="/givenchy-women/">{{ $t('GIVENCHY') }}</a></li>
                    <li><a href="/off-white-women-clothing/">{{ $t('OFF-WHITE') }}</a></li>
                    <li><a href="/acne-studios-women/">{{ $t('ACNE STUDIOS') }}</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div class="women_jackets">{{ $t('nav.WOMENSJACKETS') }}</div>
                  <div><a href="/product/women/clothing/jackets/?orderby=-betterprice_time"><img
                    class="lazyload"
                    data-src="https://mds0.com/static/img/20180905SALE.png"></a></div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(2)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/product/men/sale/">{{ $t('MENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('SHOP BY CATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/men/clothing/">{{ $t('CLOTHING') }}</a></li>
                    <li><a href="/product/men/bags/">{{ $t('BAGS') }}</a></li>
                    <li><a href="/product/men/shoes/">{{ $t('SHOES') }}</a></li>
                    <li><a href="/product/men/bags/bag%20accessories/">{{ $t('ACCESSORIES') }}</a></li>
                    <li><a href="/product/men/grooming/">{{ $t('GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/men/sale/">{{ $t('SHOP ALL SALE') }}></a></div>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/gucci-men/">{{ $t('GUCCI') }}</a></li>
                    <li><a href="/saint-laurent-men/">{{ $t('SAINT LAURENT') }}</a></li>
                    <li><a href="/valentino-men/">{{ $t('VALENTINO') }}</a></li>
                    <li><a href="/balenciaga-men-bags/">{{ $t('BALENCIAGA') }}</a></li>
                    <li><a href="/burberry-men/">{{ $t('BURBERRY') }}</a></li>
                    <li><a href="/vetements-men-clothing/">{{ $t('VETEMENTS') }}</a></li>
                    <li><a href="/givenchy-men/">{{ $t('GIVENCHY') }}</a></li>
                    <li><a href="/off-white-men-clothing/">{{ $t('OFF-WHITE') }}</a></li>
                    <li><a href="/acne-studios-men/">{{ $t('ACNE STUDIOS') }}</a></li>
                    <li><a href="/alexander-mcqueen-men/">{{ $t('ALEXANDERMCQUEEN') }}</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('POPULAR CATEGORY') }}</div>
                  <div class="women_jackets">{{ $t('nav.MENSJACKETS') }}</div>
                  <div><a href="/product/men/clothing/jackets/?orderby=-betterprice_time"><img
                    class="lazyload"
                    data-src="https://mds0.com/static/img/20180905SALE.png"></a></div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(4)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a href="/">{{ $t('DESIGNERS') }}</a>
        <ul
          v-if="firstLevelIndex===4"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a href="/" >{{ $t('HOT DESIGNERS') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('DESIGNERS') }}</div>
                  <div class="designers_con">
                    <ul class="sub-menu">
                      <li><a href="/gucci-women/">GUCCI</a></li>
                      <li><a href="/dolce-%2526-gabbana-women/">DOLCE & GABBANA</a></li>
                      <li><a href="/burberry-women/">BURBERRY</a></li>
                      <li><a href="stella-mccartney-women">STELLA MCCARTNEY</a></li>
                      <li><a href="/prada-women/">PRADA</a></li>
                      <li><a href="/fendi-women/">FENDI</a></li>
                      <li><a href="/saint-laurent-women/">SAINT LAURENT</a></li>
                      <li><a href="/valentino-women/">VALENTINO </a></li>
                      <li><a href="/givenchy-women/">GIVENCHY</a></li>
                      <li><a href="/christian-louboutin-women/">CHRISTIAN LOUBOUTIN</a></li>
                    </ul>
                  </div>
                  <div class="view-all"><a
                    target="_blank"
                    href="/designers/">{{ $t('VIEW ALL') }}></a></div>
                </div>
                <div class="store-img">
                  <a
                    target="_blank"
                    href="/GUCCI-women/">
                    <img
                      class="lazyload"
                      data-src="https://mds0.com/static/img/mini_header/w_designer.jpg">
                  </a>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(5)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a href="/">{{ $t('COMMUNITY') }}</a>
        <ul
          v-if="firstLevelIndex===5"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <div class="d-flex justify-content-between thirdmenu-wrapper">
            <div class="mmt-hottest">
              <div class="menucategory-title">{{ $t('BEST LOOKS') }}</div>
              <ul class="mmt-wrapper"/>
              <div class="prd-recommend-text">
                <div><a
                  target="_blank"
                  href="/looks/">{{ $t('MORE LOOKS') }}></a></div>
              </div>
            </div>
            <div class="menu-userinfo"/>
            <ul class="rframe_follows">
              <div class="menucategory-title">{{ $t('WHO TO FOLLOW') }}</div>
            </ul>
          </div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstLevelIndex: -1,
      secondLevelIndex: -1
    }
  },
  computed: {
    headerH() {
      return $('.header').height()
    },
    secondmenuStyle() {
      return {
        top: this.headerH + 'px',
        paddingLeft: $('.nav-pc-menu').offset().left + 'px'
      }
    },
    thirdmenuStyle() {
      return {
        top: this.headerH + $('.navbar-secondmenu').height() + 'px'
      }
    }
  },
  mounted() {
    if ($(document).width() > 1199) {
      let headerH = $('.header').height()
      console.log(
        headerH,
        $('.nav-pc-menu').offset().left,
        $('.navbar-secondmenu').height()
      )
      $('.navbar-secondmenu').css({
        top: headerH + 'px',
        'padding-left': $('.nav-pc-menu').offset().left
      })
      $('.navbar-thirdmenu').css({
        top: headerH + $('.navbar-secondmenu').height() + 'px'
      })
    }
  },
  methods: {
    changeFirstLevelIndex(index) {
      this.firstLevelIndex = index
      console.log('firstLevelIndex: ' + this.firstLevelIndex)
    },
    changeSecondLevelIndex(index) {
      this.secondLevelIndex = index
      console.log('secondLevelIndex: ' + this.secondLevelIndex)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common.less';
.nav-pc-menu {
  // display: flex;
  .dropdown {
    display: flex;
    align-items: center;
    margin: 0 30px;
    height: 60px;
  }
  .navbar-secondmenu {
    position: fixed;
    top: 90px;
    left: 0;
    padding: 0 100px;
    width: 100%;
    border-top: @border2;
    border-bottom: @border2;
    height: 60px;
    background: #fff;
  }
  .navbar-thirdmenu {
    position: fixed;
    top: 150px;
    left: 0;
    padding: 0;
    width: 100%;
    border: 0;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 1;
    .thirdmenu-wrapper {
      margin: auto;
      padding: 25px 0;
      max-width: 1200px;
      font-size: 12px;
    }
  }
  .menucategory-title {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 13px;
    color: @fontGray;
  }
  .category-box {
    width: 500px;
  }
  .collection-box {
    width: 220px;
  }
  .designers-box {
    width: 220px;
  }
  .sale-designers-box {
    width: 430px;
  }
  .popular-category {
    width: 260px;
  }
}
.sub-menu {
  height: 320px;
  & > li {
    height: 40px;
  }
}
@media (max-width: 1199px) {
  .nav-pc-menu {
    display: none;
  }
}
</style>
