import toast from 'react-hot-toast'

const promiseToast = async (
  promise,
  successMessage,
  errorMessage,
  loadingMessage = 'Loading...',
  id = 'toast',
) => {
  toast.promise(
    promise,
    {
      loading: loadingMessage,
      success: successMessage,
      error: errorMessage,
    },
    { id: id },
  )
}

export { promiseToast }
