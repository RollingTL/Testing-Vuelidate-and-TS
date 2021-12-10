# Testing-Vuelidate-and-TS
Repo to demonstrate TS errors with Vueidate

Errors in App.vue file:

  <boolean-input v-model:value="model.agree.$model" />
  <name-input v-model:value="model.name.$model" />
  
Type 'unknown' is not assignable to type 'string'.ts(2322)
(JSX attribute) value: string
  
  

