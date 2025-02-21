import * as request from '~/utils/request';

const search = async (value) => {

    const userSearchApi = 'users/search'

    try {
        const searchData = await request.get(userSearchApi, {
            params: {
                q: value,
                type: 'less'
            }
        })

        return searchData.data

    } catch (error) {
        throw new Error(error)
    }
}

export { search }