const BASE_URL = import.meta.env.VITE_URL_BACKEND_DEV

const urlHelper = {
  predict: () => `${BASE_URL}predict`,
}

export default urlHelper
