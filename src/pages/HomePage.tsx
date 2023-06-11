import { useSearchUsersQuery } from "../store/github/github.api"

export function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('nikitsch')

  return (
    <div>home</div>
  )
}