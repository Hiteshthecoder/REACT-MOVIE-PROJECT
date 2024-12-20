import { useQuery } from "react-query"
import { movieMainQuery } from "../graphql_basics"

export default function GqlBasicsComponent() {

    // error, loading, data

    const { isLoading, error, data } = useQuery(movieMainQuery);

    if (isLoading) {
        return <h1>please wait</h1>
    }
    else if (error) {
        return <h1>{error}</h1>
    }

    return <>
        <h1>data fetched sucessfully</h1>
    </>
}