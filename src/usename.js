import { ref } from 'vue'

const useName = () => {
  const name = ref('Hugo')

  return {
    name,
  };
};

export default useName;