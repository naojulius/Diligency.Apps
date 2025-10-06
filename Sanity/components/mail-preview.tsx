import { Card, Stack, Text } from '@sanity/ui'
import type { ObjectInputProps } from 'sanity'

export const MailPreview = (props: ObjectInputProps) => {
    const { value } = props

    return (
        <Card padding={4} radius={2} shadow={1} tone="primary">
            <Stack space={3}>
                <Text size={2} weight="semibold">📧 Aperçu du mail</Text>

                <Text><strong>Nom:</strong> {value?.firstName || '—'}</Text>
                <Text><strong>Prénom:</strong> {value?.lastName || '—'}</Text>
                <Text><strong>Email:</strong> {value?.email || '—'}</Text>
                <Text><strong>Message:</strong></Text>
                <Text muted>{value?.message || '—'}</Text>
            </Stack>
        </Card>
    )
}
