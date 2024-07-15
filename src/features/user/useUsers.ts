import { fetchUsers } from '~/fetchers/user'

import { useSimpleQuery } from '~/hooks/useSimpleQuery'

const useUsers = () => useSimpleQuery((signal: AbortSignal) => fetchUsers(9, { signal }))

export { useUsers }
