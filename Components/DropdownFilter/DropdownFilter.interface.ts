export interface DropdownFilterProps {
    elements: {
        title: string,
        returnedValue: any
    }[]
    handleSelectSetState: (value: any) => void
}