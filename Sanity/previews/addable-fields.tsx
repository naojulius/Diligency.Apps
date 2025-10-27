import type { ObjectInputProps } from 'sanity'
import { set } from 'sanity'

export function AddableField(props: ObjectInputProps) {
    const { value, onChange, renderDefault, schemaType } = props

    // Extract a friendly name for the button
    const fieldTitle = schemaType.title || schemaType.name
    const buttonLabel = `➕ Add ${fieldTitle}`

    // If the field has no value, show the add button
    if (!value) {
        return (
            <button
                type="button"
                onClick={() => onChange(set({}))}
                style={{
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    background: '#f9f9f9',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                }}
            >
                {buttonLabel}
            </button>
        )
    }

    // Otherwise render the default field input
    return renderDefault(props)
}
