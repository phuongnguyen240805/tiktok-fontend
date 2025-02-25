import * as request from '~/utils/request';

const search = async (q, type = 'less') => {

    const userSearchApi = 'users/search'

    try {
        const searchData = await request.get(userSearchApi, {
            params: {
                q,
                type
            }
        })

        return searchData.data

    } catch (error) {
        throw new Error(error)
    }
}

export { search }