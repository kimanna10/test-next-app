import { use } from 'react'

export default function UserId({ params }) {
    const { userId } = use(params)
    return (
        <div>User's page:{userId}</div>
    )
}
