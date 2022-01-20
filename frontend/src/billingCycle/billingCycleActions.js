import axios from 'axios'
const BASE_URL = 'http://localhost:3005/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHET',
        payload: request
    }
}