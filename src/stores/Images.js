
import { update } from '../actions'

const fetch = data => (state, actions) => {
  const { index = 0 } = state
  const image = data.images[index]
  const condition = index < data.images.length

  condition && window.fetch('S3_URL' + image)
    .then(res => res.blob())
    .then(blob => {
      actions.update({
        index: index + 1,
        [image]: {
          url: window.URL.createObjectURL(blob)
        }
      })

      actions.fetch({
        images: data.images
      })
    })
}

const Images = {
  fetch,
  update
}

export default Images
