<template>
  <section>
    <h1>this is myloyalty1</h1>
    <div class="row">
      <div class="col-md-4 col-md-offset-2 demo">
        <h4>Your Date Range Picker</h4>
        <input 
          id="config-demo"
          type="text" 
          class="form-control">
        <i class="glyphicon glyphicon-calendar fa fa-calendar"/>
      </div>
    </div>
  </section>
</template>
<script>
import daterangepicker from 'bootstrap-daterangepicker'
export default {
  mounted() {
    var beginTimeStore = ''
    var endTimeStore = ''
    $('#config-demo').daterangepicker(
      {
        timePicker: true,
        timePicker24Hour: true,
        linkedCalendars: false,
        autoUpdateInput: false,
        locale: {
          format: 'YYYY-MM-DD',
          separator: ' ~ ',
          applyLabel: '应用',
          cancelLabel: '取消',
          resetLabel: '重置'
        }
      },
      function(start, end, label) {
        beginTimeStore = start
        endTimeStore = end
        console.log(this.startDate.format(this.locale.format))
        console.log(this.endDate.format(this.locale.format))
        if (!this.startDate) {
          this.element.val('')
        } else {
          this.element.val(
            this.startDate.format(this.locale.format) +
              this.locale.separator +
              this.endDate.format(this.locale.format)
          )
        }
      }
    )
  }
}
</script>



<style scoped>
@import 'http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css';
@import 'https://cdn.bootcss.com/bootstrap-daterangepicker/2.1.25/daterangepicker.css';
</style>
