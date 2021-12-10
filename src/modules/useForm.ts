import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

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

  return {
    model,
  };
};
