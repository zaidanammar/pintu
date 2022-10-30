import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chip from '../../components/atoms/Chip'
import { ecosystemIcon } from '../../assets'

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = () => (
  <article className="p-4">
    <h1 className=" font-heading text-2xl font-semibold">Chip</h1>
    <section className="flex flex-col max-w-sm">
      <div className="mt-5">
        <p className="font-medium font-heading mb-3">Chip regular</p>
        <Chip title="Chip" icon={ecosystemIcon} />
      </div>
      <div className="mt-5">
        <p className="font-medium font-heading mb-3">Chip Fullwidth</p>
        <Chip title="Chip" icon={ecosystemIcon} fullWidth />
      </div>
    </section>
  </article>
)

export const Default = Template.bind({})
