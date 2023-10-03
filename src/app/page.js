import { Home } from '@/components/home/components/home'
import Image from 'next/image'

export default function Page() {
  const options = {
    options: {
      is_required: false,
      is_image: false,
      available_types: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Multiple Choice',
          value: 'multiple_choice',
        },
      ],
      selected_type: '',
    },
  }

  const forms = {
    question: {
      title: '',
      description: '',
      image_url: '',
    },
  }

  return <Home data={options} />
}
