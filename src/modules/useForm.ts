import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
// import { isNotEmpty } from '@/components/forms/validations/rules'
import { helpers, required } from "@vuelidate/validators";

type Agreement = {
  name: string;
  agree: boolean;
};

const emptyData = (): Agreement => ({
  name: "Bob",
  agree: false,
});

const rules = {
  name: { required },
  agree: { required },
};

export const useForm = function () {
  const data = reactive(emptyData());
  const model = useVuelidate(rules, data);
  const clearData = function () {
    model.value.$reset();
    Object.assign(data, emptyData());
  };

  const modelIsChanged = computed(() => {
    return JSON.stringify(data) === JSON.stringify(emptyData());
  });

  return {
    model,
    modelIsChanged,
    clearData,
  };
};
