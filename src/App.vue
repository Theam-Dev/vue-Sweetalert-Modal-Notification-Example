<template>
  <div class="container p-2">
  <h4>A basic Message</h4>
  <button @click="basicAlert" class="btn btn-primary">Basic Message</button>
  <h4>A basic Error Message</h4>
  <button @click="showAlertError" class="btn btn-success">Basic Error</button>
  <h4>Yes No Question Message</h4>
  <button @click="yesNoQuestion" class="btn btn-info">Yes No Quest</button>
  </div>
</template>
<script>

export default {
  name: 'App',
  methods:{
    basicAlert() {
      this.$swal('Hello Vue world!!!');
    },
    showAlertError(){
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    },
    yesNoQuestion(){
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Yes Delete",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
    }
  }
}
</script>