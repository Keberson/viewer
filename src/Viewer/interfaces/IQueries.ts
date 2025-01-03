export interface IUziPage {
    id: string,
    page: number
}

export interface IUzi {
    id: string,
    projection: 'long' | 'cross',
    patient_id: string,
    device_id: number,
    create_at: string
}
