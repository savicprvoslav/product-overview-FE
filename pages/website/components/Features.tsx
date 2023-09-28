import { DocumentIcon, PlayCircleIcon, LockClosedIcon, SunIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real Time Updates',
    description:
      'Watch how are votes, ideas and feedbacks are coming in real time. No need to refresh the page.',
    icon: PlayCircleIcon,
  },
  {
    name: 'Unlimited users',
    description:
      'We scale automatically so you can only worry how to bring more people to share their ideas.',
    icon: SunIcon,
  },
  {
    name: 'Reports',
    description:
      'We provide you with all the data you need to make the right decisions.',
    icon: DocumentIcon,
  },
  {
    name: 'Advanced security',
    description:
      'In case an information slips trough, no worries we are encrypting everything.',
    icon: LockClosedIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Teamwork could not be more fun, and simpler with Planning Poker all will enjoy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            After years of experience in the field, we have created the best planning poker with all the features you need and with no features that we want to charge.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
