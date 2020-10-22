import { ref } from 'vue'
import axios from 'axios'

function useAxios () {
  const response = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const exec = async ({ url, method = 'get', data }) => {
    loading.value = true
    try {
      const result = await axios({
        url,
        method,
        data
      })

      loading.value = false
      response.value = await result
    } catch (problem) {
      loading.value = false
      error.value = problem.response
    }
  }

  return {
    response,
    error,
    loading,
    exec
  }
}

export default useAxios
