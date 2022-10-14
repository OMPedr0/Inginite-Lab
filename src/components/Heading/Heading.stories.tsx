import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading',
        size: 'md'
    },
    argTypes: {
        size: {
            control : {
                options: ['sm','md','lg'],
                type:'inline-radio',
            }
        }
    }

} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Samll: StoryObj<HeadingProps> = {
    args: {
        children: 'Heading',
        size:'sm',
    },
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        children: 'Heading',
        size:'lg',
    }
}

export const CunstomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <p>Heading with h1</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild:{
            table: {
                disable: true,
            }
        }
    }
}