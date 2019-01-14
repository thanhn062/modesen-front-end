<template>
  <div>
    <b-form
      v-if="show"
      @submit="onSubmit"
      @reset="onReset">
      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="exampleInput1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"/>
      </b-form-group>
      <b-form-group
        id="exampleInputGroup2"
        label="Your Name:"
        label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"/>
      </b-form-group>
      <b-form-group
        id="exampleInputGroup3"
        label="Food:"
        label-for="exampleInput3">
        <b-form-select
          id="exampleInput3"
          v-model="form.food"
          :options="foods"
          required/>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group
          id="exampleChecks"
          v-model="form.checked">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button
        type="submit"
        variant="primary">Submit</b-button>
      <b-button
        type="reset"
        variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
