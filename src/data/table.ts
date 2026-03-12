export const TABLE_DATA = {
    columns: [
        {
            label: 'Name',
            accessorKey: 'name'
        },
        {
            label: 'Email',
            accessorKey: 'email'
        },
        {
            label: 'Phone',
            accessorKey: 'phone'
        },
    ],
    rows: Array.from({ length: 100 }, (_, i) => ({
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `${Math.floor(100 + Math.random() * 899)}-${Math.floor(100 + Math.random() * 899)}-${Math.floor(1000 + Math.random() * 8999)}`
    }))
};
