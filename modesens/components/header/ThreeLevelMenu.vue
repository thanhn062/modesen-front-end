<template>
  <div>
    <ul class="d-flex nav-pc-menu">
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(1)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===1 || (firstLevelIndex===-1 && gender==='women') }"
          href="/">{{ $t('common.WOMEN') }}</a>
        <ul
          v-if="firstLevelIndex===1"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/product/women/clothing/">{{ $t('nav.CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/clothing/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/"
                      data-ga-click="headerNavClothing-WomenCloth">{{ $t('nav.ALLCLOTHING') }}</a></li>
                    <li><a
                      href="/product/women/clothing/beachwear/"
                      data-ga-click="headerNavClothing-WomenBeachwear">{{ $t('nav.BEACHWEAR') }}</a></li>
                    <li><a
                      href="/product/women/clothing/dresses/"
                      data-ga-click="headerNavClothing-WomenDress">{{ $t('nav.DRESSES') }}</a></li>
                    <li><a
                      href="/product/women/clothing/tops/"
                      data-ga-click="headerNavClothing-WomenTops">{{ $t('nav.TOPS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/skirts/"
                      data-ga-click="headerNavClothing-WomenSkirts">{{ $t('nav.SKIRTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jeans/"
                      data-ga-click="headerNavClothing-WomenJeans">{{ $t('nav.JEANS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/pants/"
                      data-ga-click="headerNavClothing-WomenPants">{{ $t('nav.PANTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jumpsuits/"
                      data-ga-click="headerNavClothing-WomenJumpsuits">{{ $t('nav.JUMPSUITS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/shorts/"
                      data-ga-click="headerNavClothing-WomenShorts">{{ $t('nav.SHORTS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/coats/"
                      data-ga-click="headerNavClothing-WomenCoats">{{ $t('nav.COATS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/jackets/"
                      data-ga-click="headerNavClothing-WomenJackets">{{ $t('nav.JACKETS') }}</a></li>
                    <li><a
                      href="/product/women/clothing/knitwear/"
                      data-ga-click="headerNavClothing-WomenKnitwear">{{ $t('nav.KNITWEAR') }}</a></li>
                    <li><a
                      href="/product/women/clothing/lingerie/"
                      data-ga-click="headerNavClothing-WomenLingerie">{{ $t('nav.LINGERIE') }}</a></li>
                    <li><a
                      href="/product/women/clothing/hosiery/"
                      data-ga-click="headerNavClothing-WomenHosiery">{{ $t('nav.HOSIERY') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/clothing/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavClothing-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a href="/collection/modesens-fab-fur-and-shearling-409220/">{{ $t('nav.FURSHEARLING') }}</a></li>
                    <li><a href="/collection/modesens-sweater-weather-410014/">{{ $t('nav.SWEATERS ') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-puffed-up-414558/">{{ $t('nav.PUFFEROVERSIZEDOUTERWEAR') }}</a></li>
                    <li><a href="/collection/modesens-denim-for-days-415377/">{{ $t('nav.DENIM ') }}</a></li>
                    <li><a href="/collection/modesens-transition-to-cooler-weather-396218/">{{ $t('nav.OUTFITMAKINGLAYERS') }}</a></li>
                    <li><a href="/collection/modesens-up-our-sleeve%E2%80%94unique-sleeves-collection-385192/">{{ $t('nav.SPECIALSLEEVES') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="product/women/clothing/jackets/#page=1&category=c&subcategory=Jackets%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_f_j.jpg">
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
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/product/women/bags/">{{ $t('nav.BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/bags/?orderby=-found_datetime"
                      data-ga-click="headerNavBags-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/bags/"
                      data-ga-click="headerNavBags-WomenAll">{{ $t('nav.ALLBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/backpacks/"
                      data-ga-click="headerNavBags-WomenBackpacks">{{ $t('nav.BACKPACKS') }}</a></li>
                    <li><a
                      href="/product/women/bags/clutches/"
                      data-ga-click="headerNavBags-WomenClutches">{{ $t('nav.CLUTCHES') }}</a></li>
                    <li><a
                      href="/product/women/bags/satchels/"
                      data-ga-click="headerNavBags-WomenSatchels">{{ $t('nav.SATCHELS') }}</a></li>
                    <li><a
                      href="/product/women/bags/totes/"
                      data-ga-click="headerNavBags-WomenTotes">{{ $t('nav.TOTES') }}</a></li>
                    <li><a
                      href="/product/women/bags/crossbody%20bags/"
                      data-ga-click="headerNavBags-WomenCrossbody">{{ $t('nav.CROSSBODYBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/shoulder%20bags/"
                      data-ga-click="headerNavBags-WomenShoulder">{{ $t('nav.SHOULDERBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/travel%20bags/"
                      data-ga-click="headerNavBags-WomenTravel">{{ $t('nav.TRAVELBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/baby%20bags/"
                      data-ga-click="headerNavBags-WomenBaby">{{ $t('nav.BABYBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/belt%20bags/"
                      data-ga-click="headerNavBags-WomenBelt">{{ $t('nav.BELTBAGS') }}</a></li>
                    <li><a
                      href="/product/women/bags/wallets/"
                      data-ga-click="headerNavBags-Wallet">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/product/women/bags/bag%20accessories/"
                      data-ga-click="headerNavBags-WomenBagAccessories">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/bags/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavBags-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-hands-free-393706/">{{ $t('nav.BELTBAGS2') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('nav.DATENIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('nav.EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('nav.LOGOMANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.BELTBAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/bags/belt%20bags/#page=1&category=b&subcategory=Belt%20Bags%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_f_b.jpg">
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
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/product/women/shoes/">{{ $t('nav.SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/shoes/?orderby=-found_datetime"
                      data-ga-click="headerNavShoes-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/"
                      data-ga-click="headerNavShoes-WomenAll">{{ $t('nav.ALLSHOES') }}</a></li>
                    <li><a
                      href="/product/women/shoes/boots/"
                      data-ga-click="headerNavShoes-WomenBoots">{{ $t('nav.BOOTS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/flats/"
                      data-ga-click="headerNavShoes-WomenFlats">{{ $t('nav.FLATS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/pumps/"
                      data-ga-click="headerNavShoes-WomenPumps">{{ $t('nav.PUMPS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/sandals/"
                      data-ga-click="headerNavShoes-WomenSandals">{{ $t('nav.SANDALS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/sneakers/"
                      data-ga-click="headerNavShoes-WomenSneakers">{{ $t('nav.SNEAKERS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/loafers/"
                      data-ga-click="headerNavShoes-WomenLoafers">{{ $t('nav.LOAFERS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/platforms/"
                      data-ga-click="headerNavShoes-WomenPlatforms">{{ $t('nav.PLATFORMS') }}</a></li>
                    <li><a
                      href="/product/women/shoes/wedges/"
                      data-ga-click="headerNavShoes-WomenWedges">{{ $t('nav.WEDGES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/shoes/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavShoes-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-the-season%2527s-newest-trainers-388623/">{{ $t('nav.NEWSEASONTRAINERS') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('nav.DATENIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('nav.EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('nav.LOGOMANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.PUMPS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/shoes/pumps/#page=1&category=s&subcategory=Pumps%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_f_s.jpg">
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
              :class="{ borderbottom: secondLevelIndex===3 }"
              href="/product/women/accessories/">{{ $t('nav.ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/accessories/?orderby=-found_datetime"
                      data-ga-click="headerNavAccessories-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/"
                      data-ga-click="headerNavAccessories-WomenAll">{{ $t('nav.ALLACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/jewelry/"
                      data-ga-click="headerNavAccessories-WomenJewelry">{{ $t('nav.JEWELRY') }}</a></li>
                    <li><a
                      href="/product/women/accessories/watches/"
                      data-ga-click="headerNavAccessories-WomenWatch">{{ $t('nav.WATCHES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/sunglasses/"
                      data-ga-click="headerNavAccessories-WomenSunglasses">{{ $t('nav.SUNGLASSES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/opticals/"
                      data-ga-click="headerNavAccessories-WomenOpticals">{{ $t('nav.OPTICALS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/hats/"
                      data-ga-click="headerNavAccessories-WomenHat">{{ $t('nav.HATS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/belts/"
                      data-ga-click="headerNavAccessories-WomenBelt">{{ $t('nav.BELTS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/gloves/"
                      data-ga-click="headerNavAccessories-WomenGlove">{{ $t('nav.GLOVES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/scarves/"
                      data-ga-click="headerNavAccessories-WomenScarf">{{ $t('nav.SCARVES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/wallets/"
                      data-ga-click="headerNavAccessories-WomenWallet">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/keychains/"
                      data-ga-click="headerNavAccessories-WomenKeychain">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/women/accessories/tie/"
                      data-ga-click="headerNavAccessories-WomenTie">{{ $t('nav.TIE') }}</a></li>
                    <li><a
                      href="/product/women/accessories/homeware/"
                      data-ga-click="headerNavAccessories-WomenHomeware">{{ $t('nav.HOMEWARE') }}</a></li>
                    <li><a
                      href="/product/women/accessories/technology/"
                      data-ga-click="headerNavAccessories-WomenTech">{{ $t('nav.TECHONLOGY') }}</a></li>
                    <li><a
                      href="/product/women/accessories/hair%20accessories/"
                      data-ga-click="headerNavAccessories-WomenHair">{{ $t('nav.HAIRACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/sport%20accessories/"
                      data-ga-click="headerNavAccessories-WomenSport">{{ $t('nav.SPORTACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/women/accessories/bag%20accessories/"
                      data-ga-click="headerNavAccessories-WomenBagAccessories">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/accessories/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavAccessories-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-24-karat-magic-398873/">{{ $t('nav.DAYTIMEBLING') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-390564/">{{ $t('nav.DATENIGHT') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-back-to-the-80%2527s-398187/">{{ $t('nav.EIGHTIES') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94glitz-and-glam-party-pieces-383179/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392966/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387783/">{{ $t('nav.LOGOMANIA') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JEWELRY') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/accessories/jewelry/#page=1&category=a">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_f_jy.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(4)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="javascript:;">{{ $t('nav.BEAUTY') }}</a>
            <a
              v-else
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="/product/women/beauty/">{{ $t('nav.BEAUTY') }}</a>
            <ul
              v-if="$i18n.country!=='cn' && secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/women/beauty/?orderby=-found_datetime"
                      data-ga-click="headerNavBeauty-WomenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/"
                      data-ga-click="headerNavBeauty-WomenAllbeauty">{{ $t('nav.ALLBEAUTY') }}</a></li>
                    <li><a
                      href="/product/women/beauty/bath & body/"
                      data-ga-click="headerNavBeauty-WomenBath">{{ $t('nav.BATHBODY') }}</a></li>
                    <li><a
                      href="/product/women/beauty/beauty sets/"
                      data-ga-click="headerNavBeauty-WomenSets">{{ $t('nav.BEAUTYSETS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/cosmetics cases/"
                      data-ga-click="headerNavBeauty-WomenCosmentics">{{ $t('nav.COSMETICSCASES') }}</a></li>
                    <li><a
                      href="/product/women/beauty/fragrance/"
                      data-ga-click="headerNavBeauty-WomenFragrace">{{ $t('nav.FRAGRANCE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/haircare/"
                      data-ga-click="headerNavBeauty-WomenHaircare">{{ $t('nav.HAIRCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/makeup/"
                      data-ga-click="headerNavBeauty-WomenMakeup">{{ $t('nav.MAKEUP') }}</a></li>
                    <li><a
                      href="/product/women/beauty/nails/"
                      data-ga-click="headerNavBeauty-WomenNails">{{ $t('nav.NAILS') }}</a></li>
                    <li><a
                      href="/product/women/beauty/skincare/"
                      data-ga-click="headerNavBeauty-WomenSkincare">{{ $t('nav.SKINCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/suncare/"
                      data-ga-click="headerNavBeauty-WomenSun">{{ $t('nav.SUNCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/toothcare/"
                      data-ga-click="headerNavBeauty-WomenTooth">{{ $t('nav.TOOTHCARE') }}</a></li>
                    <li><a
                      href="/product/women/beauty/tools & devices/"
                      data-ga-click="headerNavBeauty-WomenTools">{{ $t('nav.TOOLSDEVICES') }}</a></li>
                    <li><a
                      href="/product/women/beauty/wellness/"
                      data-ga-click="headerNavBeauty-WomenWellness">{{ $t('nav.WELLNESS') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/women/beauty/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavBeauty-WomenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.SKINCARE') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/women/beauty/skincare/#page=1&category=e&subcategory=Skincare%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_f_ski.jpg">
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
              :class="{ borderbottom: secondLevelIndex===5 }"
              href="/product/women/sale/?orderby=-betterprice_time"
              style="color: #f8472b">{{ $t('nav.SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/women/clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/product/women/bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/product/women/shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/product/women/bags/bag%20accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/product/women/beauty/">{{ $t('nav.BEAUTY') }}</a></li>
                  </ul>
                  <div><a
                    target="_blank"
                    href="/product/women/sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
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
                  <div><a href="/product/women/clothing/jackets/?orderby=-betterprice_time"><img
                    class="sale-img lazyload"
                    src="https://mds0.com/static/img/20180905SALE.png"></a></div>
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
        <a
          :class="{ borderbottom: firstLevelIndex===2 || (firstLevelIndex===-1 && gender==='men') }"
          href="/">{{ $t('common.MEN') }}</a>
        <ul
          v-if="firstLevelIndex===2"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/product/men/clothing/"
              data-ga-click="headerNavClothing-Open">{{ $t('nav.CLOTHING') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/clothing/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-MenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/"
                      data-ga-click="headerNavClothing-MenCloth">{{ $t('nav.ALLCLOTHING') }}</a></li>
                    <li><a
                      href="/product/men/clothing/beachwear/"
                      data-ga-click="headerNavClothing-MenBeachwear">{{ $t('nav.BEACHWEAR') }}</a></li>
                    <li><a
                      href="/product/men/clothing/tops/"
                      data-ga-click="headerNavClothing-MenTops">{{ $t('nav.TOPS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/jeans/"
                      data-ga-click="headerNavClothing-MenJeans">{{ $t('nav.JEANS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/pants/"
                      data-ga-click="headerNavClothing-MenPants">{{ $t('nav.PANTS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/shorts/"
                      data-ga-click="headerNavClothing-MenShorts">{{ $t('nav.SHORTS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/coats/"
                      data-ga-click="headerNavClothing-MenCoats">{{ $t('nav.COATS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/jackets/"
                      data-ga-click="headerNavClothing-MenJackets">{{ $t('nav.JACKETS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/knitwear/"
                      data-ga-click="headerNavClothing-MenKnitwear">{{ $t('nav.KNITWEAR') }}</a></li>
                    <li><a
                      href="/product/men/clothing/suits/"
                      data-ga-click="headerNavClothing-MenSuits">{{ $t('nav.SUITS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/underwear%20%26%20socks/"
                      data-ga-click="headerNavClothing-MenUnderwear">{{ $t('nav.UNDERWEARSOCKS') }}</a></li>
                    <li><a
                      href="/product/men/clothing/loungewear/"
                      data-ga-click="headerNavClothing-MenLoungewear">{{ $t('nav.LOUNGEWEAR') }}</a></li>
                    <li><a
                      class="subnav-sale"
                      href="/product/men/clothing/sale/?orderby=-betterprice_time"
                      data-ga-click="headerNavClothing-MenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-fab-fur-and-shearling-409219/">{{ $t('nav.FURSHEARLING') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-puffed-up-414557/">{{ $t('nav.PUFFEROVERSIZEDOUTERWEAR') }}</a></li>
                    <li><a href="/collection/modesens-sweater-weather-410013/">{{ $t('nav.SWEATERS ') }}</a></li>
                    <li><a href="/collection/modesens-top-this%E2%80%94-fresh-picksfor-the-new-season-385217/">{{ $t('nav.NEWSEASONSHIRTS') }}</a></li>
                    <li><a href="/collection/modesens-laidback-pants%E2%80%94on-trend-trousers%2C-track-pants-and-joggers-380121/">{{ $t('nav.EASYPANTS') }}</a></li>
                    <li><a href="/collection/modesens-denim-on-denim%E2%80%94hottest-denim-pieces-373887/">{{ $t('nav.DENIM2') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.JACKETS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/clothing/jackets/#page=1&category=c&subcategory=Jackets%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_m_j.jpg">
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
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/product/men/bags/"
              data-ga-click="headerNavBags-Open">{{ $t('nav.BAGS') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/bags/?orderby=-found_datetime"
                      data-ga-click="headerNavBags-MenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/bags/"
                      data-ga-click="headerNavBags-MenAll">{{ $t('nav.ALLBAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/backpacks/"
                      data-ga-click="headerNavBags-MenBackpacks">{{ $t('nav.BACKPACKS') }}</a></li>
                    <li><a
                      href="/product/men/bags/satchels/"
                      data-ga-click="headerNavBags-MenSatchels">{{ $t('nav.SATCHELS') }}</a></li>
                    <li><a
                      href="/product/men/bags/totes/"
                      data-ga-click="headerNavBags-MenTotes">{{ $t('nav.TOTES') }}</a></li>
                    <li><a
                      href="/product/men/bags/crossbody%20bags/"
                      data-ga-click="headerNavBags-MenCrossbody">{{ $t('nav.CROSSBODYBAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/shoulder%20bags/"
                      data-ga-click="headerNavBags-MenShoulder">{{ $t('nav.SHOULDERBAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/travel%20bags/"
                      data-ga-click="headerNavBags-MenTravel">{{ $t('nav.TRAVELBAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/belt%20bags/"
                      data-ga-click="headerNavBags-MenBelt">{{ $t('nav.BELTBAGS') }}</a></li>
                    <li><a
                      href="/product/men/bags/wallets/"
                      data-ga-click="headerNavBags-Wallet">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/product/men/bags/keychain/"
                      data-ga-click="headerNavBags-MenKeychain">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/men/bags/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavBags-MenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-hands-free-393705/">{{ $t('nav.BELTBAGS') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('nav.LOGOMANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('nav.MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('nav.DATENIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.BELTBAGS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/bags/belt%20bags/#page=1&category=b&subcategory=Belt%20Bags%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_m_b.jpg">
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
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/product/men/shoes/"
              data-ga-click="headerNavShoes-Open">{{ $t('nav.SHOES') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/shoes/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-MenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/"
                      data-ga-click="headerNavShoes-MenAll">{{ $t('nav.ALLSHOES') }}</a></li>
                    <li><a
                      href="/product/men/shoes/boots/"
                      data-ga-click="headerNavShoes-MenBoots">{{ $t('nav.BOOTS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/brogues/"
                      data-ga-click="headerNavShoes-MenBrogues">{{ $t('nav.BROGUES') }}</a></li>
                    <li><a
                      href="/product/men/shoes/loafers/"
                      data-ga-click="headerNavShoes-MenLoafers">{{ $t('nav.LOAFERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/oxford/"
                      data-ga-click="headerNavShoes-MenOxford">{{ $t('nav.OXFORD') }}</a></li>
                    <li><a
                      href="/product/men/shoes/slippers/"
                      data-ga-click="headerNavShoes-MenSlippers">{{ $t('nav.SLIPPERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sandals/"
                      data-ga-click="headerNavShoes-MenSandals">{{ $t('nav.SANDALS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sneakers/"
                      data-ga-click="headerNavShoes-MenSneakers">{{ $t('nav.SNEAKERS') }}</a></li>
                    <li><a
                      href="/product/men/shoes/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavShoes-MenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-you%2527ll-get-a-kick-out-of-this%E2%80%94the-season%2527s-newest-trainers-388618/">{{ $t('nav.NEWSEASONTRAINERS') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('nav.LOGOMANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('nav.MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('nav.DATENIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.SNEAKERS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/shoes/sneakers/#page=1&category=s&subcategory=Sneakers%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_m_s.jpg">
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
              :class="{ borderbottom: secondLevelIndex===3 }"
              href="/product/men/accessories/"
              data-ga-click="headerNavAccessories-Open">{{ $t('nav.ACCESSORIES') }}</a>
            <ul
              v-if="secondLevelIndex===3"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/accessories/?orderby=-found_datetime"
                      data-ga-click="headerNavClothing-New Arrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/"
                      data-ga-click="headerNavAccessories-MenAll">{{ $t('nav.ALLACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/jewelry/"
                      data-ga-click="headerNavAccessories-MenJewelry">{{ $t('nav.JEWELRY') }}</a></li>
                    <li><a
                      href="/product/men/accessories/watches/"
                      data-ga-click="headerNavAccessories-MenWatch">{{ $t('nav.WATCHES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/sunglasses/"
                      data-ga-click="headerNavAccessories-MenSunglasses">{{ $t('nav.SUNGLASSES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/opticals/"
                      data-ga-click="headerNavAccessories-MenOpticals">{{ $t('nav.OPTICALS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/belts/"
                      data-ga-click="headerNavAccessories-MenBelt">{{ $t('nav.BELTS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/hats/"
                      data-ga-click="headerNavAccessories-MenHat">{{ $t('nav.HATS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/tie/"
                      data-ga-click="headerNavAccessories-MenTie">{{ $t('nav.TIE') }}</a></li>
                    <li><a
                      href="/product/men/accessories/wallets/"
                      data-ga-click="headerNavAccessories-MenWallet">{{ $t('nav.WALLETS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/keychains/"
                      data-ga-click="headerNavAccessories-MenKeychain">{{ $t('nav.KEYCHAINS') }}</a></li>
                    <li><a
                      href="/product/men/accessories/gloves/"
                      data-ga-click="headerNavAccessories-MenGloves">{{ $t('nav.GLOVES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/scarves/"
                      data-ga-click="headerNavAccessories-MenScarf">{{ $t('nav.SCARVES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/technology/"
                      data-ga-click="headerNavAccessories-MenTech">{{ $t('nav.TECHONLOGY') }}</a></li>
                    <li><a
                      href="/product/men/accessories/bag%20accessories/"
                      data-ga-click="headerNavAccessories-MenBagAccessories">{{ $t('nav.BAGACCESSORIES') }}</a></li>
                    <li><a
                      href="/product/men/accessories/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavAccessories-MenSale">{{ $t('nav.SALE') }}</a></li>
                  </ul>
                </div>
                <div class="collection-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCOLLECTION') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/collection/modesens-finishing-touches-398872/">{{ $t('nav.MENSACCESSORIES') }}</a></li>
                    <li><a href="/collection/modesens-make-logos-the-star-387782/">{{ $t('nav.LOGOMANIA') }}</a></li>
                    <li><a href="/collection/modesens-on-a-mission-398186/">{{ $t('nav.MILITARY') }}</a></li>
                    <li><a href="/collection/modesens-night-on-the-town%E2%80%94sleek-party-pieces-383178/">{{ $t('nav.PATTYLOOKS') }}</a></li>
                    <li><a href="/collection/modesens-trend%3A-wild%2C-wild-west-392965/">{{ $t('nav.WESTERN') }}</a></li>
                    <li><a href="/collection/modesens-date-night-looks-389956/">{{ $t('nav.DATENIGHT') }}</a></li>
                  </ul>
                </div>
                <div class="designer-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
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
                  <div class="menucategory-title">{{ $t('nav.POPULARCATEGORY') }}</div>
                  <div class="menucategory-desc">{{ $t('nav.HATS') }}</div>
                  <div class="prd-recommend-wrapper">
                    <a href="/product/men/accessories/hats/#page=1&category=a&subcategory=Hats%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_m_h.jpg">
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(4)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="javascript:;">{{ $t('nav.GROOMING') }}</a>
            <a
              v-else
              :class="{ borderbottom: secondLevelIndex===4 }"
              href="/product/men/grooming/"
              data-ga-click="headerNavAccessories-Open">{{ $t('nav.GROOMING') }}</a>
            <ul
              v-if="$i18n.country!=='cn' && secondLevelIndex===4"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
                    <li><a
                      href="/product/men/grooming/?orderby=-found_datetime"
                      data-ga-click="headerNavBeauty-MenNewArrivals">{{ $t('nav.NEWARRIVALS') }}</a></li>
                    <li><a
                      href="/product/men/grooming/"
                      data-ga-click="headerNavBeauty-MenAll">{{ $t('nav.ALLGROOMING') }}</a></li>
                    <li><a
                      href="/product/men/grooming/bath & body/"
                      data-ga-click="headerNavBeauty-MenBath & Body">{{ $t('nav.BATHBODY') }}</a></li>
                    <li><a
                      href="/product/men/grooming/fragrance/"
                      data-ga-click="headerNavBeauty-MenFragrance">{{ $t('nav.FRAGRANCE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/haircare/"
                      data-ga-click="headerNavBeauty-MenHaircare">{{ $t('nav.HAIRCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/shave/"
                      data-ga-click="headerNavBeauty-MenShave">{{ $t('nav.SHAVE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/skincare/"
                      data-ga-click="headerNavBeauty-MenSkincare">{{ $t('nav.SKINCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/suncare/"
                      data-ga-click="headerNavBeauty-MenSuncare">{{ $t('nav.SUNCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/toothcare/"
                      data-ga-click="headerNavBeauty-MenToothcare">{{ $t('nav.TOOTHCARE') }}</a></li>
                    <li><a
                      href="/product/men/grooming/tools & devices/"
                      data-ga-click="headerNavBeauty-MenTools & Devices">{{ $t('nav.TOOLSDEVICES') }}</a></li>
                    <li><a
                      href="/product/men/grooming/wellness/"
                      data-ga-click="headerNavBeauty-MenWellness">{{ $t('nav.WELLNESS') }}</a></li>
                    <li><a
                      href="/product/men/grooming/sale/?orderby=-betterprice_time"
                      class="subnav-sale"
                      data-ga-click="headerNavBeauty-MenSale">{{ $t('nav.SALE') }}</a></li>
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
                    <a href="/product/men/grooming/#page=1&category=e&subcategory=Fragrance%3B">
                      <img
                        class="lazyload"
                        src="https://mds0.com/static/img/20180930navi_m_ski.jpg">
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
              :class="{ borderbottom: secondLevelIndex===5 }"
              href="/product/men/sale/?orderby=-betterprice_time"
              data-ga-click="headerNavSale-Open"
              style="color: #f8472b">{{ $t('nav.SALE') }}</a>
            <ul
              v-if="secondLevelIndex===5"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/men/clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/product/men/bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/product/men/shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/product/men/bags/bag%20accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/product/men/grooming/">{{ $t('nav.GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/men/sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
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
                  <div><a href="/product/men/clothing/jackets/?orderby=-betterprice_time">
                    <img
                      class="sale-img lazyload"
                      src="https://mds0.com/static/img/20180905SALE.png">
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
        <a
          :class="{ borderbottom: firstLevelIndex===3 }"
          href="/product/coupons/">{{ $t('common.OFFERS') }}</a>
        <ul
          v-if="firstLevelIndex===3"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/product/coupons/">{{ $t('nav.COUPONS') }}</a>
            <ul
              v-if="secondLevelIndex===0 && coupons"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div>
                  <ul>
                    <li
                      v-for="(e,i) in coupons"
                      v-if="i>0 && i<5"
                      :key="i"
                      class="coupon-each">
                      <a :href="'/store/'+e.merchant.url+'/getlink/'">
                        <span>{{ e.merchant.name }} : {{ e.txt }}</span><br>
                        <span>{{ e.start_date }} - {{ e.end_date }}</span>
                      </a>
                    </li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/coupons/">{{ $t('nav.VIEWALLCOUPONS') }}></a></div>
                </div>
                <div class="coupons-right">
                  <div class="menucategory-title">{{ $t('nav.FEATUREDOFFER') }}</div>
                  <div class="coupons-first">
                    <a :href="coupons[0].landing_page || '/store/'+coupons[0].merchant.url+'/getlink/'">
                      <span>{{ coupons[0].merchant.name }} : {{ coupons[0].txt }}</span>
                      <img :src="coupons[0].img_l || coupons[0].merchant.logo">
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
              :class="{ borderbottom: secondLevelIndex===1 }"
              href="/product/women/sale/">{{ $t('nav.WOMENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===1"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/women/clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/product/women/bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/product/women/shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/product/women/bags/bag%20accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/product/women/beauty/">{{ $t('nav.BEAUTY') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/women/sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
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
                  <div><a href="/product/women/clothing/jackets/?orderby=-betterprice_time"><img
                    class="sale-img lazyload"
                    src="https://mds0.com/static/img/20180905SALE.png"></a></div>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(2)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===2 }"
              href="/product/men/sale/">{{ $t('nav.MENSSALE') }}</a>
            <ul
              v-if="secondLevelIndex===2"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper sale-wrapper">
                <div class="sale-category-box">
                  <div class="menucategory-title">{{ $t('nav.SHOPBYCATEGORY') }}</div>
                  <ul class="sub-menu">
                    <li><a href="/product/men/clothing/">{{ $t('nav.CLOTHING') }}</a></li>
                    <li><a href="/product/men/bags/">{{ $t('nav.BAGS') }}</a></li>
                    <li><a href="/product/men/shoes/">{{ $t('nav.SHOES') }}</a></li>
                    <li><a href="/product/men/bags/bag%20accessories/">{{ $t('nav.ACCESSORIES') }}</a></li>
                    <li><a href="/product/men/grooming/">{{ $t('nav.GROOMING') }}</a></li>
                  </ul>
                  <div class="view-all"><a
                    target="_blank"
                    href="/product/men/sale/">{{ $t('nav.SHOPALLSALE') }}></a></div>
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
                  <div><a href="/product/men/clothing/jackets/?orderby=-betterprice_time"><img
                    class="sale-img lazyload"
                    src="https://mds0.com/static/img/20180905SALE.png"></a></div>
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
        <a
          :class="{ borderbottom: firstLevelIndex===4 }"          
          href="/designers/">{{ $t('common.DESIGNERS') }}</a>
        <ul
          v-if="firstLevelIndex===4"
          :style="secondmenuStyle"
          class="d-flex align-items-center navbar-secondmenu designers-submenu">
          <li
            class="dropdown"
            @mouseover="changeSecondLevelIndex(0)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===0 }"
              href="/" >{{ $t('nav.HOTDESIGNERS') }}</a>
            <ul
              v-if="secondLevelIndex===0"
              :style="thirdmenuStyle"
              class="navbar-thirdmenu">
              <div class="d-flex justify-content-between thirdmenu-wrapper">
                <div class="sale-designers-box">
                  <div class="menucategory-title">{{ $t('common.DESIGNERS') }}</div>
                  <ul class="d-flex flex-column flex-wrap sub-menu">
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
                  <div class="view-all"><a
                    target="_blank"
                    href="/designers/">{{ $t('nav.VIEWALL') }}></a></div>
                </div>
                <div class="store-img">
                  <a
                    target="_blank"
                    href="/GUCCI-women/">
                    <img
                      class="lazyload"
                      src="https://mds0.com/static/img/mini_header/w_designer.jpg">
                  </a>
                </div>
              </div>
            </ul>
          </li>
          <li
            v-for="n in 26"
            :key="n"
            class="dropdown letter-box"
            @mouseover="changeSecondLevelIndex(n)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===n }"
              :href="'/designers/#p'+String.fromCharCode(64 + n)">{{ String.fromCharCode(64 + n) }}</a>
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
                    href="/designers/">{{ $t('nav.VIEWALL') }}></a>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown letter-box"
            @mouseover="changeSecondLevelIndex(27)"
            @mouseout="changeSecondLevelIndex(-1)">
            <a
              :class="{ borderbottom: secondLevelIndex===27 }"
              href="/designers/#p#">#</a>
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
                    href="/designers/">{{ $t('nav.VIEWALL') }}></a>
                </div>
              </div>
            </ul>
          </li>
          <li
            class="dropdown letter-box search-box"
            @mouseover="changeSecondLevelIndex(28)"
            @mouseout="changeSecondLevelIndex(-1)">
            <input
              v-model="searchTxt"
              :placeholder="$t('nav.FILTERBYDESIGNERNAME')"
              type="text"
              @keyup="searchKeyUp">
            <img src="https://mds0.com/static/img/20180905search_b.svg">
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
                    href="/designers/">{{ $t('nav.VIEWALL') }}></a>
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
        <a
          :class="{ borderbottom: firstLevelIndex===5 }"          
          href="/looks/">{{ $t('nav.COMMUNITY') }}</a>
        <ul
          v-if="firstLevelIndex===5"
          :style="secondmenuStyle"
          style="height: 350px"
          class="d-flex align-items-center navbar-secondmenu">
          <div class="d-flex justify-content-between thirdmenu-wrapper community-con">
            <div style="width: 750px">
              <div class="menucategory-title">{{ $t('nav.BESTLOOKS') }}</div>
              <ul class="d-flex justify-content-between">
                <li
                  v-for="(e,i) in navHeadJson.moments"
                  :key="i">
                  <a
                    :href="'https://modesens.com/u/'+e.lsuname+'/'+e.umid+'/?popup=open'"
                    target="_blank">
                    <div class="momentimg-box">
                      <img
                        :src="e.link+'s'"
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
                  :src="lsuser.icon"
                  :alt="lsuser.username"></div>
                <span>{{ $t('nav.ORGANIZEMYCLOSET') }}</span>
              </a>
              <div
                v-else
                @click="openspmodal">
                <div><img
                  :src="gconfig.UNLOGIN_ICON"></div>
                <span>{{ $t('nav.LOGINTOBUILDMYCLOSET') }}</span>
              </div>
            </div>
            <ul style="width: 250px">
              <div class="menucategory-title">{{ $t('nav.WHOTOFOLLOW') }}</div>
              <ul>
                <li
                  v-for="(e,i) in navHeadJson.users"
                  :key="i"
                  class="d-flex justify-content-between follow-userbox">
                  <a
                    :href="'/u/'+e.username"
                    target="_blank"
                    class="d-flex justify-content-center align-items-center follow-usericon">
                    <img
                      :src="e.icon"
                      class="w-100">
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
                      @click="followEvent(i, e.username, e.uid, 'follow')">{{ $t('nav.Follow') }}</div>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </ul>
      </li>
      <li
        class="dropdown"
        @mouseover="changeFirstLevelIndex(6)"
        @mouseout="changeFirstLevelIndex(-1)">
        <a
          :class="{ borderbottom: firstLevelIndex===6 }"          
          href="/why-modesens/">{{ $t('nav.WHYMODESENS') }}</a>
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
      navHeadJson: '',
      coupons: null
    }
  },
  computed: {
    lsuser() {
      console.log(this.$store.state.lsuser)
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
  mounted() {
    // if ($(document).width() > 1199) {
    //   let headerH = $('.header').height()
    //   console.log(
    //     headerH,
    //     $('.nav-pc-menu').offset().left,
    //     $('.navbar-secondmenu').height()
    //   )
    //   $('.navbar-secondmenu').css({
    //     top: headerH + 'px',
    //     'padding-left': $('.nav-pc-menu').offset().left
    //   })
    //   $('.navbar-thirdmenu').css({
    //     top: headerH + $('.navbar-secondmenu').height() + 'px'
    //   })
    // }
  },
  methods: {
    changeFirstLevelIndex(index) {
      clearTimeout(this.menuTimer1)
      this.menuTimer1 = setTimeout(async () => {
        this.firstLevelIndex = index
        if (index === 5) {
          let { navHeadJson } = await this.$axios.get('/getnavhead/', {
            params: {}
          })
          this.navHeadJson = navHeadJson
        }
      }, 300)
    },
    changeSecondLevelIndex(index) {
      clearTimeout(this.menuTimer2)
      this.menuTimer2 = setTimeout(() => {
        this.secondLevelIndex = index
        if (this.firstLevelIndex === 4 && index > 0) {
          let letter = ''
          if (index < 28) {
            letter = $('.letter-box > a')
              .eq(index - 1)
              .html()
              .toLowerCase()
          } else {
            letter = this.searchTxt
          }
          this.getHint2(letter)
        }
        if (this.firstLevelIndex === 3 && index === 0) {
          this.getOffers()
        }
      }, 300)
    },
    async getHint2(txt) {
      var data = {}
      data.txt = txt
      data.amount = 30
      data.prefix = 1
      data.typs = 'D'
      let { rhints } = await this.$axios.get('/hint2/', { params: data })
      this.designers = rhints.designers
    },
    async getOffers() {
      var data = {}
      data.amount = 5
      data.format = 'json'
      let { coupons } = await this.$axios.post('/offers/', data)
      this.coupons = coupons
    },
    searchKeyUp() {
      this.getHint2(this.searchTxt)
    },
    openspmodal() {
      $('#spmsg').html(this.$t('Modals.JoinModeSens'))
      this.$root.$emit('bv::show::modal', 'spmodal')
    },
    followEvent(i, username, uid, action) {
      if (this.$store.state.login_status) {
        this.postFollow(i, action, uid)
      } else {
        $('#spmsg').html(
          this.$t('nav.JoinModeSenstofollow') +
            username +
            this.$t('nav.scloset')
        )
        this.$root.$emit('bv::show::modal', 'spmodal')
      }
    },
    async postFollow(action, uid) {
      var data = {}
      data.action = action
      data.uni = 1
      data.feuid = uid
      let obj = await this.$axios.post('/follow/', data)
      if (obj.action === 'follow') {
        $('.follow-btn')
          .eq(i)
          .html(this.$t('nav.Following'))
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/components/header/threeLevelMenu.less';
</style>
