import { Card, Stack, Text, TextInput } from '@sanity/ui';
import React from 'react';
import { ObjectInputProps, PatchEvent, set } from 'sanity';

interface HeroValue {
  title?: { fr?: string; en?: string }[]
  subtitle?: { fr?: string; en?: string }
  image?: string
}

export const HeroPreview: React.FC<ObjectInputProps<HeroValue>> = ({ value, onChange }) => {
  const titles = value?.title || []

  const concatenatedTitle = Array.isArray(titles)
    ? titles.map((t) => t.fr || t.en).join(' | ')
    : 'No title'

  const handleTitleChange = (index: number, lang: 'fr' | 'en', newValue: string) => {
    const newTitles = [...titles]
    newTitles[index] = { ...newTitles[index], [lang]: newValue }
    onChange(PatchEvent.from(set({ ...value, title: newTitles })))
  }

  const handleSubtitleChange = (lang: 'fr' | 'en', newValue: string) => {
    onChange(PatchEvent.from(set({ ...value, subtitle: { ...value?.subtitle, [lang]: newValue } })))
  }

  const handleImageChange = (newValue: string) => {
    onChange(PatchEvent.from(set({ ...value, image: newValue })))
  }

  return (
    <Card padding={4} radius={2} shadow={1} tone="primary">
      <Stack space={3}>
        <Text size={2} weight="semibold">
          HERO Editor
        </Text>

        {titles.map((t, i) => (
          <Stack key={i} space={1}>
            <TextInput
              value={t.fr || ''}
              onChange={(e) => handleTitleChange(i, 'fr', e.currentTarget.value)}
              placeholder={`Title (FR) #${i + 1}`}
            />
            <TextInput
              value={t.en || ''}
              onChange={(e) => handleTitleChange(i, 'en', e.currentTarget.value)}
              placeholder={`Title (EN) #${i + 1}`}
            />
          </Stack>
        ))}

        <TextInput
          value={value?.subtitle?.fr || ''}
          onChange={(e) => handleSubtitleChange('fr', e.currentTarget.value)}
          placeholder="Subtitle (FR)"
        />
        <TextInput
          value={value?.subtitle?.en || ''}
          onChange={(e) => handleSubtitleChange('en', e.currentTarget.value)}
          placeholder="Subtitle (EN)"
        />

        <TextInput
          value={value?.image || ''}
          onChange={(e) => handleImageChange(e.currentTarget.value)}
          placeholder="Image URL"
        />

        <Text><strong>Preview:</strong> {concatenatedTitle}</Text>
      </Stack>
    </Card>
  )
}
