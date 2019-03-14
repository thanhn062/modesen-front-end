<template>
  <div
    v-b-modal.service-modal
    id="customer-service-modal"
    data-ga-click="Side-Customer service--"/>
</template>
<style lang="less">
@import '../assets/css/common.less';
#customer-service-modal {
  position: fixed;
  right: 0px;
  top: 65%;
  width: 30px;
  height: 46px;
  margin-top: 47px;
  margin-right: 10px;
  border-bottom: 1px solid transparent;
  background: url(/img/20180929call_customer_service.svg) center center
    no-repeat;
  background-size: contain;
  background-size: 84%;
  z-index: 100;
  cursor: pointer;
}
</style>
