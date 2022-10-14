import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text',
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

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Samll: StoryObj<TextProps> = {
    args: {
        children: 'Text',
        size:'sm',
    },
}

export const Large: StoryObj<TextProps> = {
    args: {
        children: 'Text',
        size:'lg',
    }
}

export const CunstomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Teste Cunstom</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}