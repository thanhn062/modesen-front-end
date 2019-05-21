<template>
  <div>
    <ul class="d-flex nav-pc-menu">
      <li
        class="dropdown"
        data-ga-enter="nav-WOMEN--"
        @mouseenter="changeFirstLevelIndex(1)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===1 || (firstLevelIndex===-1 && gender==='women') }"
          href="/"
          data-ga-click="nav-WOMEN--">{{ $t('common.WOMEN') }}</a>
        <ul
          v-if="firstLevelIndex===1"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            data-ga-enter="navWomen-CLOTHING--"
            @mouseenter="changeSecondLevelIndex(0)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/shop-women-clothing/"
              data-ga-click="navWomen-CLOTHING--">{{ $t('nav.CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_c"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-women-clothing/?orderby=-found_datetime"
                      data-ga-click="navClothing-WomenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-women-clothing/"
                      data-ga-click="navClothing-WomenCloth--">{{ $t('nav.ALLCLOTHING') }}</a></li>
                    <li><a
                      href="/shop-women-beachwear/"
                      data-ga-click="navClothing-WomenBeachwear--">{{ $t('nav.BEACHWEAR') }}</a></li>
                    <li><a
                      href="/shop-women-dresses/"
                      data-ga-click="navClothing-WomenDress--">{{ $t('nav.DRESSES') }}</a></li>
                    <li><a
                      href="/shop-women-tops/"
                      data-ga-click="navClothing-WomenTops--">{{ $t('nav.TOPS') }}</a></li>
                    <li><a
                      href="/shop-women-skirts/"
                      data-ga-click="navClothing-WomenSkirts--">{{ $t('nav.SKIRTS') }}</a></li>
                    <li><a
                      href="/shop-women-jeans/"
                      data-ga-click="navClothing-WomenJeans--">{{ $t('nav.JEANS') }}</a></li>
                    <li><a
                      href="/shop-women-pants/"
                      data-ga-click="navClothing-WomenPants--">{{ $t('nav.PANTS') }}</a></li>
                    <li><a
                      href="/shop-women-jumpsuits/"
                      data-ga-click="navClothing-WomenJumpsuits--">{{ $t('nav.JUMPSUITS') }}</a></li>
                    <li><a
                      href="/shop-women-shorts/"
                      data-ga-click="navClothing-WomenShorts--">{{ $t('nav.SHORTS') }}</a></li>
                    <li><a
                      href="/shop-women-coats/"
                      data-ga-click="navClothing-WomenCoats--">{{ $t('nav.COATS') }}</a></li>
                    <li><a
                      href="/shop-women-jackets/"
                      data-ga-click="navClothing-WomenJackets--">{{ $t('nav.JACKETS') }}</a></li>
                    <li><a
                      href="/shop-women-knitwear/"
                      data-ga-click="navClothing-WomenKnitwear--">{{ $t('nav.KNITWEAR') }}</a></li>
                    <li><a
                      href="/shop-women-lingerie/"
                      data-ga-click="navClothing-WomenLingerie--">{{ $t('nav.LINGERIE') }}</a></li>
                    <li><a
                      href="/shop-women-hosiery/"
                      data-ga-click="navClothing-WomenHosiery--">{{ $t('nav.HOSIERY') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-women-clothing-sale/?orderby=-betterprice_time"
                      data-ga-click="navClothing-WomenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_c[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navClothing-womenCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_c"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navClothing-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.w_c[11][2]"
                      data-ga-click="navClothing-WomenJacketsIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_c[11][1]"
                        :alt="$store.state.navHeadJson.w_c[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navWomen-BAGS--"
            @mouseenter="changeSecondLevelIndex(1)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/shop-women-bags/"
              data-ga-click="navWomen-BAGS--">{{ $t('nav.BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_b"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-women-bags/?orderby=-found_datetime"
                      data-ga-click="navBags-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-women-bags/"
                      data-ga-click="navBags-WomenAll">{{ $t('nav.ALLBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-backpacks/"
                      data-ga-click="navBags-WomenBackpacks">{{ $t('nav.BACKPACKS') }}</a></li>
                    <li><a
                      href="/shop-women-clutches/"
                      data-ga-click="navBags-WomenClutches">{{ $t('nav.CLUTCHES') }}</a></li>
                    <li><a
                      href="/shop-women-satchels/"
                      data-ga-click="navBags-WomenSatchels">{{ $t('nav.SATCHELS') }}</a></li>
                    <li><a
                      href="/shop-women-totes/"
                      data-ga-click="navBags-WomenTotes">{{ $t('nav.TOTES') }}</a></li>
                    <li><a
                      href="/shop-women-crossbody-bags/"
                      data-ga-click="navBags-WomenCrossbody">{{ $t('nav.CROSSBODYBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-shoulder-bags/"
                      data-ga-click="navBags-WomenShoulder">{{ $t('nav.SHOULDERBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-travel-bags/"
                      data-ga-click="navBags-WomenTravel">{{ $t('nav.TRAVELBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-baby-bags/"
                      data-ga-click="navBags-WomenBaby">{{ $t('nav.BABYBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-belt-bags/"
                      data-ga-click="navBags-WomenBelt">{{ $t('nav.BELTBAGS') }}</a></li>
                    <li><a
                      href="/shop-women-wallets/"
                      data-ga-click="navBags-Wallet">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/shop-women-bag-accessories/"
                      data-ga-click="navBags-WomenBagAccessories">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-women-bags-sale/?orderby=-betterprice_time"
                      data-ga-click="navBags-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_b[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navBags-womenCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_b"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navBAGS-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.BELTBAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.w_b[11][2]"
                      data-ga-click="navBags-WomenBeltbagsIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_b[11][1]"
                        :alt="$store.state.navHeadJson.w_b[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navWomen-SHOES--"
            @mouseenter="changeSecondLevelIndex(2)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/shop-women-shoes/"
              data-ga-click="navWomen-SHOES">{{ $t('nav.SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_s"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-women-shoes/?orderby=-found_datetime"
                      data-ga-click="navShoes-WomenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-women-shoes/"
                      data-ga-click="navShoes-WomenAll--">{{ $t('nav.ALLSHOES') }}</a></li>
                    <li><a
                      href="/shop-women-boots/"
                      data-ga-click="navShoes-WomenBoots--">{{ $t('nav.BOOTS') }}</a></li>
                    <li><a
                      href="/shop-women-flats/"
                      data-ga-click="navShoes-WomenFlats--">{{ $t('nav.FLATS') }}</a></li>
                    <li><a
                      href="/shop-women-pumps/"
                      data-ga-click="navShoes-WomenPumps--">{{ $t('nav.PUMPS') }}</a></li>
                    <li><a
                      href="/shop-women-sandals/"
                      data-ga-click="navShoes-WomenSandals--">{{ $t('nav.SANDALS') }}</a></li>
                    <li><a
                      href="/shop-women-sneakers/"
                      data-ga-click="navShoes-WomenSneakers--">{{ $t('nav.SNEAKERS') }}</a></li>
                    <li><a
                      href="/shop-women-loafers/"
                      data-ga-click="navShoes-WomenLoafers--">{{ $t('nav.LOAFERS') }}</a></li>
                    <li><a
                      href="/shop-women-platforms/"
                      data-ga-click="navShoes-WomenPlatforms--">{{ $t('nav.PLATFORMS') }}</a></li>
                    <li><a
                      href="/shop-women-wedges/"
                      data-ga-click="navShoes-WomenWedges--">{{ $t('nav.WEDGES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-women-shoes-sale/?orderby=-betterprice_time"
                      data-ga-click="navShoes-WomenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_s[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navShoes-womenCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_s"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navShoes-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.PUMPS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.w_s[11][2]"
                      data-ga-click="navShoes-WomenPumpsIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_s[11][1]"
                        :alt="$store.state.navHeadJson.w_s[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navWomen-ACCESSORIES--"
            @mouseenter="changeSecondLevelIndex(3)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===3 }"
              href="/shop-women-accessories/"
              data-ga-click="navWomen-ACCESSORIES--">{{ $t('nav.ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_a"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-women-accessories/?orderby=-found_datetime"
                      data-ga-click="navAccessories-WomenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-women-accessories/"
                      data-ga-click="navAccessories-WomenAll--">{{ $t('nav.ALLACCESSORIES') }}</a></li>
                    <li><a
                      href="/shop-women-jewelry/"
                      data-ga-click="navAccessories-WomenJewelry--">{{ $t('nav.JEWELRY') }}</a></li>
                    <li><a
                      href="/shop-women-watches/"
                      data-ga-click="navAccessories-WomenWatch--">{{ $t('nav.WATCHES') }}</a></li>
                    <li><a
                      href="/shop-women-sunglasses/"
                      data-ga-click="navAccessories-WomenSunglasses--">{{ $t('nav.SUNGLASSES') }}</a></li>
                    <li><a
                      href="/shop-women-opticals/"
                      data-ga-click="navAccessories-WomenOpticals--">{{ $t('nav.OPTICALS') }}</a></li>
                    <li><a
                      href="/shop-women-hats/"
                      data-ga-click="navAccessories-WomenHat--">{{ $t('nav.HATS') }}</a></li>
                    <li><a
                      href="/shop-women-belts/"
                      data-ga-click="navAccessories-WomenBelt--">{{ $t('nav.BELTS') }}</a></li>
                    <li><a
                      href="/shop-women-gloves/"
                      data-ga-click="navAccessories-WomenGlove--">{{ $t('nav.GLOVES') }}</a></li>
                    <li><a
                      href="/shop-women-scarves/"
                      data-ga-click="navAccessories-WomenScarf--">{{ $t('nav.SCARVES') }}</a></li>
                    <li><a
                      href="/shop-women-wallets/"
                      data-ga-click="navAccessories-WomenWallet--">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/shop-women-keychains/"
                      data-ga-click="navAccessories-WomenKeychain--">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/shop-women-tie/"
                      data-ga-click="navAccessories-WomenTie--">{{ $t('nav.TIE') }}</a></li>
                    <li><a
                      href="/shop-women-homeware/"
                      data-ga-click="navAccessories-WomenHomeware--">{{ $t('nav.HOMEWARE') }}</a></li>
                    <li><a
                      href="/shop-women-technology/"
                      data-ga-click="navAccessories-WomenTech--">{{ $t('nav.TECHONLOGY') }}</a></li>
                    <li><a
                      href="/shop-women-hair-accessories/"
                      data-ga-click="navAccessories-WomenHair--">{{ $t('nav.HAIRACCESSORIES') }}</a></li>
                    <li><a
                      href="/shop-women-sport-accessories/"
                      data-ga-click="navAccessories-WomenSport--">{{ $t('nav.SPORTACCESSORIES') }}</a></li>
                    <li><a
                      href="/shop-women-bag-accessories/"
                      data-ga-click="navAccessories-WomenBagAccessories--">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-women-accessories-sale/?orderby=-betterprice_time"
                      data-ga-click="navAccessories-WomenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_a[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navACCESSORIES-womenCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_a"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navACCESSORIES-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JEWELRY') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.w_a[11][2]"
                      data-ga-click="navACCESSORIES-WomenJewelryIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_a[11][1]"
                        :alt="$store.state.navHeadJson.w_a[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navWomen-BEAUTY--"
            @mouseenter="changeSecondLevelIndex(4)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="javascript:;"
              data-ga-click="navWomen-BEAUTY--">{{ $t('nav.BEAUTY') }}</a>
            <a
              v-else
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="/shop-women-beauty/"
              data-ga-click="navWomen-BEAUTY--">{{ $t('nav.BEAUTY') }}</a>
            <ul
              v-if="$i18n.country!=='cn' && secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_b"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-women-beauty/?orderby=-found_datetime"
                      data-ga-click="navBeauty-WomenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-women-beauty/"
                      data-ga-click="navBeauty-WomenAllbeauty--">{{ $t('nav.ALLBEAUTY') }}</a></li>
                    <li><a
                      href="/shop-women-bath-%2526-body/"
                      data-ga-click="navBeauty-WomenBath--">{{ $t('nav.BATHBODY') }}</a></li>
                    <li><a
                      href="/shop-women-beauty-sets/"
                      data-ga-click="navBeauty-WomenSets--">{{ $t('nav.BEAUTYSETS') }}</a></li>
                    <li><a
                      href="/shop-women-cosmetics-cases/"
                      data-ga-click="navBeauty-WomenCosmentics--">{{ $t('nav.COSMETICSCASES') }}</a></li>
                    <li><a
                      href="/shop-women-fragrance/"
                      data-ga-click="navBeauty-WomenFragrace--">{{ $t('nav.FRAGRANCE') }}</a></li>
                    <li><a
                      href="/shop-women-haircare/"
                      data-ga-click="navBeauty-WomenHaircare--">{{ $t('nav.HAIRCARE') }}</a></li>
                    <li><a
                      href="/shop-women-makeup/"
                      data-ga-click="navBeauty-WomenMakeup--">{{ $t('nav.MAKEUP') }}</a></li>
                    <li><a
                      href="/shop-women-nails/"
                      data-ga-click="navBeauty-WomenNails--">{{ $t('nav.NAILS') }}</a></li>
                    <li><a
                      href="/shop-women-skincare/"
                      data-ga-click="navBeauty-WomenSkincare--">{{ $t('nav.SKINCARE') }}</a></li>
                    <li><a
                      href="/shop-women-suncare/"
                      data-ga-click="navBeauty-WomenSun--">{{ $t('nav.SUNCARE') }}</a></li>
                    <li><a
                      href="/shop-women-toothcare/"
                      data-ga-click="navBeauty-WomenTooth--">{{ $t('nav.TOOTHCARE') }}</a></li>
                    <li><a
                      href="/shop-women-tools-%2526-devices/"
                      data-ga-click="navBeauty-WomenTools--">{{ $t('nav.TOOLSDEVICES') }}</a></li>
                    <li><a
                      href="/shop-women-wellness/"
                      data-ga-click="navBeauty-WomenWellness--">{{ $t('nav.WELLNESS') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-women-beauty-sale/?orderby=-betterprice_time"
                      data-ga-click="navBeauty-WomenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_b"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navBEAUTY-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.SKINCARE') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.w_b[11][2]"
                      data-ga-click="navBEAUTY-WomenSkinIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_b[11][1]"
                        :alt="$store.state.navHeadJson.w_b[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navWomen-SALE--"
            @mouseenter="changeSecondLevelIndex(5)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===5 }"
              href="/shop-women-sale/?orderby=-betterprice_time"
              style="color: #f8472b"
              data-ga-click="navWomen-SALE--">{{ $t('nav.SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.w_sale"
                class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/shop-women-clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/shop-women-bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/shop-women-shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/shop-women-bag-accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/shop-women-beauty/">{{ $t('nav.BEAUTY') }}</a></li>
                  </ul>
                  <div><a
                    target="_blank"
                    href="/shop-women-sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
                </div>
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.w_sale"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navSALE-womenDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.WOMENSJACKETS') }}</div>
                  <div>
                    <a
                      :href="$store.state.navHeadJson.w_sale[11][2]"
                      data-ga-click="navSALE-WomenJacketsIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.w_sale[11][1]"
                        :alt="$store.state.navHeadJson.w_sale[11][3]"
                        class="sale-img">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-OCCASION--"
            @mouseenter="changeSecondLevelIndex(6)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===6 }"
              href="javascript:;"
              data-ga-click="navMen-OCCASION--">{{ $t('nav.OCCASION') }}</a>
            <ul
              v-if="secondLevelIndex===6"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="thirdmenu-wrapper">
                <div class="menucategory-title">{{ $t('nav.POPULAROCCASION') }}</div>
                <div
                  id="occasion-swiper-w"
                  class="swiper-container occasion-swiper">
                  <div class="swiper-wrapper">
                    <div
                      v-for="(os,i) in $store.state.navHeadJson.w_occasion"
                      v-if="i < 5"
                      :key="i"
                      class="swiper-slide">
                      <a :href="os[1]">
                        <div class="img-box"><img
                          :src="os[2]"
                          :alt="os[1]"
                          class="mx-100 mh-100"></div>
                        <div>{{ os[0] }}</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        data-ga-enter="nav-MEN--"
        @mouseenter="changeFirstLevelIndex(2)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===2 || (firstLevelIndex===-1 && gender==='men') }"
          href="/"
          data-ga-click="nav-MEN--">{{ $t('common.MEN') }}</a>
        <ul
          v-if="firstLevelIndex===2"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            data-ga-enter="navMen-CLOTHING--"
            @mouseenter="changeSecondLevelIndex(0)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/shop-men-clothing/"
              data-ga-click="navMen-CLOTHING--">{{ $t('nav.CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.m_c"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-men-clothing/?orderby=-found_datetime"
                      data-ga-click="navClothing-MenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-men-clothing/"
                      data-ga-click="navClothing-MenCloth--">{{ $t('nav.ALLCLOTHING') }}</a></li>
                    <li><a
                      href="/shop-men-beachwear/"
                      data-ga-click="navClothing-MenBeachwear--">{{ $t('nav.BEACHWEAR') }}</a></li>
                    <li><a
                      href="/shop-men-tops/"
                      data-ga-click="navClothing-MenTops--">{{ $t('nav.TOPS') }}</a></li>
                    <li><a
                      href="/shop-men-jeans/"
                      data-ga-click="navClothing-MenJeans--">{{ $t('nav.JEANS') }}</a></li>
                    <li><a
                      href="/shop-men-pants/"
                      data-ga-click="navClothing-MenPants--">{{ $t('nav.PANTS') }}</a></li>
                    <li><a
                      href="/shop-men-shorts/"
                      data-ga-click="navClothing-MenShorts--">{{ $t('nav.SHORTS') }}</a></li>
                    <li><a
                      href="/shop-men-coats/"
                      data-ga-click="navClothing-MenCoats--">{{ $t('nav.COATS') }}</a></li>
                    <li><a
                      href="/shop-men-jackets/"
                      data-ga-click="navClothing-MenJackets--">{{ $t('nav.JACKETS') }}</a></li>
                    <li><a
                      href="/shop-men-knitwear/"
                      data-ga-click="navClothing-MenKnitwear--">{{ $t('nav.KNITWEAR') }}</a></li>
                    <li><a
                      href="/shop-men-suits/"
                      data-ga-click="navClothing-MenSuits--">{{ $t('nav.SUITS') }}</a></li>
                    <li><a
                      href="/shop-men-underwear-%2526-socks/"
                      data-ga-click="navClothing-MenUnderwear--">{{ $t('nav.UNDERWEARSOCKS') }}</a></li>
                    <li><a
                      href="/shop-men-loungewear/"
                      data-ga-click="navClothing-MenLoungewear--">{{ $t('nav.LOUNGEWEAR') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/shop-men-clothing-sale/?orderby=-betterprice_time"
                      data-ga-click="navClothing-MenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_c[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navClothing-menCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_c"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navClothing-menDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.m_c[11][2]"
                      data-ga-click="navClothing-MenIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.m_c[11][1]"
                        :alt="$store.state.navHeadJson.m_c[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-BAGS--"
            @mouseenter="changeSecondLevelIndex(1)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/shop-men-bags/"
              data-ga-click="navMen-BAGS--">{{ $t('nav.BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.m_b"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-men-bags/?orderby=-found_datetime"
                      data-ga-click="navBags-MenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-men-bags/"
                      data-ga-click="navBags-MenAll--">{{ $t('nav.ALLBAGS') }}</a></li>
                    <li><a
                      href="/shop-men-backpacks/"
                      data-ga-click="navBags-MenBackpacks--">{{ $t('nav.BACKPACKS') }}</a></li>
                    <li><a
                      href="/shop-men-satchels/"
                      data-ga-click="navBags-MenSatchels--">{{ $t('nav.SATCHELS') }}</a></li>
                    <li><a
                      href="/shop-men-totes/"
                      data-ga-click="navBags-MenTotes--">{{ $t('nav.TOTES') }}</a></li>
                    <li><a
                      href="/shop-men-crossbody-bags/"
                      data-ga-click="navBags-MenCrossbody--">{{ $t('nav.CROSSBODYBAGS') }}</a></li>
                    <li><a
                      href="/shop-men-shoulder-bags/"
                      data-ga-click="navBags-MenShoulder--">{{ $t('nav.SHOULDERBAGS') }}</a></li>
                    <li><a
                      href="/shop-men-travel-bags/"
                      data-ga-click="navBags-MenTravel--">{{ $t('nav.TRAVELBAGS') }}</a></li>
                    <li><a
                      href="/shop-men-belt-bags/"
                      data-ga-click="navBags-MenBelt--">{{ $t('nav.BELTBAGS') }}</a></li>
                    <li><a
                      href="/shop-men-wallets/"
                      data-ga-click="navBags-Wallet--">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/shop-men-keychain/"
                      data-ga-click="navBags-MenKeychain--">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/shop-men-bags-sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="navBags-MenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_b[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navBAGS-menCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_b"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navBAGS-menDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.BELTBAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.m_b[11][2]"
                      data-ga-click="navBAGS-MenIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.m_b[11][1]"
                        :alt="$store.state.navHeadJson.m_b[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-SHOES--"
            @mouseenter="changeSecondLevelIndex(2)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/shop-men-shoes/"
              data-ga-click="navMen-SHOES--">{{ $t('nav.SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.m_s"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-men-shoes/?orderby=-found_datetime"
                      data-ga-click="navClothing-MenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-men-shoes/"
                      data-ga-click="navShoes-MenAll--">{{ $t('nav.ALLSHOES') }}</a></li>
                    <li><a
                      href="/shop-men-boots/"
                      data-ga-click="navShoes-MenBoots--">{{ $t('nav.BOOTS') }}</a></li>
                    <li><a
                      href="/shop-men-brogues/"
                      data-ga-click="navShoes-MenBrogues--">{{ $t('nav.BROGUES') }}</a></li>
                    <li><a
                      href="/shop-men-loafers/"
                      data-ga-click="navShoes-MenLoafers--">{{ $t('nav.LOAFERS') }}</a></li>
                    <li><a
                      href="/shop-men-oxford/"
                      data-ga-click="navShoes-MenOxford--">{{ $t('nav.OXFORD') }}</a></li>
                    <li><a
                      href="/shop-men-slippers/"
                      data-ga-click="navShoes-MenSlippers--">{{ $t('nav.SLIPPERS') }}</a></li>
                    <li><a
                      href="/shop-men-sandals/"
                      data-ga-click="navShoes-MenSandals--">{{ $t('nav.SANDALS') }}</a></li>
                    <li><a
                      href="/shop-men-sneakers/"
                      data-ga-click="navShoes-MenSneakers--">{{ $t('nav.SNEAKERS') }}</a></li>
                    <li><a
                      href="/shop-men-shoes-sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="navShoes-MenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_s[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navSHOES-menCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_s"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navSHOES-menDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.SNEAKERS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.m_s[11][2]"
                      data-ga-click="navSHOES-MenIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.m_s[11][1]"
                        :alt="$store.state.navHeadJson.m_s[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-ACCESSORIES--"
            @mouseenter="changeSecondLevelIndex(3)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===3 }"
              href="/shop-men-accessories/"
              data-ga-click="navMen-ACCESSORIES--">{{ $t('nav.ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.m_a"
                class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-men-accessories/?orderby=-found_datetime"
                      data-ga-click="navClothing-MenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-men-accessories/"
                      data-ga-click="navAccessories-MenAll--">{{ $t('nav.ALLACCESSORIES') }}</a></li>
                    <li><a
                      href="/shop-men-jewelry/"
                      data-ga-click="navAccessories-MenJewelry--">{{ $t('nav.JEWELRY') }}</a></li>
                    <li><a
                      href="/shop-men-watches/"
                      data-ga-click="navAccessories-MenWatch--">{{ $t('nav.WATCHES') }}</a></li>
                    <li><a
                      href="/shop-men-sunglasses/"
                      data-ga-click="navAccessories-MenSunglasses--">{{ $t('nav.SUNGLASSES') }}</a></li>
                    <li><a
                      href="/shop-men-opticals/"
                      data-ga-click="navAccessories-MenOpticals--">{{ $t('nav.OPTICALS') }}</a></li>
                    <li><a
                      href="/shop-men-belts/"
                      data-ga-click="navAccessories-MenBelt--">{{ $t('nav.BELTS') }}</a></li>
                    <li><a
                      href="/shop-men-hats/"
                      data-ga-click="navAccessories-MenHat--">{{ $t('nav.HATS') }}</a></li>
                    <li><a
                      href="/shop-men-tie/"
                      data-ga-click="navAccessories-MenTie--">{{ $t('nav.TIE') }}</a></li>
                    <li><a
                      href="/shop-men-wallets/"
                      data-ga-click="navAccessories-MenWallet--">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/shop-men-keychains/"
                      data-ga-click="navAccessories-MenKeychain--">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/shop-men-gloves/"
                      data-ga-click="navAccessories-MenGloves--">{{ $t('nav.GLOVES') }}</a></li>
                    <li><a
                      href="/shop-men-scarves/"
                      data-ga-click="navAccessories-MenScarf--">{{ $t('nav.SCARVES') }}</a></li>
                    <li><a
                      href="/shop-men-technology/"
                      data-ga-click="navAccessories-MenTech--">{{ $t('nav.TECHONLOGY') }}</a></li>
                    <li><a
                      href="/shop-men-bag-accessories/"
                      data-ga-click="navAccessories-MenBagAccessories--">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      href="/shop-men-accessories-sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="navAccessories-MenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_a[10]"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navACCESSORIES-menCollection|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_a"
                      v-if="i < 8"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navACCESSORIES-menDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.HATS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      :href="$store.state.navHeadJson.m_a[11][2]"
                      data-ga-click="navACCESSORIES-MenIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.m_a[11][1]"
                        :alt="$store.state.navHeadJson.m_a[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-GROOMING--"
            @mouseenter="changeSecondLevelIndex(4)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="javascript:;"
              data-ga-click="navMen-GROOMING--">{{ $t('nav.GROOMING') }}</a>
            <a
              v-else
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="/shop-men-grooming/"
              data-ga-click="navMen-GROOMING--">{{ $t('nav.GROOMING') }}</a>
            <ul
              v-if="$i18n.country!=='cn' && secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/shop-men-grooming/?orderby=-found_datetime"
                      data-ga-click="navBeauty-MenNewArrivals--">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/shop-men-grooming/"
                      data-ga-click="navBeauty-MenAll--">{{ $t('nav.ALLGROOMING') }}</a></li>
                    <li><a
                      href="/shop-men-bath-%2526-body/"
                      data-ga-click="navBeauty-MenBathBody--">{{ $t('nav.BATHBODY') }}</a></li>
                    <li><a
                      href="/shop-men-fragrance/"
                      data-ga-click="navBeauty-MenFragrance--">{{ $t('nav.FRAGRANCE') }}</a></li>
                    <li><a
                      href="/shop-men-haircare/"
                      data-ga-click="navBeauty-MenHaircare--">{{ $t('nav.HAIRCARE') }}</a></li>
                    <li><a
                      href="/shop-men-shave/"
                      data-ga-click="navBeauty-MenShave--">{{ $t('nav.SHAVE') }}</a></li>
                    <li><a
                      href="/shop-men-skincare/"
                      data-ga-click="navBeauty-MenSkincare--">{{ $t('nav.SKINCARE') }}</a></li>
                    <li><a
                      href="/shop-men-suncare/"
                      data-ga-click="navBeauty-MenSuncare--">{{ $t('nav.SUNCARE') }}</a></li>
                    <li><a
                      href="/shop-men-toothcare/"
                      data-ga-click="navBeauty-MenToothcare--">{{ $t('nav.TOOTHCARE') }}</a></li>
                    <li><a
                      href="/shop-men-tools-%2526-devices/"
                      data-ga-click="navBeauty-MenToolsDevices--">{{ $t('nav.TOOLSDEVICES') }}</a></li>
                    <li><a
                      href="/shop-men-wellness/"
                      data-ga-click="navBeauty-MenWellness--">{{ $t('nav.WELLNESS') }}</a></li>
                    <li><a
                      href="/shop-men-grooming-sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="navBeauty-MenSale--">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.FRAGRANCE') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a
                      href="/shop-men-grooming/"
                      data-ga-click="navBeauty-MenIcon--">
                      <img
                        v-lazy="'/img/20180930navi_m_ski.jpg'"
                        alt="">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-SALE--"
            @mouseenter="changeSecondLevelIndex(5)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===5 }"
              href="/shop-men-sale/?orderby=-betterprice_time"
              data-ga-click="navMen-SALE--"
              style="color: #f8472b">{{ $t('nav.SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div
                v-if="$store.state.navHeadJson.m_sale"
                class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/shop-men-clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/shop-men-bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/shop-men-shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/shop-men-bag-accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/shop-men-grooming/">{{ $t('nav.GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/shop-men-sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
                </div>
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li
                      v-for="(item, i) in $store.state.navHeadJson.m_sale"
                      v-if="i < 10"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navSALE-menDesigners|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.MENSJACKETS') }}</div>
                  <div>
                    <a
                      :href="$store.state.navHeadJson.m_sale[11][2]+'?orderby=-betterprice_time'"
                      data-ga-click="navSALE-MenIcon--">
                      <img
                        v-lazy="$store.state.navHeadJson.m_sale[11][1]"
                        :alt="$store.state.navHeadJson.m_sale[11][3]">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navMen-OCCASION--"
            @mouseenter="changeSecondLevelIndex(6)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===6 }"
              href="javascript:;"
              data-ga-click="navMen-OCCASION--">{{ $t('nav.OCCASION') }}</a>
            <ul
              v-if="secondLevelIndex===6"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="thirdmenu-wrapper">
                <div class="menucategory-title">{{ $t('nav.POPULAROCCASION') }}</div>
                <div
                  id="occasion-swiper"
                  class="swiper-container occasion-swiper">
                  <div class="swiper-wrapper">
                    <div
                      v-for="(os,i) in $store.state.navHeadJson.m_occasion"
                      v-if="i < 5"
                      :key="i"
                      class="swiper-slide">
                      <a :href="os[1]">
                        <div class="img-box"><img
                          :src="os[2]"
                          :alt="os[1]"
                          class="mx-100 mh-100"></div>
                        <div>{{ os[0] }}</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        data-ga-enter="nav-OFFERS--"
        @mouseenter="changeFirstLevelIndex(3)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===3 }"
          href="/coupons/"
          data-ga-click="nav-OFFERS--">{{ $t('common.OFFERS') }}</a>
        <ul
          v-if="firstLevelIndex===3"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            data-ga-enter="navOffers-COUPONS--"
            @mouseenter="changeSecondLevelIndex(0)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/coupons/"
              data-ga-click="navOffers-COUPONS--">{{ $t('nav.COUPONS') }}</a>
            <ul
              v-if="secondLevelIndex===0 && $store.state.coupons"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div>
                  <ul>
                    <li
                      v-for="(e,i) in $store.state.coupons"
                      v-if="i>0 && i<5"
                      :key="i"
                      class="coupon-each">
                      <a
                        :href="'/store/'+e.merchant.url+'/getlink/'"
                        :data-ga-click="'navOffers-COUPONS'+e.merchant.url+'--'">
                        <span>{{ e.merchant.name }} : {{ e.txt }}</span><br>
                        <span>{{ e.start_date }} - {{ e.end_date }}</span>
                      </a>
                    </li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/coupons/"
                    data-ga-click="navCoupons-viewAll--">{{ $t('nav.VIEWALLCOUPONS') }}></a></div>
                </div>
                <div class="coupons-right">
                  <div class="menucategory-title">{{ $t('nav.FEATUREDOFFER') }}</div>
                  <div class="coupons-first">
                    <a
                      :href="$store.state.coupons[0].landing_page || '/store/'+$store.state.coupons[0].merchant.url+'/getlink/'"
                      :data-ga-click="'navOffers-COUPONS'+$store.state.coupons[0].merchant.url+'--'">
                      <span>{{ $store.state.coupons[0].merchant.name }} : {{ $store.state.coupons[0].txt }}</span>
                      <img
                        v-lazy="$store.state.coupons[0].img_l || $store.state.coupons[0].merchant.logo"
                        alt="">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navOffers-WOMENSSALE--"
            @mouseenter="changeSecondLevelIndex(1)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/shop-women-sale/"
              data-ga-click="navOffers-WOMENSSALE--">{{ $t('nav.WOMENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/shop-women-clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/shop-women-bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/shop-women-shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/shop-women-bag-accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/shop-women-beauty/">{{ $t('nav.BEAUTY') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/shop-women-sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
                </div>
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a href="/gucci-women/">GUCCI</a></li>
                    <li><a href="/saint-laurent-women/">SAINT LAURENT</a></li>
                    <li><a href="/valentino-women/">VALENTINO</a></li>
                    <li><a href="/dolce-%2526-gabbana-women/">DOLCE & GABBANA</a></li>
                    <li><a href="/balenciaga-women-bags/">BALENCIAGA</a></li>
                    <li><a href="/burberry-women/">BURBERRY</a></li>
                    <li><a href="/prada-women/">PRADA</a></li>
                    <li><a href="/givenchy-women/">GIVENCHY</a></li>
                    <li><a href="/off-white-women-clothing/">OFF-WHITE</a></li>
                    <li><a href="/acne-studios-women/">ACNE STUDIOS</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.WOMENSJACKETS') }}</div>
                  <div>
                    <a
                      href="/shop-women-jackets/?orderby=-betterprice_time"
                      data-ga-click="navOffers-WOMENSSALEIcon--"><img
                        v-lazy="'/img/20180905SALE.png'"
                        class="sale-img"
                        alt="">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            data-ga-enter="navOffers-MENSSALE--"
            @mouseenter="changeSecondLevelIndex(2)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/shop-men-sale/"
              data-ga-click="navOffers-MENSSALE--">{{ $t('nav.MENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/shop-men-clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/shop-men-bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/shop-men-shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/shop-men-bag-accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/shop-men-grooming/">{{ $t('nav.GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/shop-men-sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
                </div>
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a href="/gucci-men/">GUCCI</a></li>
                    <li><a href="/saint-laurent-men/">SAINT LAURENT</a></li>
                    <li><a href="/valentino-men/">VALENTINO</a></li>
                    <li><a href="/balenciaga-men-bags/">BALENCIAGA</a></li>
                    <li><a href="/burberry-men/">BURBERRY</a></li>
                    <li><a href="/vetements-men-clothing/">VETEMENTS</a></li>
                    <li><a href="/givenchy-men/">GIVENCHY</a></li>
                    <li><a href="/off-white-men-clothing/">OFF-WHITE</a></li>
                    <li><a href="/acne-studios-men/">ACNE STUDIOS</a></li>
                    <li><a href="/alexander-mcqueen-men/">ALEXANDERMCQUEEN</a></li>
                  </ul>
                </div>
                <div class="popularcategary-box">
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.MENSJACKETS') }}</div>
                  <div>
                    <a
                      href="/shop-men-jackets/?orderby=-betterprice_time"
                      data-ga-click="navOffers-MENSSALEIcon--"><img
                        v-lazy="'/img/20180905SALE.png'"
                        class="sale-img"
                        alt=""></a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        data-ga-enter="nav-DESIGNERS--"
        @mouseenter="changeFirstLevelIndex(4)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===4 }"          
          href="/designers/"
          data-ga-click="nav-DESIGNERS--">{{ $t('common.DESIGNERS') }}</a>
        <ul
          v-if="firstLevelIndex===4"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu designers-submenu">
          <li
            class="dropdown"
            data-ga-enter="navDesigners-HOTDESIGNERS--"
            @mouseenter="changeSecondLevelIndex(0)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/"
              data-ga-click="navDesigners-HOTDESIGNERS--">{{ $t('nav.HOTDESIGNERS') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li
                      v-for="(item, i) in ($store.state.gender === 'm' ? $store.state.navHeadJson.m_designer : $store.state.navHeadJson.w_designer)"
                      v-if="i < 10"
                      :key="i">
                      <a
                        :href="item[1]"
                        :data-ga-click="`navDESIGNERS-Designers|${i}`">{{ item[0] }}</a>
                    </li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/designers/">{{ $t('nav.VIEWALL') }}></a></div>
                </div>
                <div class="store-img">
                  <a
                    :href="$store.state.gender === 'm' ? $store.state.navHeadJson.m_designer[11][2] : $store.state.navHeadJson.w_designer[11][2]"
                    data-ga-click="navDESIGNERS-JacketsIcon--"
                    target="_blank">
                    <img
                      v-lazy="$store.state.gender === 'm' ? $store.state.navHeadJson.m_designer[11][2] : $store.state.navHeadJson.w_designer[11][2]"
                      :alt="$store.state.gender === 'm' ? $store.state.navHeadJson.m_designer[11][2] : $store.state.navHeadJson.w_designer[11][2]">
                  </a>
                </div>
              </div>
            </ul>
          </li>
          <li
            v-for="n in 26"
            :key="n"
            :data-ga-enter="'navDesigners-A_Z--'+n"
            class="dropdown letter-box"
            @mouseenter="changeSecondLevelIndex(n)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===n }"
              :href="'/designers/#p'+String.fromCharCode(64 + n)"
              :data-ga-click="'navDesigners-A_Z--'+n">{{ String.fromCharCode(64 + n) }}</a>
            <ul
              v-if="secondLevelIndex===n && designers"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="thirdmenu-wrapper">
                <ul class="d-flex flex-column flex-wrap sub-menu">
                  <li
                    v-for="(designer,i) in designers"
                    :key="i"><a :href="'/'+designer.url+'-'+gender+'/'">{{ designer.name }}</a></li>
                </ul>
                <div class="view-all">
                  <a
                    target="_blank"
                    href="/designers/"
                    data-ga-click="navDesigners-ViewAll--">{{ $t('nav.VIEWALL') }}></a>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown letter-box"
            data-ga-enter="navDesigners-#--"
            @mouseenter="changeSecondLevelIndex(27)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===27 }"
              href="/designers/#p#"
              data-ga-click="navDesigners-#--">#</a>
            <ul
              v-if="secondLevelIndex===27 && designers"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="thirdmenu-wrapper">
                <ul class="d-flex flex-column flex-wrap sub-menu">
                  <li
                    v-for="(designer,i) in designers"
                    :key="i"><a :href="'/'+designer.url+'-'+gender+'/'">{{ designer.name }}</a></li>
                </ul>
                <div class="view-all">
                  <a
                    target="_blank"
                    href="/designers/"
                    data-ga-click="navDesigners-#ViewAll--">{{ $t('nav.VIEWALL') }}></a>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown letter-box search-box"
            data-ga-enter="navDesigners-search--"
            @mouseenter="changeSecondLevelIndex(28)"
            @mouseleave="changeSecondLevelIndex(-1)">
            <input
              v-model="searchTxt"
              :placeholder="$t('nav.FILTERBYDESIGNERNAME')"
              type="text"
              @keyup="searchKeyUp">
            <img
              v-lazy="'/img/20180905search_b.svg'"
              alt="">
            <ul
              v-if="secondLevelIndex===28 && designers"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="thirdmenu-wrapper">
                <ul class="d-flex flex-column flex-wrap sub-menu">
                  <li
                    v-for="(designer,i) in designers"
                    :key="i"><a :href="'/'+designer.url+'-'+gender+'/'">{{ designer.name }}</a></li>
                </ul>
                <div class="view-all">
                  <a
                    target="_blank"
                    href="/designers/"
                    data-ga-click="navDesigners-SearchViewAll--">{{ $t('nav.VIEWALL') }}></a>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </li>
      <li
        class="dropdown"
        data-ga-enter="nav-COMMUNITY--"
        @mouseenter="changeFirstLevelIndex(5)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===5 }"          
          href="/looks/"
          data-ga-click="nav-COMMUNITY--">{{ $t('nav.COMMUNITY') }}</a>
        <ul
          v-if="firstLevelIndex===5"
          :style="secondmenuStyle"
          style="height: 350px"
          class="d-flex align-items-center navbar-secondmenu">
          <keep-alive>
            <div
              v-if="$store.state.navHeadJson"
              class="d-flex justify-content-between thirdmenu-wrapper community-con">
              <div style="width: 750px">
                <div class="menucategory-title">{{ $t('nav.BESTLOOKS') }}</div>
                <ul class="d-flex justify-content-between">
                  <li
                    v-for="(e,i) in $store.state.navHeadJson.moments"
                    :key="i">
                    <a
                      :href="'/u/'+e.lsuname+'/'+e.umid+'/?popup=open'"
                      target="_blank">
                      <div class="momentimg-box">
                        <img
                          v-lazy="e.link+'s'"
                          :alt="e.dsp">
                      </div>
                      <div
                        class="text-center"
                        style="margin-top: 10px">{{ e.lsuname }}</div>
                    </a>
                  </li>
                </ul>
                <div style="margin-top: 50px"><a
                  target="_blank"
                  href="/looks/">{{ $t('nav.MORELOOKS') }}></a></div>
              </div>
              <div class="menu-userinfo">
                <div class="menucategory-title">{{ $t('nav.MYCLOSET') }}</div>
                <a
                  v-if="lsuser"
                  :href="'/u/'+lsuser.username">
                  <div><img
                    v-lazy="lsuser.icon"
                    :alt="lsuser.username"></div>
                  <span>{{ $t('nav.ORGANIZEMYCLOSET') }}</span>
                </a>
                <div
                  v-else
                  data-ga-click="navCommunity-UserIcon--"
                  @click="openspmodal">
                  <div><img
                    v-lazy="gconfig.UNLOGIN_ICON"
                    alt=""></div>
                  <span>{{ $t('nav.LOGINTOBUILDMYCLOSET') }}</span>
                </div>
              </div>
              <ul style="width: 250px">
                <div class="menucategory-title">{{ $t('nav.WHOTOFOLLOW') }}</div>
                <ul>
                  <li
                    v-for="(e,i) in $store.state.navHeadJson.users"
                    :key="i"
                    class="d-flex justify-content-between follow-userbox">
                    <a
                      :href="'/u/'+e.username"
                      target="_blank"
                      class="d-flex justify-content-center align-items-center follow-usericon">
                      <img
                        v-lazy="e.icon"
                        class="w-100"
                        alt="">
                    </a>
                    <i/>
                    <div
                      style="width: 120px"
                      class="d-flex flex-column">
                      <a
                        :href="'/u/'+e.username"
                        target="_blank">{{ e.username }}</a>
                      <div
                        class="text-center follow-btn"
                        data-ga-click="navCommunity-Following--"
                        @click="followEvent(i, e.username, e.uid)">{{ followStatus[i] ? $t('nav.Following') : $t('nav.Follow') }}</div>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </keep-alive>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseenter="changeFirstLevelIndex(6)"
        @mouseleave="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===6 }"
          href="/why-modesens/"
          data-ga-click="nav-WHYMODESENS--">{{ $t('nav.WHYMODESENS') }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstLevelIndex: -1,
      secondLevelIndex: -1,
      menuTimer1: -1,
      menuTimer2: -1,
      searchTxt: '',
      designers: '',
      latest_txt: null,
      followStatus: [0, 0, 0]
    }
  },
  computed: {
    lsuser() {
      return this.$store.state.lsuser
    },
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
    },
    gender() {
      if (this.$store.state.gender === 'm') {
        return 'men'
      }
      return 'women'
    }
  },
  mounted() {},
  methods: {
    async getnavhead() {
      let { navHeadJson } = await this.$axios.get('/getnavhead/', {
        params: {}
      })
      this.$store.commit('saveNavHeadJson', navHeadJson)
    },
    changeFirstLevelIndex(index) {
      clearTimeout(this.menuTimer1)
      this.menuTimer1 = setTimeout(async () => {
        if (!this.$store.state.navHeadJson) {
          this.getnavhead()
        }
        this.firstLevelIndex = index
      }, 500)
    },
    changeSecondLevelIndex(index) {
      clearTimeout(this.menuTimer2)
      this.menuTimer2 = setTimeout(() => {
        this.secondLevelIndex = index
        if (index === -1) {
          this.latest_txt = null
        }
        if (this.firstLevelIndex === 4 && index > 0) {
          let letter = ''
          if (index < 28) {
            letter = $('.letter-box > a')
              .eq(index - 1)
              .html()
              .toLowerCase()
            let rhint = this.$store.state.rhints[letter]
            if (rhint) {
              this.designers = rhint.designers
            } else {
              this.getHint2(letter, 1)
            }
          } else {
            letter = this.searchTxt
            this.getHint2(letter, 0)
          }
        }
        if (this.firstLevelIndex === 3 && index === 0) {
          if (!this.$store.state.coupons) {
            this.getOffers()
          }
        }
      }, 500)
    },
    async getHint2(txt, isSave) {
      var data = {}
      data.txt = txt
      data.amount = 30
      data.prefix = 1
      data.typs = 'D'
      let { rhints } = await this.$axios.get('/hint2/', { params: data })
      this.designers = rhints.designers
      if (isSave) {
        this.$store.commit('saveRHints', [txt, rhints])
      }
    },
    async getOffers() {
      var data = {}
      data.amount = 5
      data.format = 'json'
      let { coupons } = await this.$axios.post('/offers/', data)
      this.$store.commit('setCoupons', coupons)
    },
    searchKeyUp() {
      clearTimeout(this.menuTimer2)
      this.menuTimer2 = setTimeout(() => {
        this.getHint2(this.searchTxt)
      }, 500)
    },
    openspmodal() {
      $('#spmsg').html(this.$t('Modals.JoinModeSens'))
      this.$root.$emit('bv::show::modal', 'spmodal')
    },
    followEvent(i, username, uid) {
      this.changeFirstLevelIndex(-1)
      if (this.$store.state.login_status) {
        if (this.followStatus[i]) {
          this.postFollow(i, 'unfollow', uid)
        } else {
          this.postFollow(i, 'follow', uid)
        }
      } else {
        $('#spmsg').html(
          this.$t('nav.JoinModeSenstofollow') +
            username +
            this.$t('nav.scloset')
        )
        this.$root.$emit('bv::show::modal', 'spmodal')
      }
    },
    async postFollow(i, action, uid) {
      var data = {}
      data.action = action
      data.uni = 1
      data.feuid = uid
      let obj = await this.$axios.post('/follow/', data)
      if (obj.action === 'follow') {
        this.followStatus[i] = 1
      } else {
        this.followStatus[i] = 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/components/header/navMenu.less';
</style>
